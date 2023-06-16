import { memo } from 'react';
import { classNames } from '@/shared/helpers/classNames';
import cls from './Typography.module.scss';
import { TypographyProps } from './Typography.types';

const Typography = memo(({ align, children, classname, error, variant }: TypographyProps) => {
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
