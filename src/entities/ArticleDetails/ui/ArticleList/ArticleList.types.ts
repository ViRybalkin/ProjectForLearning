import { ArticleDetailsDataType } from 'entities';

export interface ArticleListProps {
  articles: Array<ArticleDetailsDataType>;
  isLoading: boolean;
  view?: 'BIG' | 'SMALL';
}
