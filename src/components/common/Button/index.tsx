import { Alignment, ThemeFontSize, ThemeSpace } from "@util/types";
import React from "react";
import { Pressable, PressableProps, Text } from "react-native";
import { config, useTheme } from "@stitchesConfig";
import {
  getStepToken,
  ScaleNamesWithoutA,
} from "../../../../stitches/colorUtil";
import { useThemeStyles } from "./styles";

export interface ButtonProps extends PressableProps {
  title?: string;
  titleAlign?: Alignment;
  size?: ThemeFontSize;
  px?: ThemeSpace;
  py?: ThemeSpace;
  rounded?: boolean;
  /**
   * Whether to apply the "Call to Action" colors to the button
   */
  cta?: boolean;
  color?: ScaleNamesWithoutA;
  children?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const {
    children,
    title,
    titleAlign = "right",
    size = "lg",
    px,
    py,
    rounded,
    cta,
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
  const normalColor = theme.colors[
    getStepToken(color, !cta ? "elBg" : "elBgHover")
  ] as string;
  const hoverColor = theme.colors[
    getStepToken(color, !cta ? "elBgHover" : "elBgActive")
  ] as string;
  const pressedColor = theme.colors[
    getStepToken(color, !cta ? "elBgActive" : "subtleBorder")
  ] as string;

  const textColor = theme.colors[getStepToken(`${color}A`, "hiC")] as string;

  // Styles
  const baseButtonStyle = (pressed: boolean) => ({
    backgroundColor: pressed ? pressedColor : normalColor,
  });
  const buttonDirection = {
    flexDirection: titleAlign === "right" ? "row" : "row-reverse",
  } as const;
  const paddingY = py ? config.utils.py(theme.space[py]) : undefined;
  const paddingX = px ? config.utils.px(theme.space[px]) : undefined;
  const dynamicPadding = {
    ...paddingY,
    ...paddingX,
  };
  const dynamicStyle = {
    ...buttonDirection,
    ...dynamicPadding,
    borderRadius: rounded ? theme.radii.round : undefined,
  };

  const baseTextStyle = { fontSize: theme.fontSizes[size] };
  const baseTextColor = { color: textColor };

  // Return
  return (
    <Pressable
      disabled={disabled}
      style={({ pressed }) => [
        themeStyles.button,
        dynamicStyle,
        disabled
          ? !cta
            ? themeStyles.buttonDisabled
            : themeStyles.ctaDisabled
          : baseButtonStyle(pressed),
      ]}
      android_ripple={
        android_ripple
          ? android_ripple
          : {
              color: hoverColor,
              radius: baseTextStyle.fontSize + 4,
              borderless: rounded,
            }
      }
      {...rest}
    >
      {children}
      {title ? (
        <Text
          selectable={false}
          style={[
            baseTextStyle,
            cta ? themeStyles.ctaText : undefined,
            disabled ? themeStyles.textDisabled : baseTextColor,
          ]}
        >
          {title}
        </Text>
      ) : undefined}
    </Pressable>
  );
};

export default Button;
