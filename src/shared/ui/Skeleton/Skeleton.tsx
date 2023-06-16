import { CSSProperties, memo } from 'react';
import { classNames } from '@/shared/helpers/classNames';
import cls from './Skeleton.module.scss';
import { SkeletonProps } from './Skeleton.types';

export const Skeleton = memo(({ borderRadius, className, height, width }: SkeletonProps) => {
  const style: CSSProperties = {
    borderRadius,
    height,
    width,
  };

  return <div style={style} className={classNames(cls.skeleton, {}, [className])} />;
});
