import React, { memo } from 'react';
import { classNames } from 'app';
import { Typography } from 'shared';
import { ArticleListProps } from './ArticleList.types';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

export const ArticleList = memo(({ articles, isLoading, error, view = 'BIG' }: ArticleListProps) => {
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

  if (isLoading) {
    return (
      <div data-testid='articleListSkeletonId' className={cls[view]}>
        {skeletonLength.map((el, index) => (
          <ArticleListItemSkeleton key={index} view={view} />
        ))}
      </div>
    );
  }
  return (
    <div data-testid='articleListId' className={classNames('', {}, [cls[view]])}>
      {articles.length > 0 ? articles.map((el) => <ArticleListItem key={el.id} view={view} article={el} />) : null}
    </div>
  );
});
