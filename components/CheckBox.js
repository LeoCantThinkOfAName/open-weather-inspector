import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { Feather } from "@expo/vector-icons";

// components
import ThemeText from "../components/ThemeText";

// helpers
import hexToRgb from "../helpers/hexToRgb";

// styles
import styles from "../styles/main";

const CheckBox = ({ description = "Description Goes Here!" }) => {
  const { theme } = useSelector(state => state);
  const [toggle, setToggle] = useState(false);

  const handlePress = () => {
    setToggle(!toggle);
  };

  return (
    <View style={styles.toggler}>
      <View style={styles.checkboxWrapper}>
        <ThemeText style={styles.togglerLabel}> </ThemeText>
        <TouchableOpacity
          style={[
            styles.checkbox,
            {
              backgroundColor: hexToRgb(theme.white, 0.5),
              borderColor: theme.black
            }
          ]}
          onPress={() => handlePress()}
        >
          <View
            style={[
              styles.checkboxIndicator,
              {
                backgroundColor: toggle
                  ? theme.black
                  : hexToRgb(theme.white, 0.5)
              }
            ]}
          >
            <Feather
              name="check"
              size={26}
              color={toggle ? theme.white : "transparent"}
            />
          </View>
        </TouchableOpacity>
      </View>
      <ThemeText style={[styles.togglerDescription, { color: theme.black }]}>
        {description}
      </ThemeText>
    </View>
  );
};

export default CheckBox;
