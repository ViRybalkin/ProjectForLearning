import React, { CSSProperties, memo } from 'react';
import { classNames } from '@/shared/helpers/classNames';
import cls from './Skeleton.module.scss';
import { SkeletonProps } from './Skeleton.types';

export const Skeleton = memo(({ height, width, borderRadius, className }: SkeletonProps) => {
  const style: CSSProperties = {
    width,
    height,
    borderRadius,
  };

  return <div style={style} className={classNames(cls.skeleton, {}, [className])} />;
});
