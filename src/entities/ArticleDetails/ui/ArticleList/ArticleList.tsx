import React, { memo } from 'react';
import { classNames } from 'app';
import { ArticleListProps } from './ArticleList.types';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';

export const ArticleList = memo(({ articles, view = 'SMALL' }: ArticleListProps) => {
  const posts = new Array(16).fill(0).map((el, index) => ({
    ...articles[0],
    id: String(index),
  }));
  return (
    <div className={classNames('', {}, [cls[view]])}>
      {articles.length > 0 ? posts.map((el) => <ArticleListItem view={view} article={el} />) : null}
    </div>
  );
});
