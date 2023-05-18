export const formatString = (str) => {
  const newStr = `${str[0].toUpperCase()}${str.substring(1)}`;
  if (newStr.includes("-")) {
    return newStr.replace("-", " ");
  }
  return newStr;
};
