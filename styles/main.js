import { StyleSheet } from "react-native";

// styles
import header from "./header";
import inputs from "./inputs";
import tabbar from "./tabbar";

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 5
  },
  link: {
    color: "#26a9ff",
    fontWeight: "700",
    textDecorationLine: "underline"
  },
  container: {
    alignSelf: "stretch",
    backgroundColor: "red",
    flex: 1,
    justifyContent: "center"
  },
  alignCenter: {
    alignItems: "center"
  },
  alignLeft: {
    alignItems: "flex-start"
  },
  wrapper: {
    alignSelf: "stretch",
    paddingHorizontal: 10
  },
  listWrapper: {
    alignSelf: "stretch"
  },
  listItem: {
    alignSelf: "stretch",
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 17
  },
  listItemText: {
    textAlign: "center"
  },
  ...header,
  ...tabbar,
  ...inputs
});

export default styles;
