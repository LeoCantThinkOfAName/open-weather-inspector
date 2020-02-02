import {
  CITIES_DB,
  WEATHERAPP_DB,
  CITIES_DB_URL,
  FAV_TABLE,
} from "react-native-dotenv";
import * as FileSystem from "expo-file-system";
import * as SQLite from "expo-sqlite";

export const main_db = SQLite.openDatabase(WEATHERAPP_DB);
export const cities_db = SQLite.openDatabase(CITIES_DB);

export const fetchCitiesData = async () => {
  // close DB
  cities_db._db.close();
  console.log("db closed");

  try {
    const download = await FileSystem.downloadAsync(
      CITIES_DB_URL,
      `${FileSystem.documentDirectory}SQLite/${CITIES_DB}`
    );
    console.log(download);
    return {
      success: true,
      status: download,
      message: "Please restart app to take effect.",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      status: error,
      message: "Download failed, please try again later.",
    };
  }
};

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

export const insertFavorite = data => {
  return new Promise((resolve, reject) => {
    main_db.transaction(tx => {
      tx.executeSql(`CREATE TABLE IF NOT EXISTS ${FAV_TABLE} (id, city)`);
      tx.executeSql(
        `INSERT INTO ${FAV_TABLE} (id, city) VALUES (${data.id}, '${data.city}')`,
        [],
        (tx, result) => {
          resolve(data);
        },
        reject
      );
    });
  });
};

export const deleteFavorite = id => {
  return new Promise((resolve, reject) => {
    main_db.transaction(tx => {
      tx.executeSql(
        `DELETE FROM ${FAV_TABLE} WHERE id=${id}`,
        [],
        (tx, result) => {
          resolve(id);
        },
        reject
      );
    });
  });
};

export const getAllFavorites = () => {};
