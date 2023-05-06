import { HTMLAttributeAnchorTarget } from 'react';
import { ArticleDetailsDataType, ArticleListView } from '../../config/types/article.types';

export interface ArticleListItemProps {
  article: ArticleDetailsDataType;
  view: ArticleListView;
  target?: HTMLAttributeAnchorTarget;
}

export interface ArticleListItemSkeletonProps {
  view: ArticleListView;
  classname?: string;
}
