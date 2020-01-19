import fetchData from "../helpers/fetchData";
import currentProcessor from "../helpers/currentProcessor";
import forecastProcessor from "../helpers/forecastProcessor";

export const ADD_FORECAST_DATA = "ADD_FORECAST_DATA";
export const FAIL_TO_ADD_FORECAST_DATA = "FAIL_TO_ADD_FORECAST_DATA";

export const cacheReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FORECAST_DATA:
      return [...state, action.payload];
    case FAIL_TO_ADD_FORECAST_DATA:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

const addSessionSuccess = weatherData => ({
  type: NEW_FORECAST_DATA,
  payload: weatherData,
});

const addSessionDataFailed = error => ({
  type: FAIL_TO_ADD_FORECAST_DATA,
  payload: error,
});

export const addSessionData = (
  url = "http://api.openweathermap.org/data/2.5/weather?id=1668341",
  options
) => {
  return dispatch => {
    const fetching = async () => {
      const currentData = await fetchData(url, options, currentProcessor);
      if (currentData.id) {
        const forecastData = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?id=${currentData.id}`,
          options,
          forecastProcessor
        );
        currentData.forecast = forecastData;
        dispatch(addSessionSuccess(weatherData));
      } else {
        dispatch(addSessionDataFailed(currentData));
      }
    };
    fetching();
  };
};
