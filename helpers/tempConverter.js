const tempConverter = ({ unit, temp }) => {
  if (unit === "f") {
    return `${Math.round((temp * (9 / 5) - 459.67) * 10) / 10}°`;
  } else if (unit === "c") {
    return `${Math.round((temp - 273.15) * 10) / 10}°`;
  } else {
    console.log("Please provide correct unit.");
    return null;
  }
};

export default tempConverter;
