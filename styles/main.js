import { StyleSheet, Dimensions } from "react-native";

// styles
import theme from "./variables";
import header from "./header";
import inputs from "./inputs";
import tabbar from "./tabbar";
import drawer from "./drawer";
import home from "./home";

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: "700",
    marginHorizontal: 10,
  },
  background: {
    alignItems: "center",
    height: Dimensions.get("screen").height + 400,
    justifyContent: "center",
    resizeMode: "cover",
    position: "absolute",
    top: -200,
    left: -100,
    width: Dimensions.get("screen").width + 200,
  },
  backgroundMask: {
    height: Dimensions.get("screen").height + 400,
    opacity: 0.6,
    position: "absolute",
    top: 0,
    left: 0,
    width: Dimensions.get("screen").width + 200,
  },
  link: {
    fontWeight: "700",
    textDecorationLine: "underline",
  },
  container: {
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  alignCenter: {
    alignItems: "center",
  },
  alignLeft: {
    alignItems: "flex-start",
  },
  textCenter: {
    textAlign: "center",
  },
  wrapper: {
    alignSelf: "stretch",
    flex: 1,
    paddingHorizontal: 20,
  },
  listWrapper: {
    alignSelf: "stretch",
  },
  listItem: {
    alignSelf: "stretch",
    borderBottomWidth: 0.5,
    paddingVertical: 15,
  },
  listItemText: {
    textAlign: "center",
  },
  blue: {
    color: theme.blue,
  },
  cornflower: {
    color: theme.cornflower,
  },
  green: {
    color: theme.green,
  },
  steel: {
    color: theme.steel,
  },
  ...header,
  ...tabbar,
  ...inputs,
  ...drawer,
  ...home,
});

export default styles;
