import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

// styles
import styles from "../styles/main";

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;
        const icon = name => {
          switch (name) {
            case "Home":
              return "home";
            case "Setting":
              return "settings";
            case "Credit":
              return "info";
            default:
              return "check";
          }
        };

        return (
          <View key={index}>
            <TouchableOpacity>
              <Feather
                name={icon(label)}
                size={20}
                color={isFocused ? "#fff" : "#ccc"}
              />
              <Text style={{ color: isFocused ? "#fff" : "#ccc" }}>
                {label}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default TabBar;
