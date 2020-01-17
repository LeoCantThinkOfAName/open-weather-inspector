const conditionConverter = condition => {
  const leadNum = Math.floor(condition / 100);

  switch (leadNum) {
    case 2:
      // thunderstorm
      return {
        image: require("../assets/thunder.jpg"),
        icon: "weather-lightning-rainy"
      };
    case 3:
      // drizzle
      return {
        image: require("../assets/rain.jpg"),
        icon: "weather-rainy"
      };
    case 5:
      // rain
      return {
        image: require("../assets/rain.jpg"),
        icon: "weather-rainy"
      };
    case 6:
      // snow
      return {
        image: require("../assets/snow.jpg"),
        icon: "weather-snowy"
      };
    case 7:
      // atmosphere
      return {
        image: require("../assets/typhoon.jpg"),
        icon: "weather-fog"
      };
    case 8:
      if (condition % 100) {
        return {
          image: require("../assets/sky.jpg"),
          icon: "weather-cloudy"
        };
      } else {
        return {
          image: require("../assets/clear.jpg"),
          icon: "weather-sunny"
        };
      }
    default:
      return {
        image: require("../assets/cloudy.jpg"),
        icon: "cloud-question"
      };
  }
};

export default conditionConverter;
