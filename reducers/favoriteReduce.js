export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

const initialState = [
  { city: "Taipei, TW", id: 1668341 },
  { city: "New Taipei, TW", id: 1668341 },
  { city: "Taichung, TW", id: 1668399 },
  { city: "Tainan, TW", id: 1668355 },
];

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.payload];
    case REMOVE_FAVORITE:
      return state.filter(city => city.ID !== action.payload.ID);
    default:
      return state;
  }
};
