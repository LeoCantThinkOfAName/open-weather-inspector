import { cities_db } from "./operateDB";

const searchCity = async input => {
  return new Promise((resolve, reject) => {
    cities_db.transaction(tx => {
      tx.executeSql(
        "SELECT * FROM cities WHERE name LIKE ?",
        [`${input}%`],
        (tx, { rows }) => resolve(rows._array),
        reject
      );
    });
  });
};

export default searchCity;
