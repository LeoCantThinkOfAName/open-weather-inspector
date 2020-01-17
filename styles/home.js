import { Dimensions } from "react-native";
import Constants from "expo-constants";

export default {
  mainScroll: {
    alignSelf: "stretch",
    flex: 1,
    height: Dimensions.get("screen").height
  },
  mainArea: {
    alignItems: "center",
    alignSelf: "stretch",
    height:
      Constants.statusBarHeight +
      Dimensions.get("screen").height -
      Dimensions.get("screen").width / 3,
    justifyContent: "space-between",
    flex: 1
  },
  mainTempWrapper: {
    position: "absolute",
    bottom: 0,
    right: 0
  },
  mainTemp: {
    fontSize: Dimensions.get("screen").width / 3,
    letterSpacing: -Dimensions.get("screen").width / 30
  },
  conditionWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: -30
  },
  conditionTempWrapper: {
    alignItems: "center",
    marginHorizontal: 15
  },
  conditionTemp: {
    fontSize: 25
  },
  conditionTempLabel: {
    fontSize: 10,
    marginBottom: -5
  },
  forecast: {
    marginVertical: 100
  },
  dayRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5
  },
  dayDate: {
    fontSize: 18,
    fontWeight: "700"
  },
  dateSuffix: {
    fontSize: 12,
    fontWeight: "400"
  },
  sectionHead: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5
  },
  sectionHeadText: {
    fontSize: 30
  }
};
