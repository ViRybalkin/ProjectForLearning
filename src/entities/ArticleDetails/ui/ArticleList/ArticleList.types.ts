import { ArticleDetailsDataType } from 'entities';

export interface ArticleListProps {
  articles: Array<ArticleDetailsDataType>;
  view: 'BIG' | 'SMALL';
}
