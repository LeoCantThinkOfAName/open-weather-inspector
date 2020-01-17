import React from "react";
import { View, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";

// components
import ThemeText from "../components/ThemeText";
import Search from "../components/Search";

// styles
import styles from "../styles/main";

const Items = ({ state: { routes }, navigation, descriptors }) => {
  return (
    <View>
      {routes.map((route, index) => {
        const focused = descriptors[route.key].navigation.isFocused();
        const handlePress = () => {
          navigation.closeDrawer();
          navigation.jumpTo(route.name);
        };

        return (
          <TouchableOpacity
            key={route.key}
            style={[
              styles.drawerListItem,
              index % 2 === 1 ? styles.drawerListItemEven : null,
              focused ? styles.drawerListItemFocused : null
            ]}
            onPress={() => handlePress()}
          >
            <ThemeText>{route.name}</ThemeText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <Search />
      <Items
        state={props.state}
        navigation={props.navigation}
        descriptors={props.descriptors}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
