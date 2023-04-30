import { ArticleDetailsDataType, ArticleListView } from '../../config/types/article.types';

export interface ArticleListItemProps {
  article: ArticleDetailsDataType;
  view: ArticleListView;
}

export interface ArticleListItemSkeletonProps {
  view: ArticleListView;
  classname?: string;
}
