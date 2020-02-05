import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// reducers
import { favoritesReducer } from "./reducers/favorite/favoriteReducer";
import { toggleTheme } from "./reducers/theme/themeReducer";
import { cacheReducer } from "./reducers/cacheReducer";
import { uiReducer } from "./reducers/uiReducer";
import { settingReducer } from "./reducers/setting/settingReducer";

const store = createStore(
  combineReducers({
    theme: toggleTheme,
    favorites: favoritesReducer,
    cache: cacheReducer,
    ui: uiReducer,
    setting: settingReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
