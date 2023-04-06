import React, { memo } from 'react';
import { classNames } from 'app';
import cls from './Typography.module.scss';
import { TypographyProps } from './Typography.types';

const Typography = memo(({ error, variant, children, align, classname }: TypographyProps) => {
  const Component = error ? 'p' : variant || 'p';

  return (
    <Component
      data-testid='typographyId'
      className={classNames(cls.typography, { [cls.error]: error }, [cls.align, classname])}>
      {children}
    </Component>
  );
});

export { Typography };
