const SPACING_UNIT = 1;
const MEASUREMENT_UNIT = "px";
export const colorPalette = {
  darkBlue: "#0E3368",
  lightRed: "#FDE6EE",
  lightBlue: "#f3f8fd",
  cerulean: "#00A8E1",
  red: "#EF473A",
  whiteGrey: "#9197B3",
  lightGrey: "#F7F7F7",
  endeavour: "#004F9F",
  boulder: "#757575",
  gallery: "#eeeeee",
  shark: "#292D32",
  periGray: "#d6e3f0",
};

export const fontFamily = {
  main: "Poppins",
  secondary: `"Lato",sans-serif`,
};

export const fontSize = {
  XXLarge: "32px",
  XLarge: "26px",
  larger: "24px",
  large: "22px",
  semiLarge: "18px",
  medium: "16px",
  small: "14px",
  XSmall: "12px",
};

export const fontWeight = {
  extraBold: 800,
  bolder: 700,
  bold: 600,
  basic: 500,
  normal: 400,
  light: 300,
};

export const lineHeight = {
  XLarge: "36px",
  large: "32px",
  medium: "24px",
  component: "16px",
  small: "8px",
};

export const borderRadius = {
  small: "4px",
  medium: "8px",
  large: "16px",
  XLarge: "24px",
  XxLarge: "30px",
};

export const boxShadow = {
  level1: "0 4px 25px rgba(0, 0, 0, 0.05)",
  level2: "0px 0px 16px rgba(0, 0, 0, 0.06)",
};

export const getSpacing = (multiplier1: number, ...rest: number[]): string => {
  if (rest.length > 3) {
    throw new Error("A max of three parameters are allowed.");
  }

  let spacing = `${multiplier1 * SPACING_UNIT}${MEASUREMENT_UNIT}`;

  rest.forEach((multiplier) => {
    spacing = `${spacing} ${multiplier * SPACING_UNIT}${MEASUREMENT_UNIT}`;
  });

  return spacing;
};
