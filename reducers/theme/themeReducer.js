import { TOGGLE_THEME } from "./themeType";

const initialState = {
  theme: true,
  black: "#fff",
  white: "#222",
};

export const toggleTheme = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        theme: action.payload,
        black: action.payload ? "#fff" : "#222",
        white: action.payload ? "#222" : "#fff",
      };
    default:
      return state;
  }
};
