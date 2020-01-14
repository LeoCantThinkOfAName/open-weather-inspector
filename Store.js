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

const store = createStore(
  combineReducers({
    theme: toggleTheme,
    counter: counterReducer,
    bool: flipBoolen
  })
);

export default store;
