import {Comment} from "@/entities/Comments";
import {rtkApi} from "@/shared/config/api/rtkApi";
import {AddCommentPayloadTypes} from "../types/ArticleDetailsCommentsTypes.types";

const addArticleDetailsComment = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        addArticleDetailsComment: build.mutation<Array<Comment>, AddCommentPayloadTypes>({
            query: ({comment, postId, userId}) => ({
                url: '/comments',
                method: 'POST',
                body: {
                    postId, userId, comment
                }
            }),
        }),
    }),
})

export const {useAddArticleDetailsCommentMutation} = addArticleDetailsComment;