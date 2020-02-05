import { TOGGLE_UNIT } from "./settingType";

const initialState = {
  unit: true,
};

export const settingReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_UNIT:
      return { ...state, unit: action.payload };
    default:
      return state;
  }
};
