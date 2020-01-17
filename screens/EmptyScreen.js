import React from "react";
import { View, Text } from "react-native";

// styles
import styles from "../styles/main";

const EmptyScrren = props => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text>empty</Text>
    </View>
  );
};

export default EmptyScrren;
