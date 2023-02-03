import {
  gray,
  grayA,
  indigo,
  indigoA,
  brown,
  brownA,
  brownDark,
  brownDarkA,
  grayDark,
  grayDarkA,
  indigoDark,
  indigoDarkA,
} from "@radix-ui/colors";
import { createStitches } from "stitches-native";
import { CSSProperties } from "stitches-native/src/types/css-util";
import {
  prefixStepTokensWithScale,
  Scales,
  scaleToStepTokens,
} from "./stitches/colorUtil";

// Start time for performance measurement
const startTime = Date.now();

/* -------------------------------------------------------------------------- */
/*                                   Themes                                   */
/* -------------------------------------------------------------------------- */

// Define light color scales
const light: Scales = {
  neutral: scaleToStepTokens(gray),
  neutralA: scaleToStepTokens(grayA),
  brand: scaleToStepTokens(indigo),
  brandA: scaleToStepTokens(indigoA),
  accent: scaleToStepTokens(brown),
  accentA: scaleToStepTokens(brownA),
};

// Define dark color scales
const dark: Scales = {
  neutral: scaleToStepTokens(grayDark),
  neutralA: scaleToStepTokens(grayDarkA),
  brand: scaleToStepTokens(indigoDark),
  brandA: scaleToStepTokens(indigoDarkA),
  accent: scaleToStepTokens(brownDark),
  accentA: scaleToStepTokens(brownDarkA),
};

// Light theme colors
const lightThemeColors = {
  // Spread light color scales
  ...prefixStepTokensWithScale(light.neutral, "neutral"),
  ...prefixStepTokensWithScale(light.neutralA, "neutralA"),
  ...prefixStepTokensWithScale(light.brand, "brand"),
  ...prefixStepTokensWithScale(light.brandA, "brandA"),
  ...prefixStepTokensWithScale(light.accent, "accent"),
  ...prefixStepTokensWithScale(light.accentA, "accentA"),

  // Main
  appBg: light.neutral.appBg,
  headerBg: light.neutral.appBg,
  headerBorder: light.neutralA.subtleBg,
  footerBg: light.neutral.appBg,
  footerBorder: light.neutralA.subtleBorder,
  // Text
  textHiC: light.neutralA.hiC,
  textLoC: light.neutralA.loC,
  linkHiC: light.brandA.hiC,
  linkLoC: light.brandA.loC,
  // Card
  cardBg: light.neutral.subtleBg,
  cardBorder: light.neutral.subtleBorder,

  // Button
  buttonBgDisabled: light.neutral.elBg,
  buttonBg: light.accent.elBg,
  buttonBgHover: light.accent.elBgHover,
  buttonBgActive: light.accent.elBgActive,
  // "Call To Action"'s
  ctaBgDisabled: light.neutralA.elBgHover,
  ctaBg: light.brand.elBgHover,
  ctaBgHover: light.brand.elBgActive,
  ctaBgActive: light.brand.subtleBorder,
  // Button Text
  buttonTextDisabled: light.neutralA.solidBg,
  buttonText: light.accentA.hiC,
};

// Dark theme colors
const darkThemeColors: typeof lightThemeColors = {
  // Spread dark color scales
  ...prefixStepTokensWithScale(dark.neutral, "neutral"),
  ...prefixStepTokensWithScale(dark.neutralA, "neutralA"),
  ...prefixStepTokensWithScale(dark.brand, "brand"),
  ...prefixStepTokensWithScale(dark.brandA, "brandA"),
  ...prefixStepTokensWithScale(dark.accent, "accent"),
  ...prefixStepTokensWithScale(dark.accentA, "accentA"),

  // Main
  appBg: dark.neutral.appBg,
  headerBg: dark.neutral.appBg,
  headerBorder: dark.neutralA.subtleBg,
  footerBg: dark.neutral.appBg,
  footerBorder: dark.neutralA.subtleBorder,
  // Text
  textHiC: dark.neutralA.hiC,
  textLoC: dark.neutralA.loC,
  linkHiC: dark.brandA.hiC,
  linkLoC: dark.brandA.loC,
  // Card
  cardBg: dark.neutral.subtleBg,
  cardBorder: dark.neutral.subtleBorder,

  // Button
  buttonBgDisabled: dark.neutral.elBg,
  buttonBg: dark.accent.elBg,
  buttonBgHover: dark.accent.elBgHover,
  buttonBgActive: dark.accent.elBgActive,
  // "Call To Action"'s
  ctaBgDisabled: dark.neutralA.elBgHover,
  ctaBg: dark.accent.elBgHover,
  ctaBgHover: dark.accent.elBgActive,
  ctaBgActive: dark.accent.subtleBorder,
  // Button Text
  buttonTextDisabled: dark.neutralA.solidBg,
  buttonText: dark.accentA.hiC,
};

/* ------------------------------------ * ----------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  Stitches                                  */
/* -------------------------------------------------------------------------- */

// Create stitches instance with light theme
const { styled, css, theme, createTheme, useTheme, ThemeProvider, config } =
  createStitches({
    theme: {
      colors: {
        ...lightThemeColors,
      },
      space: {
        xs: 1,
        sm: 2,
        md: 4,
        lg: 8,
        xl: 16,
        xxl: 32,
      },
      sizes: {
        header: 32,
      },
      fontSizes: {
        xs: 6,
        sm: 8,
        md: 12,
        lg: 14,
        xl: 18,
        xxl: 24,
        heading: 32,
        subtitle: 42,
        title: 48,
      },
      borderWidths: {
        sm: 1,
        md: 2,
        lg: 4,
      },
      radii: {
        sm: 2,
        md: 4,
        lg: 8,
        round: 9999,
      },
      zIndices: {
        front: 100,
        menu: 200,
        overlay: 800,
        modal: 900,
      },
    },
    utils: {
      p: (value: CSSProperties["padding"]) => ({
        paddingTop: value,
        paddingBottom: value,
        paddingLeft: value,
        paddingRight: value,
      }),
      pt: (value: CSSProperties["paddingTop"]) => ({
        paddingTop: value,
      }),
      pr: (value: CSSProperties["paddingRight"]) => ({
        paddingRight: value,
      }),
      pb: (value: CSSProperties["paddingBottom"]) => ({
        paddingBottom: value,
      }),
      pl: (value: CSSProperties["paddingLeft"]) => ({
        paddingLeft: value,
      }),
      px: (value: CSSProperties["paddingLeft"]) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: CSSProperties["paddingTop"]) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      m: (value: CSSProperties["margin"]) => ({
        marginTop: value,
        marginBottom: value,
        marginLeft: value,
        marginRight: value,
      }),
      mt: (value: CSSProperties["marginTop"]) => ({
        marginTop: value,
      }),
      mr: (value: CSSProperties["marginRight"]) => ({
        marginRight: value,
      }),
      mb: (value: CSSProperties["marginBottom"]) => ({
        marginBottom: value,
      }),
      ml: (value: CSSProperties["marginLeft"]) => ({
        marginLeft: value,
      }),
      mx: (value: CSSProperties["marginLeft"]) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: CSSProperties["marginTop"]) => ({
        marginTop: value,
        marginBottom: value,
      }),
      size: (value: CSSProperties["width"]) => ({
        width: value,
        height: value,
      }),
    },
  });

/* ------------------------------------ * ----------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                   Exports                                  */
/* -------------------------------------------------------------------------- */

const darkTheme = createTheme({
  colors: {
    ...darkThemeColors,
  },
});

export const lightScales = light;
export const darkScales = dark;

export {
  styled,
  css,
  theme, // light theme
  darkTheme,
  useTheme,
  ThemeProvider,
  config,
};

/* -------------------------------------------------------------------------- */

// Log the time it took to load the config
console.info(`Stitches config loaded in ${Date.now() - startTime}ms`);
