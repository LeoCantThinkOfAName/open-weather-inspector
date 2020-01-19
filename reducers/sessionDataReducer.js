export const NEW_FORECAST_DATA = "NEW_FORECAST_DATA";

export const sessionDataReducer = (state = [], action) => {
  switch (action.type) {
    case NEW_FORECAST_DATA:
      return [...state, action.payload];
    default:
      return state;
  }
};
