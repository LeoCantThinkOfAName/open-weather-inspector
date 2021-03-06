import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";

const ThemeText = ({ children, style }) => {
  const { theme } = useSelector(state => state);
  return (
    <Text
      style={[
        {
          color: theme.black,
          textShadowColor: theme.white,
          textShadowRadius: 3,
          fontSize: 16
        },
        style
      ]}
    >
      {children}
    </Text>
  );
};

export default ThemeText;
