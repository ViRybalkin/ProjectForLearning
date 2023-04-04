import {createSlice} from '@reduxjs/toolkit';
import {getArticleDetails} from "../service";
import {ArticleDetailsReducerType} from "../types/article.types";

const initialState: ArticleDetailsReducerType = {
  data: undefined,
  error: undefined,
  isLoading: false,
};

export const ArticleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArticleDetails.pending, (state) => {
        state.isLoading = true;
        state.error = undefined
      })
      .addCase(getArticleDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getArticleDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
});

export const ArticleDetailsAction = ArticleDetailsSlice.actions;
export const {reducer: ArticleDetailsReducer} = ArticleDetailsSlice;
