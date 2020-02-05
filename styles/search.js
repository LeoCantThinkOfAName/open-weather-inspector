import theme from "./variables";

export default {
  searchIcon: {
    marginHorizontal: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    height: 35,
    paddingRight: 10,
  },
  searchSpinner: {
    position: "absolute",
    right: 10,
    top: 20,
  },
  suggestionWrapper: {
    minHeight: 300,
  },
  suggestionList: {
    position: "absolute",
    top: 60,
    maxHeight: 300,
    left: 0,
    width: 280,
    zIndex: 100,
  },
  suggestionItem: {
    height: 60,
    justifyContent: "center",
    paddingHorizontal: 15,
    marginTop: -1,
  },
};
