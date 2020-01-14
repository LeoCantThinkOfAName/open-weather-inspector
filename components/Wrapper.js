import React from "react";
import { View } from "react-native";

// styles
import styles from "../styles/main";

const Wrapper = ({ children }) => {
  return <View style={[styles.wrapper, styles.alignCenter]}>{children}</View>;
};

export default Wrapper;
