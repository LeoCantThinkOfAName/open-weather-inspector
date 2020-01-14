import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { useSelector } from "react-redux";

// styles
import styles from "../styles/main";

const Toggler = ({
  label = "Label Goes Here!",
  description = "Description Goes Here!"
}) => {
  const { theme } = useSelector(state => state);
  const [toggle, setToggle] = useState(true);
  const [left] = useState(new Animated.Value(2));

  useEffect(() => {
    Animated.timing(left, {
      toValue: toggle ? 2 : 60 - 22 - 2 - 2 - 2,
      duration: 100
    }).start();
  }, [toggle]);

  useEffect(() => {
    console.log("rerendered: ", theme);
  }, [theme]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <View style={styles.toggler}>
      <View style={styles.togglerWrapper}>
        <Text style={[styles.togglerLabel, { color: theme.black }]}>
          {label}
        </Text>
        <TouchableOpacity
          style={[
            styles.togglerButton,
            { backgroundColor: theme.white, borderColor: theme.black }
          ]}
          onPress={() => handleToggle()}
        >
          <Animated.View
            style={[
              styles.togglerIndicator,
              {
                backgroundColor: theme.black,
                left
              }
            ]}
          ></Animated.View>
        </TouchableOpacity>
      </View>
      <Text style={[styles.togglerDescription, { color: theme.black }]}>
        {description}
      </Text>
    </View>
  );
};

export default Toggler;
