import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppLoading } from "expo";
import { createDrawerNavigator } from "@react-navigation/drawer";

// screens
import HomeScreen from "./HomeScreen";

// components
import CustomDrawer from "../components/CustomDrawer";

// helpers
import initialize from "../helpers/initialize";

// reducer
import { ADD_WEATHER_DATA } from "../reducers/cacheReducer";
import { ALL_FAVORITES } from "../reducers/favorite/favoriteType";
import { TOGGLE_THEME } from "../reducers/theme/themeType";
import { TOGGLE_UNIT } from "../reducers/setting/settingType";

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  const { theme } = useSelector(state => state);
  const { favorites } = useSelector(state => state);
  const [ready, setReady] = useState(false);
  const [current, setCurrent] = useState(null);
  const dispatch = useDispatch();

  if (!ready) {
    return (
      <AppLoading
        startAsync={async () => {
          const initData = await initialize();
          setCurrent(initData.currentWeather);
          dispatch({
            type: ALL_FAVORITES,
            payload: initData.favoritesCities,
          });
          dispatch({
            type: ADD_WEATHER_DATA,
            payload: [initData.currentWeather, ...initData.favoritesWeather],
          });
          dispatch({
            type: TOGGLE_UNIT,
            payload: initData.unit,
          });
          dispatch({
            type: TOGGLE_THEME,
            payload: initData.theme,
          });
        }}
        onFinish={() => setReady(true)}
        onError={err => console.warn(err)}
      />
    );
  } else {
    return (
      <Drawer.Navigator
        initialRouteName={current ? "Current Location" : "Home"}
        drawerContentOptions={{
          itemStyle: {
            margin: 0,
          },
        }}
        drawerContent={CustomDrawer}
        drawerStyle={{
          backgroundColor: theme.white,
          padding: 0,
        }}
        unmountInactiveScreens={true}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          key={
            favorites.length > 0
              ? `${favorites[0].id}_${new Date().getTime()}`
              : new Date().getTime()
          }
          initialParams={{
            id: favorites.length > 0 ? favorites[0].id : null,
            city: favorites.length > 0 ? favorites[0].city : null,
          }}
        />
        <Drawer.Screen
          name="Current Location"
          component={HomeScreen}
          key="current"
          initialParams={{
            id: current.id,
            city: current.location.city,
            fav: true,
          }}
        />
        {favorites.map(favorite => (
          <Drawer.Screen
            name={`${favorite.city}@${favorite.id}`}
            component={HomeScreen}
            key={favorite.id}
            initialParams={{
              id: favorite.id,
              city: favorite.city,
              fav: favorite.fav,
            }}
          />
        ))}
      </Drawer.Navigator>
    );
  }
};

export default DrawerScreen;
