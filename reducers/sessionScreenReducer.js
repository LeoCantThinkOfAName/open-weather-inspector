export const ADD_SCREEN = "ADD_SCREEN";

export const sessionScreenReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SCREEN:
      return [...state, action.payload];
    default:
      return state;
  }
};
