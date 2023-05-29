import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  width?: number;
  height?: number;
  onClick?: () => void;
  classname?: string;
}
