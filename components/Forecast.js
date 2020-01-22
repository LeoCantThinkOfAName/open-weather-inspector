import React from "react";
import { View } from "react-native";

// components
import ThemeText from "./ThemeText";
import Daily from "./Daily";
import Hourly from "./Hourly";

// styles
import styles from "../styles/main";

const Forecast = ({ forecast }) => {
  return (
    <View style={styles.forecast}>
      {forecast && <Hourly days={forecast} />}
      {forecast && <Daily days={forecast} />}
      {!forecast && <ThemeText>Error</ThemeText>}
    </View>
  );
};

export default Forecast;
