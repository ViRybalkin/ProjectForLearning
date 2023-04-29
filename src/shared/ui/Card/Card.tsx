import React, { memo } from 'react';
import { classNames } from 'app';
import { CardProps } from './Card.types';
import cls from './Card.module.scss';

export const Card = memo(({ classname, children, ...other }: CardProps) => {
  return (
    <div {...other} className={classNames(cls.card, {}, [classname])}>
      {children}
    </div>
  );
});
