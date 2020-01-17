import React, { useState, useEffect } from "react";
import { TextInput, View, Animated } from "react-native";
import { useSelector } from "react-redux";
import { Feather, AntDesign } from "@expo/vector-icons";

// components
import HorizontalLine from "./HorizontalLine";

// helpers
import hexToRgb from "../helpers/hexToRgb";

// data
import cities from "../assets/city.json";

// styles
import styles from "../styles/main";

const Search = () => {
  const { theme } = useSelector(state => state);
  const [text, setText] = useState("");
  const [looping] = useState(new Animated.Value(0));
  const [pending, setPending] = useState(false);

  useEffect(() => {
    Animated.loop(
      Animated.timing(looping, {
        toValue: 1,
        duration: 500
      }),
      { iterations: -1 }
    ).start();
  }, []);

  console.log(cities);

  const handleChange = input => {
    setText(input);
  };

  const handleSubmit = () => {
    setText("");
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 10
        }}
      >
        <Feather
          size={30}
          name="search"
          color={hexToRgb(theme.black, 0.8)}
          style={{ marginHorizontal: 5 }}
        />
        <TextInput
          placeholder="Search A City"
          style={{ fontSize: 18 }}
          value={text}
          onChangeText={handleChange}
          onSubmitEditing={handleSubmit}
        />
        {pending && (
          <Animated.View
            style={{
              position: "absolute",
              right: 10,
              top: 20,
              transform: [
                {
                  rotate: looping.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "360deg"]
                  })
                }
              ]
            }}
          >
            <AntDesign
              size={15}
              name="loading1"
              color={hexToRgb(theme.black, 0.3)}
            />
          </Animated.View>
        )}
      </View>
      <HorizontalLine />
    </View>
  );
};

export default Search;
