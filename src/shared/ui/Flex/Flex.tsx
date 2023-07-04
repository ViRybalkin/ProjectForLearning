import { memo } from 'react';
import { classNames } from '@/shared/helpers/classNames';
import { FlexProps } from './Flex.types';
import cls from './Flex.module.scss';

export const Flex = memo(
  ({
    align = 'center',
    children,
    classname,
    dataTestid,
    direction = 'column',
    fullWidth = false,
    gap,
    justify = 'center',
  }: FlexProps) => {
    const classes = [
      classname,
      cls[`justify__${justify}`],
      cls[`align__${align}`],
      cls[`direction__${direction}`],
      gap && cls[`gap__${gap}`],
    ];

    return (
      <div
        data-testid={dataTestid}
        className={classNames(cls.flex, { [cls.fullWidth]: fullWidth }, classes)}>
        {children}
      </div>
    );
  }
);
