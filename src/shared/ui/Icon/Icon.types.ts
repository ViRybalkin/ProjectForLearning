import React from 'react';

export interface IconProps {
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  width?: number;
  height?: number;
  onClick?: () => void;
  classname?: string;
}
