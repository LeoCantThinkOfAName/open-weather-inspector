const addSuffix = date => {
  const reminder = date % 10;
  const suffix =
    reminder === 1
      ? "st"
      : reminder === 2
      ? "nd"
      : reminder === 3
      ? "rd"
      : "th";

  return suffix;
};

export default addSuffix;
