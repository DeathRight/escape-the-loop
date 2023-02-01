// Button component using Pressable with custom styling

import React from "react";
import { Pressable, PressableProps, Text } from "react-native";
import { styled } from "../../../../stitches.config";
import styles from "./styles";

interface ButtonProps extends PressableProps {
  title?: string;
  children?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { title, children, ...rest } = props;
  const StyledPressable = styled(Pressable, styles);

  return (
    <StyledPressable {...rest}>
      {title ? <Text>{title}</Text> : children}
    </StyledPressable>
  );
};
