import React, { useState, useEffect, useRef } from "react";
import { TextInput, View, Animated } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Feather, AntDesign } from "@expo/vector-icons";

// components
import HorizontalLine from "./HorizontalLine";
import Suggestions from "./Suggestions";

// helpers
import hexToRgb from "../helpers/hexToRgb";
import searchCity from "../helpers/searchCity";

// styles
import styles from "../styles/main";

const Search = ({ navigation }) => {
  const { theme } = useSelector(state => state);
  const { cache } = useSelector(state => state);
  const { ui } = useSelector(state => state);
  const [text, setText] = useState("");
  const [cities, setCities] = useState([]);
  const inter = useRef(null);
  const [looping] = useState(new Animated.Value(0));
  const dispatch = useDispatch();

  useEffect(() => {
    Animated.loop(
      Animated.timing(looping, {
        toValue: 1,
        duration: 500,
      }),
      { iterations: -1 }
    ).start();
  }, []);

  const handleChange = input => {
    clearTimeout(inter.current);

    setText(input);

    if (input !== null && input !== undefined && input !== "") {
      inter.current = setTimeout(() => {
        setCities(searchCity(input));
      }, 500);
    } else {
      setCities([]);
    }
  };

  const handleSubmit = () => {
    setCities([]);
    if (sessionScreen.find(screen => screen.city === text) === undefined) {
      dispatch({ type: "ADD_SCREEN", payload: { city: text } });
    }
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <Feather
          size={30}
          name="search"
          color={hexToRgb(theme.black, 0.8)}
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search A City"
          style={[styles.searchInput, { color: theme.black }]}
          value={text}
          onChangeText={handleChange}
          onSubmitEditing={handleSubmit}
        />
        {ui.searchPending && (
          <Animated.View
            style={[
              styles.searchSpinner,
              {
                transform: [
                  {
                    rotate: looping.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["0deg", "360deg"],
                    }),
                  },
                ],
              },
            ]}
          >
            <AntDesign
              size={15}
              name="loading1"
              color={hexToRgb(theme.black, 0.3)}
            />
          </Animated.View>
        )}
      </View>
      {cities.length > 0 && (
        <Suggestions
          cities={cities}
          setText={setText}
          setCities={setCities}
          theme={theme}
          navigation={navigation}
        />
      )}
      <HorizontalLine />
    </View>
  );
};

export default Search;
