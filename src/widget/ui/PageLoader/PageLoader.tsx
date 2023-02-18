import React from 'react';
import { Loader } from 'shared';
import { classNames } from 'app';
import cls from './PageLoader.module.scss';

const PageLoader = () => {
  return (
    <div className={classNames(cls.pageLoader)}>
      <Loader />
    </div>
  );
};

export { PageLoader };
