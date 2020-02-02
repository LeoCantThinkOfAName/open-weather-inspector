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
          const initData = await initialize(favorites);
          setCurrent(initData.current);
          dispatch({
            type: ADD_WEATHER_DATA,
            payload: [initData.current, ...initData.favorites],
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
            name={favorite.city}
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
