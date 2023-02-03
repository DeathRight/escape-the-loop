import { Text, TextProps } from "react-native";
import { useThemeStyles } from "./styles";

export default (props: TextProps) => {
  const { style, ...rest } = props;
  const themeStyles = useThemeStyles();

  return <Text {...rest} style={[themeStyles.base, style]} />;
};
