import * as Permission from "expo-permissions";
import {
  requestPermission,
  requestLocation,
} from "../helpers/requestPermission";
import fetchData from "../helpers/fetchData";
import { getAllFavorites } from "../helpers/operateDB";
import { getDataInAS } from "./asyncStorage";

const fetchFavorites = async favs => {
  const temp = [];

  for (let i = 0, len = favs.length; i < len; i++) {
    const favWeather = await fetchData({ id: favs[i].id });
    temp.push(favWeather);
  }
  return temp;
};

const getPermission = async () => {
  const permission = await requestPermission({
    permissionType: Permission.LOCATION,
    errorMessage: "Permission for access location was denied",
  });

  return permission;
};

const booleanConverter = str => {
  return str === "true" ? true : false;
};

const getUserSetting = async () => {
  const unit = await getDataInAS("unit");
  const theme = await getDataInAS("theme");

  return { unit: booleanConverter(unit), theme: booleanConverter(theme) };
};

const initialize = async favs => {
  try {
    const permission = await getPermission();
    const req = await requestLocation();
    const currentCoords = req.coords;
    const currentWeather = await fetchData({
      lat: currentCoords.latitude,
      lon: currentCoords.longitude,
    });
    const favoritesCities = await getAllFavorites();
    const favoritesWeather = await fetchFavorites(favoritesCities);
    const { unit, theme } = await getUserSetting();

    return {
      currentWeather,
      favoritesWeather,
      favoritesCities,
      theme,
      unit,
    };
  } catch (error) {
    console.log("Error Occured: ", error);
  }
};

export default initialize;
