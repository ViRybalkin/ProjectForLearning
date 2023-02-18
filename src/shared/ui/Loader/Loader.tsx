import React from 'react';
import { classNames } from 'app';
import cls from './loader.module.scss';
import { LoaderProps } from './Loader.types';

const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={classNames(cls.ldsRing, { }, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export { Loader };
