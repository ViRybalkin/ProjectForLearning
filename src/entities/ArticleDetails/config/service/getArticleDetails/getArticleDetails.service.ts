import {rtkApi} from "@/shared/config/api/rtkApi";
import {ArticleDetailsDataType} from "../../types/article.types";


const getArticleDetails = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleDetails: build.query<ArticleDetailsDataType, string>({
            query: (articleId) => ({
                url: `/articles/${articleId}`,
            }),
        }),
    }),
})

export const {useGetArticleDetailsQuery} = getArticleDetails;