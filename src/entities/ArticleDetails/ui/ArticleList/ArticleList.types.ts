import { ArticleDetailsDataType, ArticleListView } from 'entities/ArticleDetails';
import { HTMLAttributeAnchorTarget } from 'react';

export interface ArticleListProps {
  articles: Array<ArticleDetailsDataType>;
  target?: HTMLAttributeAnchorTarget;
  isLoading?: boolean;
  error?: string;
  view?: ArticleListView;
  classname?: string;
}
