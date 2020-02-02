import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// reducers
import { favoritesReducer } from "./reducers/favorite/favoriteReducer";
import { toggleTheme } from "./reducers/themeReducer";
import { cacheReducer } from "./reducers/cacheReducer";
import { uiReducer } from "./reducers/uiReducer";

const store = createStore(
  combineReducers({
    theme: toggleTheme,
    favorites: favoritesReducer,
    cache: cacheReducer,
    ui: uiReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
