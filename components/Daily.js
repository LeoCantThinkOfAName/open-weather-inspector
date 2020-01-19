import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { Feather } from "@expo/vector-icons";

// components
import ThemeText from "./ThemeText";
import HorizontalLine from "./HorizontalLine";

// helpers
import addSuffix from "../helpers/addSuffix";
import tempConverter from "../helpers/tempConverter";
import conditionConverter from "../helpers/conditionConverter";

// styles
import styles from "../styles/main";

const TableHead = ({ text }) => {
  return <ThemeText style={styles.tableHeadItem}>{text}</ThemeText>;
};

const Daily = ({ days }) => {
  const { theme } = useSelector(state => state);

  const calculateAverage = dayObj => {
    const reduced = dayObj.data.reduce((prev, current) => {
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
    <View style={styles.section}>
      <ThemeText style={[styles.heading, styles.alignLeft]}>
        Daily Forecast
      </ThemeText>
      <HorizontalLine />
      <View style={styles.tableHead}>
        <TableHead text="Day" />
        <TableHead text="Avg." />
        <TableHead text="Weather" />
        <TableHead text="High" />
        <TableHead text="Low" />
      </View>
      {days.map((day, index) => {
        const { temp } = calculateAverage(day);
        const main = temp.main / day.data.length;
        const low = temp.low / day.data.length;
        const high = temp.high / day.data.length;

        return (
          <View
            key={day + index}
            style={[
              styles.dayRow,
              {
                backgroundColor:
                  index % 2 === 0 ? "rgba(255, 255, 255, 0.1)" : null,
              },
            ]}
          >
            <ThemeText
              style={[styles.textCenter, styles.flexSpan, styles.dayDate]}
            >
              {day.title}
              <ThemeText style={styles.dateSuffix}>
                {addSuffix(day.title)}
              </ThemeText>
            </ThemeText>
            <ThemeText style={[styles.textCenter, styles.flexSpan]}>
              {tempConverter({
                unit: "c",
                temp: main,
              })}
            </ThemeText>
            <Feather
              style={[
                styles.textCenter,
                styles.flexSpan,
                {
                  color: theme.black,
                  textShadowColor: theme.white,
                  textShadowRadius: 3,
                },
              ]}
              size={25}
              name={conditionConverter(day.data[0].weather.id).icon}
              color={theme.black}
            />
            <ThemeText style={[styles.textCenter, styles.flexSpan]}>
              {tempConverter({
                unit: "c",
                temp: high,
              })}
            </ThemeText>
            <ThemeText style={[styles.textCenter, styles.flexSpan]}>
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

export default Daily;
