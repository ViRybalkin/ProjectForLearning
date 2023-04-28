import {createAsyncThunk} from "@reduxjs/toolkit";
import {handleError} from "shared/config/helpers/error";
import {ThunkConfig} from "app";
import {getArticleDetailsData} from "entities/ArticleDetails/config/selectors";
import {getUser} from "entities";
import {getCommentsByArticleId} from "pages/ArticlesDetailsPage/config/service/ArticleDetailsComments.service";

export const addCommentFormService = createAsyncThunk<string, string, ThunkConfig<string>>(
    'articleDetails/AddCommentForm',
    async (comment, {extra: {api}, rejectWithValue, getState, dispatch}) => {
        try {
            const userData = getUser(getState());
            const article = getArticleDetailsData(getState());

            if (!userData || !article) {
                rejectWithValue('no data')
            }
            const {data} = await api.post(`/comments`, {
                postId: article?.id,
                userId: userData?.id,
                comment,
            })

            if (article?.id) {
                dispatch(getCommentsByArticleId(article?.id))
            }
            return data
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            }

            const {data} = handleError(error);

            return rejectWithValue(data.message)
        }
    }
)