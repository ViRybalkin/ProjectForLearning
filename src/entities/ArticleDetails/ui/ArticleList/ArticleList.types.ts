import { ArticleDetailsDataType, ArticleListView } from 'entities';

export interface ArticleListProps {
  articles: Array<ArticleDetailsDataType>;
  isLoading?: boolean;
  error?: string;
  view?: ArticleListView;
  classname?: string;
}
