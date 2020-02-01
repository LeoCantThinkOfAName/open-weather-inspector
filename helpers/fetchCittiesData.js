// db
import { cities_db } from "../helpers/operateDB";

import { CITIES_DB_URL, CITIES_DB } from "react-native-dotenv";
import * as FileSystem from "expo-file-system";

const fetchCitiesData = async () => {
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

export default fetchCitiesData;
