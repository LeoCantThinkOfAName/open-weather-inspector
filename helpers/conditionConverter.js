const conditionConverter = condition => {
  const leadNum = Math.floor(condition / 100);

  switch (leadNum) {
    case 2:
      // thunderstorm
      return {
        image: require("../assets/thunder.jpg"),
        icon: "cloud-lightning",
      };
    case 3:
      // drizzle
      return {
        image: require("../assets/rain.jpg"),
        icon: "cloud-drizzle",
      };
    case 5:
      // rain
      return {
        image: require("../assets/rain.jpg"),
        icon: "cloud-rain",
      };
    case 6:
      // snow
      return {
        image: require("../assets/snow.jpg"),
        icon: "cloud-snow",
      };
    case 7:
      // atmosphere
      return {
        image: require("../assets/typhoon.jpg"),
        icon: "wind",
      };
    case 8:
      if (condition % 100) {
        return {
          image: require("../assets/cloudy.jpg"),
          icon: "cloud",
        };
      } else {
        return {
          image: require("../assets/clear.jpg"),
          icon: "sun",
        };
      }
    default:
      return {
        image: require("../assets/cloudy.jpg"),
        icon: "wind",
      };
  }
};

export default conditionConverter;
