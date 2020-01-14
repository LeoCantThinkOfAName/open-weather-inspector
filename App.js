import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppearanceProvider } from "react-native-appearance";
import { Feather } from "@expo/vector-icons";

// global state
import store from "./Store";

// screens
import EmptyScreen from "./screens/EmptyScreen";
import IntroScreen from "./screens/IntroScreen";
import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";
import CreditScreen from "./screens/CreditScreen";
import TabBar from "./components/TabBar";

const Stack = createStackNavigator();
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
