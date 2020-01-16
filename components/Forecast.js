import React from "react";
import { View, ScrollView, SafeAreaView, SectionList } from "react-native";
import { useSelector } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// custom hooks
import useFetch from "../helpers/useFetch";

// components
import ThemeText from "./ThemeText";

// helper
import tempConverter from "../helpers/tempConverter";
import conditionConverter from "../helpers/conditionConverter";
import forecastProcessor from "../helpers/forecastProcessor";

// styles
import styles from "../styles/main";

const addSuffix = date => {
  const reminder = date % 10;
  const suffix =
    reminder === 1
      ? "st"
      : reminder === 2
      ? "nd"
      : reminder === 3
      ? "rd"
      : "th";

  return suffix;
};

const Daily = ({ days }) => {
  const { theme } = useSelector(state => state);

  const calculateAverage = dayObj => {
    const reduced = dayObj.data.reduce((prev, current, index) => {
      return {
        temp: {
          main: prev.temp.main + current.temp.main,
          low: prev.temp.low + current.temp.low,
          high: prev.temp.high + current.temp.high,
        },
      };
    });

    return reduced;
  };

  return (
    <View>
      <ThemeText style={styles.heading}>Daily Forecast</ThemeText>
      <View
        style={{
          height: 1,
          backgroundColor: "#fff",
          marginVertical: 5,
          opacity: 0.5,
        }}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <ThemeText style={{ flex: 1, textAlign: "center" }}>Day</ThemeText>
        <ThemeText style={{ flex: 1, textAlign: "center" }}>Avg.</ThemeText>
        <ThemeText style={{ flex: 1, textAlign: "center" }}>Weather</ThemeText>
        <ThemeText style={{ flex: 1, textAlign: "center" }}>High</ThemeText>
        <ThemeText style={{ flex: 1, textAlign: "center" }}>Low</ThemeText>
      </View>
      {days.map((day, index) => {
        const { temp } = calculateAverage(day);
        const main = temp.main / day.data.length;
        const low = temp.low / day.data.length;
        const high = temp.high / day.data.length;

        return (
          <View
            key={day + index}
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <ThemeText style={{ flex: 1, textAlign: "center" }}>
              {day.title}
              <ThemeText>{addSuffix(day.title)}</ThemeText>
            </ThemeText>
            <ThemeText style={{ flex: 1, textAlign: "center" }}>
              {tempConverter({
                unit: "c",
                temp: main,
              })}
            </ThemeText>
            <MaterialCommunityIcons
              style={{ flex: 1, textAlign: "center" }}
              size={30}
              name={conditionConverter(day.data[0].weather.id).icon}
              color={theme.black}
            />
            <ThemeText style={{ flex: 1, textAlign: "center" }}>
              {tempConverter({
                unit: "c",
                temp: high,
              })}
            </ThemeText>
            <ThemeText style={{ flex: 1, textAlign: "center" }}>
              {tempConverter({
                unit: "c",
                temp: low,
              })}
            </ThemeText>
          </View>
        );
      })}
    </View>
  );
};

const Hourly = ({ days }) => {
  const { theme } = useSelector(state => state);

  const convertDate = date => {
    const hour = new Date(date * 1000).getHours();
    const doubleDigits = hour < 10 ? "0" + hour : hour;
    return `${doubleDigits}:00`;
  };

  return (
    <SafeAreaView>
      <SectionList
        style={{ maxHeight: 300 }}
        sections={days}
        renderItem={({ item }) => {
          return (
            <View style={styles.conditionTempWrapper}>
              <ThemeText>{convertDate(item.date)}</ThemeText>
              <MaterialCommunityIcons
                size={30}
                name={conditionConverter(item.weather.id).icon}
                color={theme.black}
              />
              <ThemeText>
                {tempConverter({ unit: "c", temp: item.temp.main })}
              </ThemeText>
            </View>
          );
        }}
        renderSectionHeader={({ section: { title } }) => (
          <ThemeText
            style={{
              padding: 10,
              fontSize: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {title}
            <ThemeText style={{ fontSize: 12 }}>{addSuffix(title)}</ThemeText>
          </ThemeText>
        )}
        horizontal={true}
        keyExtractor={(item, index) => item.date}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const Forecast = ({ id }) => {
  const forecast = useFetch({
    url: `http://api.openweathermap.org/data/2.5/forecast?id=${id}`,
    processor: forecastProcessor,
  });

  return (
    <View style={{ marginTop: 100 }}>
      <ThemeText style={styles.heading}>Hourly Forecast</ThemeText>
      <View
        style={{
          height: 1,
          backgroundColor: "#fff",
          marginVertical: 5,
          opacity: 0.5,
        }}
      />
      {forecast.response && <Hourly days={forecast.response} />}
      {forecast.response && <Daily days={forecast.response} />}
      {forecast.loading && <ThemeText>Loading</ThemeText>}
      {forecast.error && <ThemeText>Error</ThemeText>}
    </View>
  );
};

export default Forecast;
