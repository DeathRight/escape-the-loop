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
