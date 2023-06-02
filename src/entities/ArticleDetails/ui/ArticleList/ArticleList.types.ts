import { HTMLAttributeAnchorTarget } from 'react';
import { ArticleDetailsDataType, ArticleListView } from '../../config/types/article.types';

export interface ArticleListProps {
  articles: Array<ArticleDetailsDataType>;
  target?: HTMLAttributeAnchorTarget;
  isLoading?: boolean;
  error?: string;
  view?: ArticleListView;
  classname?: string;
}
