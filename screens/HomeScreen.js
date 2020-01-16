import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Animated, ScrollView } from "react-native";
import { useSelector } from "react-redux";

// custom hooks
import useFetch from "../helpers/useFetch";

// components
import Wrapper from "../components/Wrapper";
import Background from "../components/Background";
import ThemeText from "../components/ThemeText";
import FavButton from "../components/FavButton";
import Forecast from "../components/Forecast";
import CurrentWeather from "../components/CurrentWeather";

// helpers
import currentProcessor from "../helpers/currentProcessor";

// styles
import styles from "../styles/main";

const HomeScreen = ({ route }) => {
  const {
    name,
    params: { id },
  } = route;
  const forecast = useFetch({
    url: `http://api.openweathermap.org/data/2.5/weather?id=${id}`,
    processor: currentProcessor,
  });
  const [animtePos] = useState(new Animated.Value(100));
  const [animteOpacity] = useState(new Animated.Value(0));
  const { theme } = useSelector(state => state);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(animtePos, {
        toValue: 0,
        duration: 1000,
      }),
      Animated.timing(animteOpacity, {
        toValue: 1,
        duration: 1000,
      }),
    ]).start();
  }, [route]);

  return (
    <View style={styles.container}>
      <Background source={require("../assets/sky.jpg")} />
      <Wrapper>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.mainScroll}
        >
          <View style={styles.mainArea}>
            <View style={styles.alignCenter}>
              <Animated.View
                style={[
                  styles.header,
                  {
                    transform: [{ translateY: animtePos }],
                    opacity: animteOpacity,
                  },
                ]}
              >
                <ThemeText style={styles.heading}>{name}, TW</ThemeText>
                <FavButton route={route} />
              </Animated.View>
              <ThemeText>Clear Sky</ThemeText>
            </View>
            {forecast.response && (
              <CurrentWeather
                temp={forecast.response.temp}
                weather={forecast.response.weather}
              />
            )}
          </View>
          <View>
            {forecast.loading && <ThemeText>loading</ThemeText>}
            {forecast.response && <Forecast id={id} />}
            {forecast.error && <ThemeText>Not Available</ThemeText>}
          </View>
        </ScrollView>
      </Wrapper>
    </View>
  );
};

export default HomeScreen;
