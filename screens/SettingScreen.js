import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

// components
import Wrapper from "../components/Wrapper";
import Toggler from "../components/Toggler";
import CheckBox from "../components/CheckBox";
import Background from "../components/Background";
import ThemeText from "../components/ThemeText";

// styles
import styles from "../styles/main";

const SettingScreen = () => {
  const { theme } = useSelector(state => state);

  return (
    <View style={styles.container}>
      <Background source={require("../assets/sky.jpg")} />
      <Wrapper>
        <View style={styles.header}>
          <ThemeText style={[styles.heading, { color: theme.black }]}>
            Setting
          </ThemeText>
        </View>
        <View style={styles.listWrapper}>
          <View style={[styles.listItem, { borderBottomColor: theme.black }]}>
            <Toggler
              label="°C / °F"
              description="Display Celsius or Fahrenheit."
            />
          </View>
          <View style={[styles.listItem, { borderBottomColor: theme.black }]}>
            <Toggler
              label="B / W"
              description="Change Theme Between Black and White"
            />
          </View>
          <View style={[styles.listItem, { borderBottomColor: theme.black }]}>
            <CheckBox description="Ignore Device Theme" />
          </View>
        </View>
      </Wrapper>
    </View>
  );
};

export default SettingScreen;
