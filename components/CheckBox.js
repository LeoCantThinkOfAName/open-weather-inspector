import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { Feather } from "@expo/vector-icons";

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
        <Text style={styles.togglerLabel}> </Text>
        <TouchableOpacity
          style={[
            styles.checkbox,
            { backgroundColor: theme.white, borderColor: theme.black }
          ]}
          onPress={() => handlePress()}
        >
          <View
            style={[
              styles.checkboxIndicator,
              {
                backgroundColor: toggle ? theme.black : theme.white
              }
            ]}
          >
            <Feather name="check" size={26} color={theme.white} />
          </View>
        </TouchableOpacity>
      </View>
      <Text style={[styles.togglerDescription, { color: theme.black }]}>
        {description}
      </Text>
    </View>
  );
};

export default CheckBox;
