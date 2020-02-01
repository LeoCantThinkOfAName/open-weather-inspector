import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Animated, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

// helpers
import hexToRgb from "../helpers/hexToRgb";

// styles
import styles from "../styles/main";

const Spinner = () => {
  const { theme } = useSelector(state => state);
  const [looping] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(looping, {
        toValue: 1,
        duration: 500,
      }),
      { iterations: -1 }
    ).start();
  }, []);

  return (
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
      <AntDesign size={15} name="loading1" color={hexToRgb(theme.black, 0.3)} />
    </Animated.View>
  );
};

export default Spinner;
