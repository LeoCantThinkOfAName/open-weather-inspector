import React, { useState, useRef } from "react";
import { TextInput, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Feather } from "@expo/vector-icons";

// components
import HorizontalLine from "./HorizontalLine";
import Suggestions from "./Suggestions";
import Spinner from "./Spinner";

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
  const dispatch = useDispatch();

  const getCities = async input => {
    const cities = await searchCity(input);
    setCities(cities.slice(0, 10));
  };

  const handleChange = async input => {
    clearTimeout(inter.current);

    setText(input);

    if (input !== null && input !== undefined && input !== "") {
      inter.current = setTimeout(() => {
        getCities(input);
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
        {ui.searchPending && <Spinner />}
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
