import { CITIES_DB, WEATHERAPP_DB } from "react-native-dotenv";
import * as SQLite from "expo-sqlite";

export const main_db = SQLite.openDatabase(WEATHERAPP_DB);
export const cities_db = SQLite.openDatabase(CITIES_DB);
