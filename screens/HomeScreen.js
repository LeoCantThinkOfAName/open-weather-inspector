import React, { useState, useEffect, useRef } from "react";
import {
  View,
  SafeAreaView,
  Animated,
  ScrollView,
  BackHandler,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import { CommonActions } from "@react-navigation/native";

// custom hooks
// import useFetch from "../helpers/useFetch";

// components
import Wrapper from "../components/Wrapper";
import Background from "../components/Background";
import ThemeText from "../components/ThemeText";
import FavButton from "../components/FavButton";
import Forecast from "../components/Forecast";
import CurrentWeather from "../components/CurrentWeather";

// helpers
import conditionConverter from "../helpers/conditionConverter";
import hexToRgb from "../helpers/hexToRgb";

// styles
import styles from "../styles/main";

const HomeScreen = ({ route, navigation }) => {
  const {
    params: { id, city },
  } = route;
  const { cache } = useSelector(state => state);
  const { theme } = useSelector(state => state);
  const { ui } = useSelector(state => state);
  const backHandler = useRef(null);
  const [animtePos] = useState(new Animated.Value(100));
  const [animteOpacity] = useState(new Animated.Value(0));
  const weather = cache.find(data => data.id === id);

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
        ...CommonActions.goBack(),
      });
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <Background
        source={
          weather && !ui.searchLoadin
            ? conditionConverter(weather.weather).image
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
              hexToRgb(theme.white, 0.8),
              hexToRgb(theme.white, 1),
            ]}
          >
            <Wrapper>
              <View style={styles.mainArea}>
                <View style={styles.alignCenter}>
                  <Animated.View
                    style={{
                      transform: [{ translateY: animtePos }],
                      opacity: animteOpacity,
                      alignItems: "center",
                    }}
                  >
                    <View style={styles.header}>
                      <ThemeText style={styles.heading}>
                        {!weather && `Can Not Found ${city}`}
                        {weather && weather.location.city}
                      </ThemeText>
                      {weather && (
                        <FavButton route={route} data={{ id, city }} />
                      )}
                    </View>
                    <ThemeText>
                      {weather && weather.description}
                      {!weather && "Please Check Your Search Term"}
                    </ThemeText>
                  </Animated.View>
                </View>
                {weather && (
                  <CurrentWeather
                    temp={weather.temp}
                    weather={weather.weather}
                  />
                )}
              </View>
              <View>{weather && <Forecast forecast={weather.forecast} />}</View>
            </Wrapper>
          </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
