import useThemeStyleSheet from "@hooks/useThemeStyleSheet";

export const useThemeStyles = useThemeStyleSheet((theme) => ({
  sav: {
    flex: 1,
  },
  container: {
    backgroundColor: theme.colors.appBg,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
}));
