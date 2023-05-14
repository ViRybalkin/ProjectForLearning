import {Comment} from "entities";
import {rtkApi} from "shared/config/api/rtkApi";

const getArticleDetailsComments = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleDetailsComments: build.query<Array<Comment>, string>({
            query: (articleId) => ({
                url: '/comments',
                params: {
                    articleId,
                    _expand: 'user'
                }
            }),
        }),
    }),
})

export const {useGetArticleDetailsCommentsQuery} = getArticleDetailsComments;