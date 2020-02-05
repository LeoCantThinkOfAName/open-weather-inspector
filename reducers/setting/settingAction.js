import { TOGGLE_UNIT } from "./settingType";
import { storeDataInAS, haha } from "../../helpers/asyncStorage";

export const toggleUnit = bool => {
  return async dispatch => {
    const setUnit = await storeDataInAS({
      key: "unit",
      value: bool,
    });
    if (setUnit) dispatch(dispatchUnit(bool));
  };
};

const dispatchUnit = bool => {
  return {
    type: TOGGLE_UNIT,
    payload: bool,
  };
};
