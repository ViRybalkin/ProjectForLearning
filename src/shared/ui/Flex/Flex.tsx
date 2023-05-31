import { memo } from 'react';
import { classNames } from '@/shared/helpers/classNames';
import { FlexProps } from './Flex.types';
import cls from './Flex.module.scss';

export const Flex = memo(
  ({
    children,
    classname,
    gap,
    justify = 'center',
    align = 'center',
    direction = 'column',
    fullWidth = false,
  }: FlexProps) => {
    const classes = [
      classname,
      cls[`justify__${justify}`],
      cls[`align__${align}`],
      cls[`direction__${direction}`],
      gap && cls[`gap__${gap}`],
    ];

    return <div className={classNames(cls.flex, { [cls.fullWidth]: fullWidth }, classes)}>{children}</div>;
  }
);
