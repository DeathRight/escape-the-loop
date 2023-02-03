import { theme } from "@stitchesConfig";

export type Alignment = "left" | "right";

export type ThemeSize = keyof typeof theme.sizes;
export type ThemeSpace = keyof typeof theme.space;
export type ThemeRadii = keyof typeof theme.radii;
export type ThemeFontSize = keyof typeof theme.fontSizes;
