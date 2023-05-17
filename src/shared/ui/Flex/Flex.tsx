import React, { memo } from 'react';
import { classNames } from '../../config/helpers/classNames';
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
    fullWidth = true,
  }: FlexProps) => {
    const classes = [
      classname,
      cls[`justify__${justify}`],
      cls[`align__${align}`],
      cls[`direction__${direction}`],
      gap && cls[`gap__${gap}`],
    ];

    return <div className={classNames(cls.flex, { max: fullWidth }, classes)}>{children}</div>;
  }
);
