import * as React from "react";
import Svg from "react-native-svg";

interface _IconProps {
  size?: number;
  color?: string;
  children: React.ReactNode;
}

export interface IconProps extends Omit<_IconProps, "children"> {}

const Icon = ({ size, color, children }: _IconProps) => (
  <Svg
    width={size + 8 || 26}
    height={size + 8 || 26}
    viewBox="0 0 1200 1200"
    fill={color}
    strokeWidth={10}
  >
    {children}
  </Svg>
);

export default Icon;
