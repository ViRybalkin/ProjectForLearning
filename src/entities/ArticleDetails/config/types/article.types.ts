import {UserSliceTypes} from "entities";

type ArticleBlockType = 'TEXT' | 'IMAGE' | 'CODE';

interface ArticleDetailsBLockBase {
    id: string;
    type: ArticleBlockType,
}

interface ArticleDetailsImageBlock extends ArticleDetailsBLockBase {
    type: 'IMAGE';
    src: string;
    title: string;
}

export interface ArticleDetailsTextBlock extends ArticleDetailsBLockBase {
    type: 'TEXT';
    title: string;
    paragraphs: Array<string>;
}

interface ArticleDetailsCodeBlock extends ArticleDetailsBLockBase {
    type: 'CODE';
    code: string;
}

export type ArticleBlock = ArticleDetailsImageBlock | ArticleDetailsCodeBlock | ArticleDetailsTextBlock;

type ArticleType = 'IT' | 'SCIENCE'

export interface ArticleDetailsDataType {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    user: UserSliceTypes;
    type: Array<ArticleType>;
    blocks: Array<ArticleBlock>;
}


export interface ArticleDetailsReducerType {
    isLoading: boolean;
    data?: ArticleDetailsDataType;
    error?: string;
}

export type ArticleListView = 'SMALL' | 'BIG';