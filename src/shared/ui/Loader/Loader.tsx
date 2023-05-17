import React, { memo } from 'react';
import { classNames } from 'shared/config/helpers/classNames';
import cls from './loader.module.scss';
import { LoaderProps } from './Loader.types';

export const Loader = memo(({ className }: LoaderProps) => {
  return (
    <div data-testid='loaderTestId' className={classNames(cls.ldsRing, {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
});
