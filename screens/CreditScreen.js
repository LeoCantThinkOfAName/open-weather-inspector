import React from "react";
import { View, ScrollView } from "react-native";
import { useSelector } from "react-redux";

// components
import CreditItem from "../components/CreditItem";
import Background from "../components/Background";
import ThemeText from "../components/ThemeText";
import Wrapper from "../components/Wrapper";

// svg
import Logo from "../assets/logo-single.svg";

// styles
import styles from "../styles/main";
import openLink from "../helpers/openLink";

const credits = [
  {
    name: "Rain",
    author: "StockSnap",
    url: "https://pixabay.com/images/id-2590618",
  },
  {
    name: "Clear",
    author: "cegoh",
    url: "https://pixabay.com/images/id-3184798",
  },
  {
    name: "Thunder",
    author: "Free-Photos",
    url: "https://pixabay.com/images/id-1082080",
  },
  {
    name: "Snow",
    author: "Free-Photos",
    url: "https://pixabay.com/images/id-1209401",
  },
  {
    name: "Fog",
    author: "StockSnap",
    url: "https://pixabay.com/images/id-2617838",
  },
  {
    name: "Cloudy",
    author: "waquitar",
    url: "https://pixabay.com/images/id-1571775",
  },
  {
    name: "Typhoon",
    author: "WikiImages",
    url: "https://pixabay.com/images/id-62957",
  },
  {
    name: "sky",
    author: "Engin_Akyurt",
    url: "https://pixabay.com/images/id-3052118/",
  },
];

const CreditScreen = () => {
  const { theme } = useSelector(state => state);

  return (
    <Wrapper>
      <Background source={require("../assets/sky.jpg")} />
      <View style={styles.creditWrapper}>
        <View style={styles.alignCenter}>
          <View style={[styles.alignCenter, styles.dialog]}>
            <Logo width={150} fill={theme.black} />
            <ThemeText>
              Weather Inspector is a Harvard CS50 Mobile Project
            </ThemeText>
            <ThemeText>
              Made By{" "}
              <ThemeText
                style={styles.link}
                onPress={() => openLink("https://google.com")}
              >
                LCTOAN.
              </ThemeText>
            </ThemeText>
          </View>
          <ThemeText style={styles.heading}>Images:</ThemeText>
          <ScrollView style={styles.listWrapper}>
            {credits.map(credit => (
              <CreditItem credit={credit} key={credit.url} />
            ))}
          </ScrollView>
        </View>
      </View>
    </Wrapper>
  );
};

export default CreditScreen;
