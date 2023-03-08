import React, { FC } from 'react';
import { classNames } from 'app';
import { TypographyProps } from './Typography.types';
import cls from './Typography.module.scss';

const Typography: FC<TypographyProps> = ({ error, variant, children }) => {
  const Component = error ? 'p' : variant || 'p';

  return (
    <Component data-testid="typographyId" className={classNames(cls.typography, { [cls.error]: error })}>
      {children}
    </Component>
  );
};

export { Typography };
