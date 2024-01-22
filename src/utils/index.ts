export const checkValidCssColor = (color: string) => {
  const isValid = CSS.supports("color", color);
  return isValid;
};
