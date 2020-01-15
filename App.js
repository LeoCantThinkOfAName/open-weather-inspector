import React from "react";
import { Provider, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
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

// styles
import styles from "./styles/main";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

const HomeDrawer = () => {
  const { theme } = useSelector(state => state);
  const { favorites } = useSelector(state => state);

  return (
    <Drawer.Navigator
      initialRouteName={favorites[0].city}
      drawerContent={CustomDrawer}
      drawerStyle={{
        backgroundColor: theme.white,
        padding: 0
      }}
    >
      {favorites.map(favorite => (
        <Drawer.Screen
          name={favorite.city}
          component={Home}
          key={favorite.ID}
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
            <Tab.Screen name="Home" component={HomeDrawer} />
            <Tab.Screen name="Setting" component={SettingScreen} />
            <Tab.Screen name="Credit" component={CreditScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </AppearanceProvider>
  );
};

export default App;
