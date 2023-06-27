import { memo } from 'react';
import { classNames } from '@/shared/helpers/classNames';
import { CardProps } from './Card.types';
import cls from './Card.module.scss';

export const Card = memo(({ children, classname, theme = 'normal', ...other }: CardProps) => {
  return (
    <div
      {...other}
      className={classNames(cls.card, {}, [classname, cls[theme]])}>
      {children}
    </div>
  );
});
