import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// styles
import styles from "../styles/main";

const Test = () => {
  const { counter, bool } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <Text>{bool ? "ha" : "no"}</Text>
      <Button title="inc" onPress={() => dispatch({ type: "INC" })} />
      <Button title="test" onPress={() => dispatch({ type: "FLIP" })} />
    </View>
  );
};

export default Test;
