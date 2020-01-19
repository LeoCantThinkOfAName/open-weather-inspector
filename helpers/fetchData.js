import currentProcessor from "./currentProcessor";
import forecastProcessor from "./forecastProcessor";

const key = "e0e6bc3e4f76bd0cee424878945e0461";

// api example
// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}

const fetchData = async ({ url, options = {} }) => {
  try {
    const api = `${url}&APPID=${key}`;
    console.log(api);
    const res = await fetch(api, options);
    const json = await res.json();
    const currentProcessed = await currentProcessor(json);

    const forecastRes = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?id=${currentProcessed.id}&APPID=${key}`
    );
    const forecastJson = await forecastRes.json();
    const forecastProcessed = await forecastProcessor(forecastJson);

    return {
      ...currentProcessed,
      forecast: forecastProcessed,
    };
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default fetchData;
