import {rtkApi} from "@/shared/api/rtkApi";
import {ArticleRatingTypes, GetArticleRatingPayload, SetArticleRatingPayload} from "../types/ArticleRating.types";


const articleRating = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<Array<ArticleRatingTypes>, GetArticleRatingPayload>({
            query: ({articleId, userId}) => ({
                params: {
                    articleId,
                    userId,
                },
                url: '/rating',
            }),
        }),
        setFeedback: build.mutation<void, SetArticleRatingPayload>({
            query: (args) => ({
                body: args,
                method: 'POST',
                url: '/rating',
            })
        })

    }),
})

export const {useGetArticleRatingQuery, useSetFeedbackMutation} = articleRating;