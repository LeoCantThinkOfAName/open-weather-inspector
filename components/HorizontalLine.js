import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

// styles
import styles from "../styles/main";

const HorizontalLine = () => {
  const { theme } = useSelector(state => state);
  return (
    <View style={[styles.horizontalLine, { backgroundColor: theme.black }]} />
  );
};

export default HorizontalLine;
