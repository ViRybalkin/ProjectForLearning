import { ArticleDetailsDataType } from '../../config/types/article.types';

export interface ArticleListItemProps {
  article: ArticleDetailsDataType;
  view: 'BIG' | 'SMALL';
}
