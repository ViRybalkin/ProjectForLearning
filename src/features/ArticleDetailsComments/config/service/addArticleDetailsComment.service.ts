import {Comment} from "@/entities/Comments";
import {rtkApi} from "@/shared/api/rtkApi";
import {AddCommentPayloadTypes} from "../types/ArticleDetailsCommentsTypes.types";

const addArticleDetailsComment = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        addArticleDetailsComment: build.mutation<Array<Comment>, AddCommentPayloadTypes>({
            query: ({comment, postId, userId}) => ({
                body: {
                    comment, postId, userId
                },
                method: 'POST',
                url: '/comments'
            }),
        }),
    }),
})

export const {useAddArticleDetailsCommentMutation} = addArticleDetailsComment;