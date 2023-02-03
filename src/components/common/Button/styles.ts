import { config } from "@stitchesConfig";
import useThemeStyleSheet from "@hooks/useThemeStyleSheet";

export const useThemeStyles = useThemeStyleSheet((theme) => ({
  view: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    ...config.utils.py(theme.space.md),
    ...config.utils.px(theme.space.lg),
  },
  button: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    ...config.utils.py(theme.space.md),
    ...config.utils.px(theme.space.lg),
    margin: theme.space.md,
    borderRadius: theme.radii.md as any,
  },
  buttonDisabled: {
    backgroundColor: theme.colors.buttonBgDisabled,
  },
  ctaDisabled: {
    backgroundColor: theme.colors.ctaBgDisabled,
  },

  ctaText: {
    fontWeight: "bold",
  },
  textDisabled: {
    color: theme.colors.buttonTextDisabled,
  },
}));
