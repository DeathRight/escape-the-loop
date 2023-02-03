import { useTheme } from "@stitchesConfig";
import { getStepToken } from "@stitchesUtil";
import { Alignment } from "@util/types";
import { View } from "react-native";
import Button, { ButtonProps } from "../Button";
import { IconProps } from "../Icons/Icon";

export interface IconButtonProps extends ButtonProps {
  icon: React.FC<IconProps>;
  iconAlign?: Alignment;
}

export const IconButton: React.FC<IconButtonProps> = (
  props: IconButtonProps
) => {
  const {
    title,
    disabled,
    color = "accent",
    size = "lg",
    icon: Icon,
    titleAlign,
    ...rest
  } = props;

  // Hooks
  const theme = useTheme();

  // Styles
  const marginsStyle = {
    marginRight:
      (titleAlign === "right" || !titleAlign) && title ? theme.space.sm : 0,
    marginLeft: titleAlign === "left" && title ? theme.space.sm : 0,
  };
  // Colors
  const textColor = theme.colors[getStepToken(`${color}A`, "hiC")] as string;
  const textDisabledColor = theme.colors.buttonTextDisabled;

  // Return
  return (
    <Button
      title={title}
      titleAlign={titleAlign}
      size={size}
      color={color}
      disabled={disabled}
      {...rest}
    >
      <View style={marginsStyle}>
        <Icon
          color={disabled ? textDisabledColor : textColor}
          size={theme.fontSizes[size]}
        />
      </View>
    </Button>
  );
};
