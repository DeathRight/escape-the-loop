import React from "react";
import { Pressable, PressableProps, Text } from "react-native";
import { styled, useTheme } from "../../../../stitches.config";
import {
  getStepToken,
  ScaleNamesWithoutA,
} from "../../../../stitches/colorUtil";
import styles, { useThemeStyles } from "./styles";

export interface ButtonProps extends PressableProps {
  title?: string;
  color?: ScaleNamesWithoutA;
  children?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const {
    title,
    children,
    color = "accent",
    disabled = false,
    style,
    android_ripple,
    ...rest
  } = props;

  // Hooks
  const theme = useTheme();
  const themeStyles = useThemeStyles();

  // Colors
  const normalColor = theme.colors[getStepToken(color, "elBg")] as string;
  const hoverColor = theme.colors[getStepToken(color, "elBgHover")] as string;
  const pressedColor = theme.colors[
    getStepToken(color, "elBgActive")
  ] as string;

  const textColor = theme.colors[getStepToken(`${color}A`, "hiC")] as string;

  // Styles
  const baseButtonStyle = (pressed: boolean) => ({
    backgroundColor: pressed ? pressedColor : normalColor,
  });
  const baseTextStyle = { color: textColor };

  // Return
  return (
    <Pressable
      disabled={disabled}
      onPress={() => console.log("Pressed")}
      style={({ pressed }) => [
        themeStyles.button,
        disabled ? themeStyles.buttonDisabled : baseButtonStyle(pressed),
      ]}
      android_ripple={android_ripple ? android_ripple : { color: hoverColor }}
      {...rest}
    >
      {title ? (
        <Text
          selectable={false}
          style={disabled ? themeStyles.textDisabled : baseTextStyle}
        >
          {title}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
};

export default Button;
