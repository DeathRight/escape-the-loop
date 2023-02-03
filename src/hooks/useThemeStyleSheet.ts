import { useTheme } from "@stitchesConfig";
import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";

/**
 * Creates a hook that returns a StyleSheet object created from a Style object that has access to the theme
 * @param getStyles A function that returns an object of styles
 * @returns A hook that returns a StyleSheet object
 */
export default <T extends Record<string, ViewStyle | TextStyle | ImageStyle>>(
    getStyles: (
      theme: ReturnType<typeof useTheme>
    ) => Parameters<typeof StyleSheet.create<T>>[0]
  ) =>
  () => {
    const theme = useTheme();
    return StyleSheet.create(getStyles(theme));
  };
