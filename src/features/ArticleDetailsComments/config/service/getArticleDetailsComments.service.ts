import {Comment} from "@/entities/Comments";
import {rtkApi} from "@/shared/api/rtkApi";

const getArticleDetailsComments = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleDetailsComments: build.query<Array<Comment>, string>({
            query: (articleId) => ({
                params: {
                    _expand: 'user',
                    articleId
                },
                url: '/comments'
            }),
        }),
    }),
})

export const {useGetArticleDetailsCommentsQuery} = getArticleDetailsComments;