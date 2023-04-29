import { ArticleDetailsDataType } from '../../config/types/article.types';

type View = 'BIG' | 'SMALL';

export interface ArticleListItemProps {
  article: ArticleDetailsDataType;
  view: View;
}

export interface ArticleListItemSkeletonProps {
  view: View;
  classname?: string;
}
