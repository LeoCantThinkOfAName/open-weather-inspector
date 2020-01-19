import React from "react";
import { View } from "react-native";

// components
import ThemeText from "./ThemeText";
import Daily from "./Daily";
import Hourly from "./Hourly";

// helper
import forecastProcessor from "../helpers/forecastProcessor";

// styles
import styles from "../styles/main";

const Forecast = ({ id }) => {
  return (
    <View style={styles.forecast}>
      {/* {forecast.response && <Hourly days={forecast.response} />}
      {forecast.response && <Daily days={forecast.response} />}
      {forecast.loading && <ThemeText>Loading</ThemeText>}
      {forecast.error && <ThemeText>Error</ThemeText>} */}
    </View>
  );
};

export default Forecast;
