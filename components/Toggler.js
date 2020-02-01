import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Animated } from "react-native";
import { useSelector } from "react-redux";

// components
import ThemeText from "./ThemeText";

// helpers
import hexToRgb from "../helpers/hexToRgb";

// styles
import styles from "../styles/main";

const Toggler = ({
  label = "Label Goes Here!",
  description = "Description Goes Here!",
}) => {
  const { theme } = useSelector(state => state);
  const [toggle, setToggle] = useState(true);
  const [left] = useState(new Animated.Value(2));

  useEffect(() => {
    Animated.timing(left, {
      toValue: toggle ? 2 : 60 - 22 - 2 - 2 - 2,
      duration: 100,
    }).start();
  }, [toggle]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <View style={styles.toggler}>
      <View style={styles.togglerWrapper}>
        <ThemeText style={[styles.togglerLabel, { color: theme.black }]}>
          {label}
        </ThemeText>
        <TouchableOpacity
          style={[
            styles.togglerButton,
            {
              backgroundColor: hexToRgb(theme.white, 0.5),
              borderColor: theme.black,
            },
          ]}
          onPress={() => handleToggle()}
        >
          <Animated.View
            style={[
              styles.togglerIndicator,
              {
                backgroundColor: theme.black,
                left,
              },
            ]}
          ></Animated.View>
        </TouchableOpacity>
      </View>
      <ThemeText style={[styles.togglerDescription, { color: theme.black }]}>
        {description}
      </ThemeText>
    </View>
  );
};

export default Toggler;
