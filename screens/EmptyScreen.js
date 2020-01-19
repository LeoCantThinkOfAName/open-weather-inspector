import React from "react";
import { View } from "react-native";

// components
import ThemeText from "../components/ThemeText";

// styles
import styles from "../styles/main";

const EmptyScrren = props => {
  console.log(props);
  return (
    <View style={styles.container}>
      <ThemeText style={{ fontSize: 500 }}>Empty</ThemeText>
    </View>
  );
};

export default EmptyScrren;
