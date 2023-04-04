type ArticleBlockType = 'TEXT' | 'IMAGE' | 'CODE';

interface ArticleDetailsBLockBase {
  id: string;
  type: ArticleBlockType,
}

interface ArticleDetailsImageBlock extends ArticleDetailsBLockBase {
  type: 'IMAGE';
}

interface ArticleDetailsTextBlock extends ArticleDetailsBLockBase {
  type: 'TEXT';
  title: string;
  paragraphs: Array<string>;
}

interface ArticleDetailsCodeBlock extends ArticleDetailsBLockBase {
  type: 'CODE';
  code: string;
  src: string;
  title: string;
}

type ArticleBlock = ArticleDetailsImageBlock | ArticleDetailsCodeBlock | ArticleDetailsTextBlock;

type ArticleType = 'IT' | 'SCIENCE'

export interface ArticleDetailsDataType {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number,
  createdAt: string
  type: Array<ArticleType>,
  blocks: Array<ArticleBlock>
}


export interface ArticleDetailsReducerType {
  isLoading: boolean;
  data?: ArticleDetailsDataType;
  error?: string;
}