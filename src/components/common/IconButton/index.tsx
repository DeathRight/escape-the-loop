import { useMemo } from "react";
import { Text } from "react-native";
import Button, { ButtonProps } from "../Button";

export interface IconButtonProps extends Omit<ButtonProps, "title"> {
  title?: string;
  icon: React.ReactNode;
  iconAlign?: "left" | "right";
}

export const IconButton: React.FC<IconButtonProps> = (
  props: IconButtonProps
) => {
  const { title, icon, iconAlign = "left", ...rest } = props;

  const children = useMemo(() => {
    if (title) {
      return (
        <>
          {iconAlign === "left" && icon}
          <Text selectable={false}>{title}</Text>
          {iconAlign === "right" && icon}
        </>
      );
    }
    return icon;
  }, [title, icon, iconAlign]);

  return <Button {...rest}>{children}</Button>;
};
