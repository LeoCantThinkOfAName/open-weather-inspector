import { createStore, combineReducers } from "redux";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    default:
      return state;
  }
};

const flipBoolen = (state = true, action) => {
  switch (action.type) {
    case "FLIP":
      return !state;
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    counter: counterReducer,
    bool: flipBoolen,
  })
);

export default store;
