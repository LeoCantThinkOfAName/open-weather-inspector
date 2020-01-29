// data
import {db} from '../App';

const searchCity = input => {
  db.transaction((tx) => {
    tx.executeSql("CREATE TABLE IF NOT EXIST LOGS (id unique, log)");
  });
  return [];
  // const reg = new RegExp(input, "i");
  // const filtered = cities.filter(city => city.name.match(reg));
  // return filtered.slice(0, 10);
};

export default searchCity;
