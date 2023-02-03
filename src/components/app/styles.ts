import useThemeStyleSheet from "@hooks/useThemeStyleSheet";
import { config } from "@stitchesConfig";

export const useThemeStyles = useThemeStyleSheet((theme) => ({
  appContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",

    backgroundColor: theme.colors.appBg,
  },

  bodyContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",

    backgroundColor: theme.colors.appBg,
    width: "100%",
    overflow: "hidden",
  },
  bodyScreenContainer: {
    width: "100%",
    padding: theme.space.xl,
  },

  headerContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: theme.colors.headerBg,

    margin: 0,
    padding: theme.space.md,
    ...config.utils.px(theme.space.lg),

    borderBottomWidth: theme.borderWidths.lg,
    borderBottomColor: theme.colors.headerBorder,
    borderStyle: "solid",

    alignSelf: "stretch",
    zIndex: theme.zIndices.front,
  },
  footerContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.footerBg,

    margin: 0,
    padding: theme.space.md,
    ...config.utils.px(theme.space.lg),

    borderTopWidth: theme.borderWidths.lg,
    borderTopColor: theme.colors.footerBorder,
    borderStyle: "solid",

    alignSelf: "stretch",
    minHeight: "15%",
    maxHeight: "45%",
    zIndex: theme.zIndices.front,
    overflow: "hidden",
  },
}));
