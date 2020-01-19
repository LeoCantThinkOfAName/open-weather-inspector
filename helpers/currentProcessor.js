const currentProcessor = rawData => {
  const { id, cod, sys, weather, name, main } = rawData;
  return {
    id: id,
    cod: cod,
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
      city: `${name}, ${sys.country}`,
    },
  };
};

export default currentProcessor;
