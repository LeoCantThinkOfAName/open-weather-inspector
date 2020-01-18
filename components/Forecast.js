import React from "react";
import { View } from "react-native";

// custom hooks
import useFetch from "../helpers/useFetch";

// components
import ThemeText from "./ThemeText";
import Daily from "./Daily";
import Hourly from "./Hourly";
import HorizontalLine from "./HorizontalLine";

// helper
import forecastProcessor from "../helpers/forecastProcessor";

// styles
import styles from "../styles/main";

const Forecast = ({ id }) => {
  const forecast = useFetch({
    url: `http://api.openweathermap.org/data/2.5/forecast?id=${id}`,
    processor: forecastProcessor,
  });

  return (
    <View style={styles.forecast}>
      <ThemeText style={styles.heading}>Hourly Forecast</ThemeText>
      <HorizontalLine />
      {forecast.response && <Hourly days={forecast.response} />}
      {forecast.response && <Daily days={forecast.response} />}
      {forecast.loading && <ThemeText>Loading</ThemeText>}
      {forecast.error && <ThemeText>Error</ThemeText>}
    </View>
  );
};

export default Forecast;
