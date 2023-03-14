import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "#1C449C", // blue
  secondary: "#E8D213", // yellow
  cyan: "#00C9FF",

  FirstBlu: "#0062B8",
  SecondBlu: "#00C9FF",

  lightblue: "#699BF7",
  white: "#fff",
  black: "#000000",
  blue: "#4096FE",
  gray: "#464646",
  gray1: "#363636",
  lightGray: "#dedede",
  transparentWhite: "rgba(255, 255, 255, 0.2)",
  transparentBlack: "rgba(0, 0, 0, 0.4)",
  gradientBlue: "linear-gradient(180deg, #2548C5 0%, #009FFD 42.19%);",
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 10,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  largeTitle: {
    fontFamily: "VarelaRound_400Regular",
    fontSize: SIZES.largeTitle,
  },
  h1: {
    fontFamily: "VarelaRound_400Regular",
    fontSize: SIZES.h1,
    lineHeight: 36,
  },
  h2: {
    fontFamily: "VarelaRound_400Regular",
    fontSize: SIZES.h2,
    lineHeight: 30,
  },
  h3: {
    fontFamily: "VarelaRound_400Regular",
    fontSize: SIZES.h3,
    lineHeight: 22,
  },
  h4: {
    fontFamily: "VarelaRound_400Regular",
    fontSize: SIZES.h4,
    lineHeight: 22,
  },
  body1: {
    fontFamily: "VarelaRound_400Regular",
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: "VarelaRound_400Regular",
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: "VarelaRound_400Regular",
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: "VarelaRound_400Regular",
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: "VarelaRound_400Regular",
    fontSize: SIZES.body5,
    // fontWeight: 100,
    // lineHeight: 22,
  },
};

export const SHADOWS = {
  dark: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
};

const appTheme = { COLORS, SIZES, FONTS, SHADOWS };

export default appTheme;
