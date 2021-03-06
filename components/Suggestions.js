import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";

// components
import ThemeText from "./ThemeText";

// reducers
import { ADD_WEATHER_DATA } from "../reducers/cacheReducer";

// helpers
import hexToRgb from "../helpers/hexToRgb";
import fetchData from "../helpers/fetchData";

// styles
import styles from "../styles/main";

const Suggestions = ({ cities, setText, setCities, theme, navigation }) => {
  const { cache } = useSelector(state => state);
  const dispatch = useDispatch();
  const handlePress = async (city, id) => {
    setText(city);
    setCities([]);

    const cachedCity = await cache.find(cached => cached.id === id);

    if (!cachedCity) {
      console.log("fetch");
      const data = await fetchData({
        id: id,
      });
      dispatch({ type: ADD_WEATHER_DATA, payload: [data] });
      navigation.navigate({
        name: "Home",
        params: {
          city: city,
          id: id,
        },
      });
    } else {
      navigation.navigate({
        name: "Home",
        params: {
          city: cachedCity.city,
          id: cachedCity.id,
        },
      });
    }
  };

  return (
    <SafeAreaView
      style={[styles.suggestionList, { backgroundColor: theme.black }]}
    >
      <ScrollView persistentScrollbar={true}>
        {cities.map((city, index) => (
          <TouchableOpacity
            key={city.id}
            onPress={() =>
              handlePress(`${city.name}, ${city.country}`, city.id)
            }
            style={[
              styles.suggestionItem,
              {
                backgroundColor:
                  index % 2
                    ? hexToRgb(theme.white, 0.95)
                    : hexToRgb(theme.white, 0.98),
              },
            ]}
          >
            <View>
              <ThemeText>
                {city.name}, {city.country}
              </ThemeText>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Suggestions;
