import { CITIES_DB, WEATHERAPP_DB, CITIES_DB_URL } from "react-native-dotenv";
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
