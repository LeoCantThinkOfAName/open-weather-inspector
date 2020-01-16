const currentProcessor = rawData => {
  const { sys, weather, name, main } = rawData;
  return {
    id: sys.id,
    temp: main.temp,
    weather: weather.main,
    description: weather.description,
    sun: {
      sunrise: sys.sunrise,
      sunset: sys.sunset
    },
    location: {
      country: sys.country,
      name: name
    }
  };
};

export default currentProcessor;
