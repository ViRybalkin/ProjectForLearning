export interface ArticleRatingTypes {
    userId: string;
    articleId: string;
    rate: number,
    feedback?: string;
}

export interface GetArticleRatingPayload {
    articleId: string;
    userId: string;
}

export interface SetArticleRatingPayload extends GetArticleRatingPayload {
    rate: string;
    feedback?: string;
}