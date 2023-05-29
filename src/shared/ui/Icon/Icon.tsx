import { memo } from 'react';
import { classNames } from '@/shared/helpers/classNames';
import { IconProps } from './Icon.types';
import cls from './Icon.module.scss';

export const Icon = memo(({ Svg, width, height, onClick, classname, ...otherProps }: IconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      data-testid='svgIconId'
      className={classNames(cls.icon, { [cls.clickable]: Boolean(onClick) }, [classname])}
      onClick={onClick}
      {...otherProps}
    />
  );
});
