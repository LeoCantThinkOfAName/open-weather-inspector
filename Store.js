import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// reducers
import { favoritesReducer } from "./reducers/favoriteReduce";
import { toggleTheme } from "./reducers/themeReducer";
import { sessionDataReducer } from "./reducers/sessionDataReducer";
import { uiReducer } from "./reducers/uiReducer";

const store = createStore(
  combineReducers({
    theme: toggleTheme,
    favorites: favoritesReducer,
    sessionData: sessionDataReducer,
    ui: uiReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
