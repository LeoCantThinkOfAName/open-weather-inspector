import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Permission from "expo-permissions";
import { Provider, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppearanceProvider } from "react-native-appearance";
import { createDrawerNavigator } from "@react-navigation/drawer";

// global state
import store from "./Store";

// screens
import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";
import CreditScreen from "./screens/CreditScreen";
import EmptyScreen from "./screens/EmptyScreen";

// components
import CustomDrawer from "./components/CustomDrawer";
import TabBar from "./components/TabBar";

// custom hooks
import useGeoLocation from "./helpers/useGeoLocation";

// helpers
import {
  requestPermission,
  requestLocation,
} from "./helpers/requestPermission";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Home = () => {
  const { theme } = useSelector(state => state);
  const { favorites } = useSelector(state => state);
  const [ready, setReady] = useState(false);
  const [location, setLocation] = useState(null);

  if (!ready) {
    return (
      <AppLoading
        startAsync={async () => {
          const permission = await requestPermission({
            permissionType: Permission.LOCATION,
            errorMessage: "Permission for access location was denied",
          });

          if (permission.success) {
            const locationObj = await requestLocation();
            setLocation(locationObj);
          }
        }}
        onFinish={() => setReady(true)}
        onError={err => console.warn(err)}
      />
    );
  } else {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
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
          key={favorites ? favorites[0].id : null}
          initialParams={{
            id: favorites ? favorites[0].id : null,
            city: favorites ? favorites[0].city : null,
          }}
        />
        <Drawer.Screen
          name="Current Location"
          component={HomeScreen}
          key="current"
          initialParams={{
            id: null,
            city: null,
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
              session: false,
            }}
          />
        ))}
      </Drawer.Navigator>
    );
  }
};

const App = () => {
  return (
    <AppearanceProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator tabBar={props => <TabBar {...props} />}>
            <Tab.Screen name="Weather" component={Home} />
            <Tab.Screen name="Setting" component={SettingScreen} />
            <Tab.Screen name="Credit" component={CreditScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </AppearanceProvider>
  );
};

export default App;
