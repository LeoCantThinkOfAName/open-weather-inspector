const conditionConverter = condition => {
  const leadNum = Math.floor(condition / 100);

  switch (leadNum) {
    case 2:
      // thunderstorm
      return {
        image: "",
        icon: "weather-lightning-rainy",
      };
    case 3:
      // drizzle
      return {
        image: "",
        icon: "weather-rainy",
      };
    case 5:
      // rain
      return {
        image: "",
        icon: "weather-rainy",
      };
    case 6:
      // snow
      return {
        image: "",
        icon: "weather-snowy",
      };
    case 7:
      // atmosphere
      return {
        image: "",
        icon: "weather-fog",
      };
    case 8:
      if (condition % 100) {
        return {
          image: "",
          icon: "weather-cloudy",
        };
      } else {
        return {
          image: "",
          icon: "weather-sunny",
        };
      }
    default:
      return {
        image: "",
        icon: "cloud-question",
      };
  }
};

export default conditionConverter;
