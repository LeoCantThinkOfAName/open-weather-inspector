import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// reducers
import { favoritesReducer } from "./reducers/favoriteReduce";
import { toggleTheme } from "./reducers/themeReducer";
import { sessionScreenReducer } from "./reducers/sessionScreenReducer";
import { uiReducer } from "./reducers/uiReducer";

const store = createStore(
  combineReducers({
    theme: toggleTheme,
    favorites: favoritesReducer,
    sessionScreen: sessionScreenReducer,
    ui: uiReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
