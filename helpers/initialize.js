import * as Permission from "expo-permissions";
import {
  requestPermission,
  requestLocation,
} from "../helpers/requestPermission";
import fetchData from "../helpers/fetchData";

const fetchFavorites = async favs => {
  const temp = [];

  for (let i = 0, len = favs.length; i < len; i++) {
    const favWeather = await fetchData({ id: favs[i].id });
    temp.push(favWeather);
  }

  return temp;
};

const initialize = async favs => {
  const permission = await requestPermission({
    permissionType: Permission.LOCATION,
    errorMessage: "Permission for access location was denied",
  });
  let current = null;

  if (permission.success) {
    const req = await requestLocation();

    if (req.coords) {
      current = await fetchData({
        lat: req.coords.latitude,
        lon: req.coords.longitude,
      });
    }
  }

  const favorites = await fetchFavorites(favs);

  return {
    current,
    favorites,
  };
};

export default initialize;
