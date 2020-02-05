import {
  insertFavorite,
  deleteFavorite,
  getAllFavorites,
} from "../../helpers/operateDB";
import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  GET_ALL_FAVORITES,
  RESUME_FAV,
} from "./favoriteType";

export const insertFavoriteToDB = (cityData, favorites) => {
  return async dispatch => {
    const operation = await insertFavorite(cityData);
    const favedInThisSession = favorites.filter(fav => fav.id === cityData.id);
    if (favedInThisSession.length >= 1) {
      dispatch(resumeFav(cityData.id));
    } else {
      dispatch(addFavorite({ ...operation }));
    }
  };
};

export const removeFavoriteFromDB = id => {
  return async dispatch => {
    const operation = await deleteFavorite(id);
    dispatch(removeFavorite(id));
  };
};

const addFavorite = cityData => {
  return {
    type: ADD_FAVORITE,
    payload: cityData,
  };
};

const removeFavorite = id => {
  return {
    type: REMOVE_FAVORITE,
    payload: id,
  };
};

const resumeFav = id => {
  return {
    type: RESUME_FAV,
    payload: id,
  };
};
