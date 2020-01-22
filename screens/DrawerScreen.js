import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppLoading } from "expo";
import * as Permission from "expo-permissions";
import { createDrawerNavigator } from "@react-navigation/drawer";

// screens
import HomeScreen from "./HomeScreen";

// components
import CustomDrawer from "../components/CustomDrawer";

// helpers
import {
  requestPermission,
  requestLocation
} from "../helpers/requestPermission";
import fetchData from "../helpers/fetchData";

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  const { theme } = useSelector(state => state);
  const { favorites } = useSelector(state => state);
  const [ready, setReady] = useState(false);
  const [current, setCurrent] = useState(null);
  const dispatch = useDispatch();

  const initialize = async () => {
    const permission = await requestPermission({
      permissionType: Permission.LOCATION,
      errorMessage: "Permission for access location was denied"
    });

    if (permission.success) {
      const req = await requestLocation();

      if (req.coords) {
        const weather = await fetchData({
          lat: req.coords.latitude,
          lon: req.coords.longitude
        });
        setCurrent({ id: weather.id, city: weather.location.city });
        dispatch({ type: "ADD_WEATHER_DATA", payload: weather });
      }
    }
  };

  if (!ready) {
    return (
      <AppLoading
        startAsync={() => initialize()}
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
            margin: 0
          }
        }}
        drawerContent={CustomDrawer}
        drawerStyle={{
          backgroundColor: theme.white,
          padding: 0
        }}
        unmountInactiveScreens={true}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          key={
            favorites
              ? `${favorites[0].id}_${new Date().getTime()}`
              : new Date().getTime()
          }
          initialParams={{
            id: favorites ? favorites[0].id : null,
            city: favorites ? favorites[0].city : null
          }}
        />
        <Drawer.Screen
          name="Current Location"
          component={HomeScreen}
          key="current"
          initialParams={{
            id: current.id,
            city: current.city
          }}
        />
        {favorites.map(favorite => (
          <Drawer.Screen
            name={favorite.city}
            component={HomeScreen}
            key={favorite.id}
            initialParams={{
              id: favorite.id,
              city: favorite.city
            }}
          />
        ))}
      </Drawer.Navigator>
    );
  }
};

export default DrawerScreen;
