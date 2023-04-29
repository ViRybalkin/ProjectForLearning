import React, { memo } from 'react';
import { classNames } from 'app';
import { ArticleListProps } from './ArticleList.types';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

export const ArticleList = memo(({ articles, isLoading, view = 'BIG' }: ArticleListProps) => {
  const skeletonLength = new Array(view === 'SMALL' ? 9 : 3).fill(0);

  const posts = new Array(16).fill(0).map((el) => ({
    ...articles[0],
  }));

  if (isLoading) {
    return (
      <div className={cls[view]}>
        {skeletonLength.map((el, index) => (
          <ArticleListItemSkeleton key={index} view={view} />
        ))}
      </div>
    );
  }
  return (
    <div className={classNames('', {}, [cls[view]])}>
      {articles.length > 0 ? posts.map((el) => <ArticleListItem view={view} article={el} />) : null}
    </div>
  );
});
