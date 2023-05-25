import React, { memo } from 'react';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import { classNames } from '@/shared/config/helpers/classNames';
import { ArticleListItemSkeletonProps } from './ArticleListItem.types';
import cls from './ArticleListItem.module.scss';

export const ArticleListItemSkeleton = memo(({ view, classname }: ArticleListItemSkeletonProps) => {
  if (view === 'BIG') {
    return (
      <Card classname={classNames('', {}, [classname, cls[view]])}>
        <div className={cls.header}>
          <div className={cls.userInfo}>
            <Skeleton width={35} height={35} borderRadius={50} />
            <Skeleton width={150} height={16} />
          </div>
          <Skeleton width={110} height={16} />
        </div>
        <Skeleton className={cls.articleTitle} width={500} height={24} />
        <Skeleton width={50} height={16} className={cls.types} />
        <Skeleton width={800} height={180} className={cls.img} />
        <Skeleton width={770} height={56} className={cls.articleText} />
        <Skeleton width={770} height={35} className={cls.articleText} />
        <div className={cls.footer}>
          <Skeleton width={100} height={30} />
          <div className={cls.blockWithIcon}>
            <Skeleton width={50} height={20} />
            <Skeleton width={20} height={20} />
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card classname={classNames('', {}, [classname])}>
      <Skeleton width={210} height={250} />
    </Card>
  );
});
