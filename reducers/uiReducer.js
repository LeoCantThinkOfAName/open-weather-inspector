export const SEARCHING = "SEARCHING";

export const uiReducer = (
  state = {
    searchLoading: true,
  },
  action
) => {
  switch (action.type) {
    case SEARCHING:
      return { searchLoading: action.payload };
    default:
      return state;
  }
};
