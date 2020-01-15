import React from "react";
import { TextInput, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList
} from "@react-navigation/drawer";

// components
import ThemeText from "../components/ThemeText";

// styles
import styles from "../styles/main";

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <TextInput value="" placeholder="shit" />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
