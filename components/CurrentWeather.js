import React, { useState, useEffect } from "react";
import { View, Animated } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

// components
import ThemeText from "./ThemeText";

// helpers
import tempConverter from "../helpers/tempConverter";
import conditionConverter from "../helpers/conditionConverter";

// styles
import styles from "../styles/main";

const CurrentWeather = ({ temp, weather }) => {
  const { theme } = useSelector(state => state);
  const [animateTemp] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animateTemp, {
      toValue: 1,
      duration: 1500,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.mainTempWrapper, { opacity: animateTemp }]}>
      <View>
        <View style={styles.conditionWrapper}>
          <View style={styles.conditionTempWrapper}>
            <ThemeText style={styles.conditionTempLabel}>HIGH</ThemeText>
            <ThemeText style={styles.conditionTemp}>
              {tempConverter({
                unit: "c",
                temp: temp.high,
              })}
            </ThemeText>
          </View>
          <View style={styles.conditionTempWrapper}>
            <ThemeText style={styles.conditionTempLabel}>LOW</ThemeText>
            <ThemeText style={styles.conditionTemp}>
              {tempConverter({
                unit: "c",
                temp: temp.low,
              })}
            </ThemeText>
          </View>
          <View style={styles.conditionTempWrapper}>
            <MaterialCommunityIcons
              size={50}
              name={conditionConverter(weather).icon}
              color={theme.black}
              style={{
                color: theme.black,
                textShadowColor: theme.white,
                textShadowRadius: 3,
              }}
            />
          </View>
        </View>
        <ThemeText style={styles.mainTemp}>
          {tempConverter({
            unit: "c",
            temp: temp.main,
          })}
        </ThemeText>
      </View>
    </Animated.View>
  );
};

export default CurrentWeather;
