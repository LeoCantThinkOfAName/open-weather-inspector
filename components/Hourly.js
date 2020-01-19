import React from "react";
import { View, SafeAreaView, SectionList } from "react-native";
import { useSelector } from "react-redux";
import { Feather } from "@expo/vector-icons";

// components
import ThemeText from "./ThemeText";
import HorizontalLine from "./HorizontalLine";

// helpers
import addSuffix from "../helpers/addSuffix";
import conditionConverter from "../helpers/conditionConverter";
import tempConverter from "../helpers/tempConverter";

// styles
import styles from "../styles/main";

const Hourly = ({ days }) => {
  const { theme } = useSelector(state => state);

  const convertDate = date => {
    const hour = new Date(date * 1000).getHours();
    const doubleDigits = hour < 10 ? "0" + hour : hour;
    return `${doubleDigits}:00`;
  };

  return (
    <View style={styles.section}>
      <ThemeText style={[styles.heading, styles.alignLeft]}>
        Hourly Forecast
      </ThemeText>
      <HorizontalLine />
      <SafeAreaView>
        <SectionList
          style={{ maxHeight: 300 }}
          sections={days}
          renderItem={({ item }) => {
            return (
              <View style={styles.conditionTempWrapper}>
                <ThemeText>{convertDate(item.date)}</ThemeText>
                <Feather
                  size={30}
                  name={conditionConverter(item.weather.id).icon}
                  color={theme.black}
                  style={{
                    color: theme.black,
                    textShadowColor: theme.white,
                    textShadowRadius: 3,
                    marginVertical: 5,
                  }}
                />
                <ThemeText>
                  {tempConverter({ unit: "c", temp: item.temp.main })}
                </ThemeText>
              </View>
            );
          }}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.sectionHead}>
              <ThemeText style={styles.sectionHeadText}>
                {title}
                <ThemeText style={{ fontSize: 12 }}>
                  {addSuffix(title)}
                </ThemeText>
              </ThemeText>
            </View>
          )}
          horizontal={true}
          keyExtractor={(item, index) => item.date}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
};

export default Hourly;
