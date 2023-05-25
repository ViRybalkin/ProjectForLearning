import React, { memo } from 'react';
import { classNames } from '@/shared/config/helpers/classNames';
import { Typography } from '@/shared/ui/Typography';
import { ArticleListProps } from './ArticleList.types';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

export const ArticleList = memo(({ articles, isLoading, error, classname, target, view = 'BIG' }: ArticleListProps) => {
  const skeletonLength = new Array(view === 'SMALL' ? 9 : 3).fill(0);

  if (error) {
    return (
      <div data-testid='articleListErrorId' className={cls.errorWrapper}>
        <Typography align='center' variant='h1'>
          {error}
        </Typography>
      </div>
    );
  }

  return (
    <div data-testid='articleListId' className={classNames('', {}, [cls[view], classname])}>
      {articles.length > 0 &&
        articles.map((el) => <ArticleListItem target={target} key={el.id} view={view} article={el} />)}
      {isLoading && (
        <div data-testid='articleListSkeletonId' className={cls[view]}>
          {skeletonLength.map((el, index) => (
            <ArticleListItemSkeleton key={index} view={view} />
          ))}
        </div>
      )}
    </div>
  );
});
