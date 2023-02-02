import { config, css } from "../../../../stitches.config";
import { useThemeStyleSheet } from "../../../../stitches/colorUtil";

export default css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "$md",
  py: "$md",
  px: "$lg",
  borderRadius: "$md",
});

export const useThemeStyles = useThemeStyleSheet((theme) => ({
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.space.md,
    ...config.utils.py(theme.space.md),
    ...config.utils.px(theme.space.lg),
    borderRadius: theme.radii.md as any,
  },
  buttonDisabled: {
    backgroundColor: theme.colors.buttonBgDisabled,
  },
  textDisabled: {
    color: theme.colors.buttonTextDisabled,
  },
}));
