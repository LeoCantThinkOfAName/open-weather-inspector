import { StyleSheet } from "react-native";

// styles
import header from "./header";

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 5,
  },
  link: {
    color: "#26a9ff",
    fontWeight: "700",
    textDecorationLine: "underline",
  },
  listItemText: {
    textAlign: "center",
  },
  ...header,
});

export default styles;
