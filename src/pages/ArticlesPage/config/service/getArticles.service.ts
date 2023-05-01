import {createAsyncThunk} from "@reduxjs/toolkit";
import {handleError} from "shared";
import {ThunkConfig} from "app";
import {ArticleDetailsDataType} from "entities";
import {getArticleListLimit} from "../selectors";

export const getArticleList = createAsyncThunk<Array<ArticleDetailsDataType>, number, ThunkConfig<string>>(
    'article/getArticles',
    async (pageNumber, {extra: {api}, rejectWithValue, getState}) => {
        try {
            const limit = getArticleListLimit(getState());

            const {data} = await api.get('/articles', {
                params: {
                    _expand: 'user',
                    _page: pageNumber,
                    _limit: limit,
                }
            })
            return data
        } catch (error) {
            if (error instanceof Error) {
                rejectWithValue(error.message)
            }
            const {data} = handleError(error)

            return rejectWithValue(data.message)
        }
    }
)