import React from "react";
import { View, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

// components
import ThemeText from "../components/ThemeText";
import Search from "../components/Search";

// styles
import styles from "../styles/main";

const Items = ({ state: { routes }, navigation, descriptors }) => {
  return (
    <View style={styles.suggestionWrapper}>
      {routes.map((route, index) => {
        const focused = descriptors[route.key].navigation.isFocused();
        const handlePress = () => {
          navigation.closeDrawer();
          navigation.jumpTo(route.name);
        };
        return (
          route.name !== "Home" &&
          route.params.fav && (
            <TouchableOpacity
              key={route.key}
              style={[
                styles.drawerListItem,
                index % 2 === 1 ? styles.drawerListItemEven : null,
                focused ? styles.drawerListItemFocused : null,
              ]}
              onPress={() => handlePress()}
            >
              <Feather
                style={[
                  styles.drawerListItemIcon,
                  focused ? styles.drawerListItemIconFocused : null,
                ]}
                size={15}
                name="map-pin"
              />
              <ThemeText>{route.name.split("@")[0]}</ThemeText>
            </TouchableOpacity>
          )
        );
      })}
    </View>
  );
};

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <Search navigation={props.navigation} />
      <Items
        state={props.state}
        navigation={props.navigation}
        descriptors={props.descriptors}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
