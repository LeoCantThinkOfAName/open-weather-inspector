// {
//   31: {
//     data: [
//       {
//         temp: 123,
//         weather: "Clear",
//       }
//     ]
//   }, {...}
// }

const forecastProcessor = rawData => {
  const response = {};
  rawData.list.map(data => {
    const date = new Date(data.dt * 1000).getDate();
    if (response[date] === undefined) {
      response[date] = {};
      response[date]["data"] = [];
    }
    response[date]["data"].push({
      temp: data.main.temp,
      weather: data.weather.main
    });
  });
  return response;
};

export default forecastProcessor;
