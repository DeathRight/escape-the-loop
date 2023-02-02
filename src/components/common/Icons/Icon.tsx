import * as React from "react";
import Svg from "react-native-svg";

interface _IconProps {
  size?: number;
  color?: string;
  children: React.ReactNode;
}

export interface IconProps extends Omit<_IconProps, "children"> {}

const Icon = ({ size = 24, color, children }: _IconProps) => (
  <Svg
    width={size || 24}
    height={size || 24}
    viewBox="0 0 1200 1200"
    fill={color}
  >
    {children}
  </Svg>
);

export default Icon;
