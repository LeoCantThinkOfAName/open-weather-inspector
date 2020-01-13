import React from "react";
import { View, Text } from "react-native";

// styles
import styles from "../styles/main";

const EmptyScrren = props => {
  console.log(props);
  return <View style={styles.container}>{props.children}</View>;
};

export default EmptyScrren;
