import { TOGGLE_THEME } from "./themeType";
import { storeDataInAS } from "../../helpers/asyncStorage";

export const toggleTheme = bool => {
  return async dispatch => {
    const setTheme = storeDataInAS({
      key: "theme",
      value: bool,
    });
    if (setTheme) dispatch(dispatchTheme(bool));
  };
};

const dispatchTheme = bool => {
  return {
    type: TOGGLE_THEME,
    payload: bool,
  };
};
