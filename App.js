import React from "react";
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
import TabBar from "./components/TabBar";

// components
import CustomDrawer from "./components/CustomDrawer";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Home = () => {
  const { theme } = useSelector(state => state);
  const { favorites } = useSelector(state => state);

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
};

const App = () => {
  return (
    <AppearanceProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator tabBar={props => <TabBar {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Setting" component={SettingScreen} />
            <Tab.Screen name="Credit" component={CreditScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </AppearanceProvider>
  );
};

export default App;
