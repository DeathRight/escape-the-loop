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
import { Scales, scaleToStepTokens } from "./stitches/colorUtil";

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
  // Main
  appBg: light.neutral.appBg,
  headerBg: light.neutral.appBg,
  headerBorder: light.neutral.subtleBg,
  footerBg: light.neutral.appBg,
  footerBorder: light.neutral.subtleBg,
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
  // Button Text
  buttonTextDisabled: light.neutralA.loC,
  buttonText: light.accentA.hiC,
};

// Dark theme colors
const darkThemeColors: typeof lightThemeColors = {
  // Main
  appBg: dark.neutral.appBg,
  headerBg: dark.neutral.appBg,
  headerBorder: dark.neutral.subtleBg,
  footerBg: dark.neutral.appBg,
  footerBorder: dark.neutral.subtleBg,
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
  // Button Text
  buttonTextDisabled: dark.neutralA.loC,
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
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "16px",
        xl: "32px",
      },
      sizes: {
        header: "48px",
      },
      fontSizes: {
        xs: "6px",
        sm: "8px",
        md: "14px",
        lg: "32px",
        heading: "42px",
        subtitle: "54px",
        title: "64px",
      },
      borderWidths: {
        sm: "1px",
        md: "2px",
        lg: "4px",
      },
      radii: {
        sm: "2px",
        md: "4px",
        lg: "8px",
        round: "9999px",
      },
      zIndices: {
        front: 100,
        menu: 200,
        overlay: 800,
        modal: 900,
      },
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
