import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

// components
import Wrapper from "../components/Wrapper";
import Toggler from "../components/Toggler";
import CheckBox from "../components/CheckBox";
import CustomButton from "../components/CustomButton";
import Background from "../components/Background";
import ThemeText from "../components/ThemeText";

// reducers
// import { TOGGLE_UNIT } from "../reducers/setting/settingType";
// import { TOGGLE_THEME } from "../reducers/theme/themeType";
import { toggleUnit } from "../reducers/setting/settingAction";
import { toggleTheme } from "../reducers/theme/themeAction";

// helpers
import { fetchCitiesData } from "../helpers/operateDB";

// styles
import styles from "../styles/main";

const SettingScreen = () => {
  const { theme } = useSelector(state => state);
  const { setting } = useSelector(state => state);

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
              value={setting.unit}
              action={toggleUnit}
            />
          </View>
          <View style={[styles.listItem, { borderBottomColor: theme.black }]}>
            <Toggler
              label="B / W"
              description="Change Theme Between Black and White"
              value={theme.theme}
              action={toggleTheme}
            />
          </View>
          {/*<View style={[styles.listItem, { borderBottomColor: theme.black }]}>
            <CheckBox description="Ignore Device Theme" />
          </View>*/}
          <View style={[styles.listItem, { borderBottomColor: theme.black }]}>
            <CustomButton
              text="Download cities data"
              label="Improve search experience, and decrese request time."
              fn={() => fetchCitiesData()}
              value={setting.ignore}
            />
          </View>
        </View>
      </Wrapper>
    </View>
  );
};

export default SettingScreen;
