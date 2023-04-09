import {createAsyncThunk} from "@reduxjs/toolkit";
import {handleError} from "shared";
import {ThunkConfig} from "app";
import {Comment} from "entities";

export const getCommentsByArticleId = createAsyncThunk<Array<Comment>, string, ThunkConfig<string>>(
  'article/getCommentsByArticleId',
  async (articleId, {extra: {api}, rejectWithValue}) => {
    try {
      const {data} = await api.get<any>(`/comments`, {
        params: {
          articleId,
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