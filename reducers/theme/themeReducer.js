import { TOGGLE_THEME } from "./themeType";

const initialState = {
  theme: true,
  black: "#fff",
  white: "#333",
};

export const toggleTheme = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        theme: action.payload,
        black: action.payload ? "#fff" : "#333",
        white: action.payload ? "#333333" : "#fff",
      };
    default:
      return state;
  }
};
