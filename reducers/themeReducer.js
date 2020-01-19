import { Appearance } from "react-native-appearance";

export const DARK_THEME = "DARK_THEME";
export const LIGHT_THEME = "LIGHT_THEME";

const theme = Appearance.getColorScheme().toUpperCase();
const initialState = {
  black: theme === "LIGHT" ? "#333333" : "#ffffff",
  white: theme === "LIGHT" ? "#ffffff" : "#333333",
};

export const toggleTheme = (state = initialState, action) => {
  switch (action.type) {
    case DARK_THEME:
      return {
        black: "#ffffff",
        white: "#333333",
      };
    case LIGHT_THEME:
      return {
        black: "#333333",
        white: "#ffffff",
      };
    default:
      return state;
  }
};
