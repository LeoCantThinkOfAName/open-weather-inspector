import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  ALL_FAVORITES,
  RESUME_FAV,
} from "./favoriteType";

const initialState = [];

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.payload];
    case REMOVE_FAVORITE:
      return state.map(city =>
        city.id === action.payload ? { ...city, fav: false } : city
      );
    case ALL_FAVORITES:
      return [...action.payload];
    case RESUME_FAV:
      return [
        ...state.map(city =>
          city.id === action.payload ? { ...city, fav: true } : city
        ),
      ];
    default:
      return state;
  }
};
