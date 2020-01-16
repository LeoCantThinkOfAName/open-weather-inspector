import { createStore, combineReducers } from "redux";
import { Appearance } from "react-native-appearance";

const theme = Appearance.getColorScheme();

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    default:
      return state;
  }
};

const flipBoolen = (state = true, action) => {
  switch (action.type) {
    case "FLIP":
      return !state;
    default:
      return state;
  }
};

const toggleTheme = (
  state = {
    black: theme === "light" ? "blue" : "#fff",
    white: theme === "light" ? "#fff" : "#555"
  },
  action
) => {
  switch (action.type) {
    case "dark":
      return {
        black: "#fff",
        white: "#555"
      };
    case "light":
      return {
        black: "#555",
        white: "#fff"
      };
    default:
      return state;
  }
};

const favoritesReducer = (
  state = [
    { city: "Taipei", id: 2172797 },
    { city: "New Taipei City", id: 456 },
    { city: "Taichung", id: 567 },
    { city: "Tainan", id: 678 }
  ],
  action
) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, action.payload];
    case "REMOVE_FAVORITE":
      return state.filter(city => city.ID !== action.payload.ID);
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    theme: toggleTheme,
    counter: counterReducer,
    bool: flipBoolen,
    favorites: favoritesReducer
  })
);

export default store;
