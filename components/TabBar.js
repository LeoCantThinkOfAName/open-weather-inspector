import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { Feather } from "@expo/vector-icons";

// helpers
import hexToRgb from "../helpers/hexToRgb";

// styles
import styles from "../styles/main";

const TabBar = ({ state, descriptors, navigation }) => {
  const { theme } = useSelector(state => state);

  return (
    <View
      style={[styles.tabBar, { backgroundColor: hexToRgb(theme.white, 0.8) }]}
    >
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
            case "Weather":
              return "sun";
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
                color={isFocused ? theme.black : "#999"}
              />
              <Text style={{ color: isFocused ? theme.black : "#999" }}>
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
