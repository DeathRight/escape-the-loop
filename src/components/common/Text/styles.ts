import useThemeStyleSheet from "@hooks/useThemeStyleSheet";

export const useThemeStyles = useThemeStyleSheet((theme) => ({
  base: {
    color: theme.colors.textHiC,
    fontSize: theme.fontSizes.md,
  },
}));
