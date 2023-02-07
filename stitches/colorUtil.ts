/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

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

type StepToken = keyof typeof steps;
type StepTokenRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

type ScaleWithStepTokens = Record<StepToken, string>;

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

interface TouchableTokens {
  normal: number;
  hover: number;
  active: number;
}

type TouchableStyle = "subtle" | "normal" | "solid";

const TouchableStyles: Record<TouchableStyle, TouchableTokens> = {
  subtle: {
    normal: 2,
    hover: 3,
    active: 4,
  },
  normal: {
    normal: 3,
    hover: 4,
    active: 5,
  },
  solid: {
    normal: 4,
    hover: 5,
    active: 6,
  },
};

type TouchableStyleScheme = Record<keyof TouchableTokens, string>;

/* ------------------------------------ * ----------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

/**
 * Get prefixed step token from scale name and step (i.e. "neutral:appBg")
 */
export const getStepToken = (
  scale: ScaleNames,
  step: StepToken | StepTokenRange
) => {
  if (typeof step === "number") {
    step = steps[step] as StepToken;
  }

  return `${scale}:${step}`;
};

/**
 * Get associated index of step token
 */
export const getStepTokenIndex = (step: StepToken | StepTokenRange) => {
  if (typeof step === "number") {
    return step;
  }

  return steps[step];
};

/**
 * Get touchable style tokens for a given scale and style
 * @returns
 */
export const getTouchableStyleTokens = (
  scale: ScaleNames,
  style: TouchableStyle
) => {
  const tokens = TouchableStyles[style];

  let touchableStyleTokens: TouchableStyleScheme = {
    normal: getStepToken(scale, tokens.normal as StepTokenRange),
    hover: getStepToken(scale, tokens.hover as StepTokenRange),
    active: getStepToken(scale, tokens.active as StepTokenRange),
  };

  return touchableStyleTokens;
};

/**
 * Convert color scale to step tokens for better readability
 * @param scale A radix-ui color scale
 * @returns An object of color tokens representing the color scale
 */
export const scaleToStepTokens = (scale: Record<string, string>) => {
  let stepTokens = {};
  Object.keys(scale).forEach((key, index) => {
    stepTokens[steps[index] as StepToken] = scale[key];
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

/* ------------------------------------ * ----------------------------------- */
