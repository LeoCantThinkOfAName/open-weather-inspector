// data
import cities from "../assets/cities.json";

const searchCity = input => {
  const reg = new RegExp(input, "i");
  const filtered = cities.filter(city => city.city.match(reg));
  return filtered.slice(0, 10);
};

export default searchCity;
