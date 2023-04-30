import {createAsyncThunk} from "@reduxjs/toolkit";
import {handleError} from "shared";
import {ThunkConfig} from "app";
import {ArticleDetailsDataType} from "entities";

export const getArticleList = createAsyncThunk<Array<ArticleDetailsDataType>, void, ThunkConfig<string>>(
    'article/getArticles',
    async (arg, {extra: {api}, rejectWithValue}) => {
        try {
            const {data} = await api.get('/articles', {
                params: {
                    _expand: 'user'
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