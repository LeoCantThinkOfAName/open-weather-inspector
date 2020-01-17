import React, { useState, useEffect, useRef } from "react";
import {
  View,
  SafeAreaView,
  Animated,
  ScrollView,
  BackHandler
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import { CommonActions } from "@react-navigation/native";

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
import conditionConverter from "../helpers/conditionConverter";
import hexToRgb from "../helpers/hexToRgb";

// styles
import styles from "../styles/main";

const HomeScreen = ({ route, navigation }) => {
  const {
    name,
    params: { id }
  } = route;
  const forecast = useFetch({
    url: `http://api.openweathermap.org/data/2.5/weather?id=${id}`,
    processor: currentProcessor
  });
  const { theme } = useSelector(state => state);
  const backHandler = useRef(null);
  const [animtePos] = useState(new Animated.Value(100));
  const [animteOpacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.timing(animtePos, {
        toValue: 0,
        duration: 1000
      }),
      Animated.timing(animteOpacity, {
        toValue: 1,
        duration: 1000
      })
    ]).start();
  }, [route]);

  useEffect(() => {
    backHandler.current = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackPress
    );
    return () => backHandler.current.remove();
  }, []);

  const handleBackPress = () => {
    if (!navigation.isFocused) {
      return false;
    }

    if (navigation.canGoBack()) {
      navigation.dispatch({
        ...CommonActions.goBack()
      });
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <Background
        source={
          forecast.response
            ? conditionConverter(forecast.response.weather).image
            : null
        }
      />
      <SafeAreaView style={styles.mainScroll}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[styles.mainScroll]}
        >
          <LinearGradient
            colors={[
              "rgba(0, 0, 0, 0)",
              "rgba(0, 0, 0, 0)",
              "rgba(0, 0, 0, 0)",
              hexToRgb(theme.white, 0.5),
              hexToRgb(theme.white, 1)
            ]}
          >
            <Wrapper>
              <View style={styles.mainArea}>
                <View style={styles.alignCenter}>
                  <Animated.View
                    style={[
                      styles.header,
                      {
                        transform: [{ translateY: animtePos }],
                        opacity: animteOpacity
                      }
                    ]}
                  >
                    <ThemeText style={styles.heading}>{name}</ThemeText>
                    <FavButton route={route} />
                  </Animated.View>
                  <ThemeText>
                    {forecast.response && forecast.response.description}
                  </ThemeText>
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
            </Wrapper>
          </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
