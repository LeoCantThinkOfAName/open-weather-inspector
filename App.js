import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

// global state
import store from "./Store";

// screens
import EmptyScreen from "./screens/EmptyScreen";
import IntroScreen from "./screens/IntroScreen";
import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";
import CreditScreen from "./screens/CreditScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = "home";
              } else if (route.name === "Setting") {
                iconName = "settings";
              } else {
                iconName = "info";
              }

              return (
                <Feather
                  name={iconName}
                  size={20}
                  color={focused ? "#fff" : "#ccc"}
                />
              );
            },
          })}
          tabBarOptions={{
            tabStyle: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            activeTintColor: "#fff",
            inactiveTintColor: "#ccc",
          }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Setting" component={SettingScreen} />
          <Tab.Screen name="Credit" component={CreditScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
