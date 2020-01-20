import { API_KEY } from 'react-native-dotenv';
import currentProcessor from "./currentProcessor";
import forecastProcessor from "./forecastProcessor";

const currentWeatherApi = "http://api.openweathermap.org/data/2.5/weather";
const forecastApi = "http://api.openweathermap.org/data/2.5/forecast";

// const fetchData = async ({ url, options = {} }) => {
//   try {
//     const api = `${url}&APPID=${key}`;
//     console.log(api);
//     const res = await fetch(api, options);
//     const json = await res.json();
//     const currentProcessed = await currentProcessor(json);

//     const forecastRes = await fetch(
//       `http://api.openweathermap.org/data/2.5/forecast?id=${currentProcessed.id}&APPID=${key}`
//     );
//     const forecastJson = await forecastRes.json();
//     const forecastProcessed = await forecastProcessor(forecastJson);

//     return {
//       ...currentProcessed,
//       forecast: forecastProcessed,
//     };
//   } catch (err) {
//     console.log(err);
//     return err;
//   }
// };

const fetchData = (params = {}, currentWeather) => {
  const paramsStringified = Object.entries(params).map(entry => entry.join("=")).join("&");

  try {
    const url = currentWeather ? `${forecastApi}?${paramsStringified}&APPID=${API_KEY}` : `${currentWeatherApi}?${paramsStringified}&APPID=${API_KEY}`
    const res = await fetch(url);
    const json = await res.json();
    const processed = currentWeather ? forecastProcessor(json) : currentProcessor(json);

    if(currentProcessor) return {currentWeather, forecast: processed};
    fetching({id: processed.id}, processed);
  } catch(error) {
    console.log(error);
    return error;
  }
}

export default fetchData;
