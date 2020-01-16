import React from "react";
import { View } from "react-native";

// custom hooks
import useFetch from "../helpers/useFetch";

// components
import ThemeText from "./ThemeText";

// helper
import forecastProcessor from "../helpers/forecastProcessor";

const Days = ({ days }) => {
  return (
    <View style={{ height: 300, backgroundColor: "red" }}>
      {Object.keys(days).map((key, index) => (
        <ThemeText key={key}>{key}</ThemeText>
      ))}
    </View>
  );
};

const Forecast = ({ id }) => {
  const forecast = useFetch({
    url: `http://api.openweathermap.org/data/2.5/forecast?id=${id}`,
    processor: forecastProcessor
  });

  return (
    <View>
      {forecast.response && <Days days={forecast.response} />}
      {forecast.loading && <ThemeText>Loading</ThemeText>}
      {forecast.error && <ThemeText>Error</ThemeText>}
    </View>
  );
};

export default Forecast;
