import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

// styles
import styles from "../styles/main";

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBar}>
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

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key
          });
        };

        return (
          <View key={index} style={styles.tabBarItem}>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ["selected"] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabBarButton}
            >
              <Feather
                name={icon(label)}
                size={20}
                color={isFocused ? "#fff" : "#999"}
              />
              <Text style={{ color: isFocused ? "#fff" : "#999" }}>
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
