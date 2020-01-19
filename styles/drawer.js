import theme from "./variables";

export default {
  drawerListItem: {
    alignItems: "center",
    borderColor: theme.green,
    borderLeftWidth: 5,
    flexDirection: "row",
    paddingVertical: 25,
    paddingHorizontal: 10,
  },
  drawerListItemEven: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  drawerListItemIcon: {
    color: theme.green,
    marginRight: 10,
  },
  drawerListItemFocused: {
    borderColor: theme.red,
  },
  drawerListItemIconFocused: {
    color: theme.red,
  },
};
