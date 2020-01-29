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

const Suggestions = ({ cities, setText, setCities, theme, navigation }) => {
  const { cache } = useSelector(state => state);
  const dispatch = useDispatch();
  const handlePress = async city => {
    setText(city);
    setCities([]);

    const cachedCity = await cache.find(cached => cached.id === cities.id);

    if (!cachedCity) {
      console.log("fetch");
      const data = await fetchData({
        id: cities.id,
      });
      dispatch({ type: ADD_WEATHER_DATA, payload: [data] });
      navigation.navigate({
        name: "Home",
        params: {
          city: data.city,
          id: data.id,
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
      style={{
        position: "absolute",
        backgroundColor: theme.black,
        top: 60,
        maxHeight: 300,
        left: 0,
        width: 280,
        zIndex: 100,
      }}
    >
      <ScrollView persistentScrollbar={true}>
        {cities.map((city, index) => (
          <TouchableOpacity
            key={city.id}
            onPress={() => handlePress(`${city.city}, ${city.iso2}`)}
            style={{
              height: 60,
              justifyContent: "center",
              paddingHorizontal: 15,
              backgroundColor:
                index % 2
                  ? hexToRgb(theme.white, 0.95)
                  : hexToRgb(theme.white, 0.98),
            }}
          >
            <View>
              <ThemeText>
                {city.city}, {city.iso2}
              </ThemeText>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Suggestions;
