import React, { memo } from 'react';
import { classNames } from '../../config/helpers/classNames';
import { CardProps } from './Card.types';
import cls from './Card.module.scss';

export const Card = memo(({ classname, children, theme = 'normal', ...other }: CardProps) => {
  return (
    <div {...other} className={classNames(cls.card, {}, [classname, cls[theme]])}>
      {children}
    </div>
  );
});
