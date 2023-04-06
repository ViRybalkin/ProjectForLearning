import {createAsyncThunk} from "@reduxjs/toolkit";
import {ArticleDetailsDataType} from "entities";
import {ThunkConfig} from "app";
import {handleError} from "shared/config/helpers/error";

export const getArticleDetails = createAsyncThunk<ArticleDetailsDataType, string, ThunkConfig<string>>(
  'articleDetails/articleThunk',
  async (payload, {extra: {api}, rejectWithValue}) => {
    try {
      const {data} = await api.get<ArticleDetailsDataType>(`/articles/${payload}`)


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