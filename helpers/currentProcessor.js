const currentProcessor = rawData => {
  const { sys, weather, name, main } = rawData;
  return {
    id: sys.id,
    temp: {
      main: main.temp,
      high: main.temp_max,
      low: main.temp_min,
    },
    weather: weather[0].id,
    description: weather[0].description,
    sun: {
      sunrise: sys.sunrise,
      sunset: sys.sunset,
    },
    location: {
      country: sys.country,
      name: name,
    },
  };
};

export default currentProcessor;
