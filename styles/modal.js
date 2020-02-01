import { Dimensions } from "react-native";
import Constants from "expo-constants";

import theme from "./variables";

export default {
  modal: {
    height: Dimensions.get("screen").height - Constants.statusBarHeight,
    justifyContent: "center",
    padding: 15,
  },
  dialog: {
    alignItems: "center",
    borderRadius: 5,
    width: Dimensions.get("screen").width * 0.8,
    justifyContent: "center",
    padding: 20,
  },
  dialogText: {
    fontSize: 20,
    marginBottom: 20,
  },
  dialogBtn: {
    alignItems: "center",
    backgroundColor: theme.green,
    borderRadius: 5,
    height: 50,
    width: 100,
    justifyContent: "center",
  },
};
