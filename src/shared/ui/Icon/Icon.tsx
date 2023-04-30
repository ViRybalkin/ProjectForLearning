import React, { memo } from 'react';
import { classNames } from 'app';
import { IconProps } from './Icon.types';
import cls from './Icon.module.scss';

export const Icon = memo(({ Svg, width, height, onClick, classname }: IconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      data-testid="svgIconId"
      className={classNames(cls.icon, { [cls.clickable]: Boolean(onClick) }, [classname])}
      onClick={onClick}
    />
  );
});
