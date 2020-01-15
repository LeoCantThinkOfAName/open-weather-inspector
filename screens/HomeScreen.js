import React, { useState, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

// components
import Wrapper from "../components/Wrapper";
import Background from "../components/Background";
import ThemeText from "../components/ThemeText";
import FavButton from "../components/FavButton";

// styles
import styles from "../styles/main";

const SettingScreen = () => {
  const [state, setState] = useState(null);
  const { theme } = useSelector(state => state);

  return (
    <View style={styles.container}>
      <Background source={require("../assets/sky.jpg")} />
      <Wrapper>
        <ThemeText style={[styles.heading, { color: theme.black }]}>
          {state ? state.city : null}
        </ThemeText>
        <FavButton city={{ city: "Taipei", ID: 123 }} />
      </Wrapper>
    </View>
  );
};

export default SettingScreen;
