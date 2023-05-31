import {rtkApi} from "@/shared/config/api/rtkApi";
import {ArticleRatingTypes, GetArticleRatingPayload, SetArticleRatingPayload} from "../types/ArticleRating.types";


const articleRating = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<Array<ArticleRatingTypes>, GetArticleRatingPayload>({
            query: ({articleId, userId}) => ({
                url: '/rating',
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        setFeedback: build.mutation<void, SetArticleRatingPayload>({
            query: (args) => ({
                url: '/rating',
                method: 'POST',
                body: args,
            })
        })

    }),
})

export const {useGetArticleRatingQuery, useSetFeedbackMutation} = articleRating;