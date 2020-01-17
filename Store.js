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
    black: theme === "light" ? "#333333" : "#ffffff",
    white: theme === "light" ? "#ffffff" : "#333333"
  },
  action
) => {
  switch (action.type) {
    case "dark":
      return {
        black: "#ffffff",
        white: "#333333"
      };
    case "light":
      return {
        black: "#333333",
        white: "#ffffff"
      };
    default:
      return state;
  }
};

const favoritesReducer = (
  state = [
    { city: "Taipei, TW", id: 1668341 },
    { city: "New Taipei, TW", id: 1668341 },
    { city: "Taichung, TW", id: 1668399 },
    { city: "Tainan, TW", id: 1668355 }
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
