import { StyleSheet, Dimensions } from "react-native";

// styles
import theme from "./variables";
import header from "./header";
import inputs from "./inputs";
import tabbar from "./tabbar";
import drawer from "./drawer";
import home from "./home";
import search from "./search";
import modal from "./modal";

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: "700",
    marginHorizontal: 10,
    textAlign: "center",
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
    opacity: 0.3,
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
    textAlign: "left",
  },
  textCenter: {
    textAlign: "center",
  },
  flexSpan: {
    flex: 1,
  },
  wrapper: {
    alignSelf: "stretch",
    flex: 1,
    paddingHorizontal: 20,
  },
  creditWrapper: {
    alignSelf: "stretch",
    justifyContent: "center",
    flex: 1,
    maxHeight: Dimensions.get("screen").height - 200,
    marginVertical: 100,
  },
  section: {
    marginBottom: 20,
  },
  horizontalLine: {
    height: 1,
    marginVertical: 10,
    opacity: 0.3,
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
  tableHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  tableHeadItem: {
    flex: 1,
    fontSize: 20,
    fontWeight: "700",
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
  ...search,
  ...modal,
});

export default styles;
