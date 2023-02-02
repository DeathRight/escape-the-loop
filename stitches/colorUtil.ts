/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { useTheme } from "../stitches.config";

/**
 * Steps for color scales reduced by 1 to match the radix-ui scales when converted to array
 */
export enum steps {
  appBg = 0,
  subtleBg = 1,
  elBg = 2,
  elBgHover = 3,
  elBgActive = 4,
  subtleBorder = 5,
  elBorder = 6,
  elBorderHover = 7,
  solidBg = 8,
  solidBgHover = 9,
  loC = 10,
  hiC = 11,
}

type ScaleWithStepTokens = Record<keyof typeof steps, string>;

/**
 * Theme color scales
 */
export interface Scales {
  neutral: ScaleWithStepTokens;
  neutralA: ScaleWithStepTokens;
  brand: ScaleWithStepTokens;
  brandA: ScaleWithStepTokens;
  accent: ScaleWithStepTokens;
  accentA: ScaleWithStepTokens;
}

export type ScaleNames = keyof Scales;
export type ScaleNamesWithoutA = Exclude<
  ScaleNames,
  "neutralA" | "brandA" | "accentA"
>;

/* ------------------------------------ * ----------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

/**
 * Get prefixed step token from scale name and step (i.e. "neutral:appBg")
 */
export const getStepToken = (scale: ScaleNames, step: keyof typeof steps) =>
  `${scale}:${step}`;

/**
 * Convert color scale to step tokens for better readability
 * @param scale A radix-ui color scale
 * @returns An object of color tokens representing the color scale
 */
export const scaleToStepTokens = (scale: Record<string, string>) => {
  let stepTokens = {};
  Object.keys(scale).forEach((key, index) => {
    stepTokens[steps[index] as keyof typeof steps] = scale[key];
  });
  return stepTokens as ScaleWithStepTokens;
};

/**
 * Prefixes step tokens with scale name i.e. "neutral:appBg"
 * @param scale The ScaleWithStepTokens object
 * @param name The name of the scale
 * @returns A modified ScaleWithStepTokens object with prefixed step tokens
 */
export const prefixStepTokensWithScale = (
  scale: ScaleWithStepTokens,
  name: keyof Scales
) => {
  let prefixedTokens = {};
  Object.keys(scale).forEach((key) => {
    prefixedTokens[`${name}:${key}`] = scale[key];
  });
  return prefixedTokens as Record<string, string>;
};

/**
 * Creates a hook that returns a StyleSheet object created from a Style object that has access to the theme
 * @param getStyles A function that returns an object of styles
 * @returns A hook that returns a StyleSheet object
 */
export const useThemeStyleSheet =
  <T extends Record<string, ViewStyle | TextStyle | ImageStyle>>(
    getStyles: (
      theme: ReturnType<typeof useTheme>
    ) => Parameters<typeof StyleSheet.create<T>>[0]
  ) =>
  () => {
    const theme = useTheme();
    return StyleSheet.create(getStyles(theme));
  };

/* ------------------------------------ * ----------------------------------- */
