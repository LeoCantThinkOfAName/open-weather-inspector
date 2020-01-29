export const ADD_WEATHER_DATA = "ADD_WEATHER_DATA";
export const FAIL_TO_ADD_WEATHER_DATA = "FAIL_TO_ADD_WEATHER_DATA";

export const cacheReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_WEATHER_DATA:
      return [...state, ...action.payload];
    case FAIL_TO_ADD_WEATHER_DATA:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
