import { memo } from 'react';
import { classNames } from '@/shared/helpers/classNames';
import cls from './Typography.module.scss';
import { TypographyProps } from './Typography.types';

const Typography = memo(({ error, variant, children, align, classname }: TypographyProps) => {
  const Component = error ? 'p' : variant || 'p';

  return (
    <Component
      data-testid='typographyId'
      className={classNames(cls.typography, { [cls.error]: error }, [align && cls[align], classname])}>
      {children}
    </Component>
  );
});

export { Typography };
