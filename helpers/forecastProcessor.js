// {
//   31: {
//     data: [
//       {
//         temp: {
//           main: 30,
//           high: 32,
//           low: 28,
//         },
//         weather: {
//           id: 200
//         },
//       },
//       {...}
//     ]
//   }, {...}
// }

// [
//   {
//     title: 31,
//     data: [
//       {
//         temp: {
//           main: 30,
//           high: 32,
//           low: 28,
//         },
//         weather: {
//           id: 200
//         },
//       },
//       {...}
//     ]
//   }, {...}
// ]

const forecastProcessor = rawData => {
  const response = [];
  rawData.list.map(data => {
    const date = new Date(data.dt * 1000).getDate();
    const day = response.find(obj => obj.title === date);
    if (day == undefined) {
      response.push({
        title: date,
        data: [],
      });
    }

    response[response.length - 1].data.push({
      temp: {
        main: data.main.temp,
        high: data.main.temp_max,
        low: data.main.temp_min,
      },
      weather: {
        id: data.weather[0].id,
      },
      date: data.dt,
    });
  });

  return response;
};

export default forecastProcessor;
