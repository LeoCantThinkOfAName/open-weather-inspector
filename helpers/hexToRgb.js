const convertHex = (hexCode, alpha) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hexCode = hexCode.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexCode);
  return result
    ? `rgba(
        ${parseInt(result[1], 16)},
        ${parseInt(result[2], 16)},
        ${parseInt(result[3], 16)},
        ${alpha}
      )`
    : null;
};

export default convertHex;
