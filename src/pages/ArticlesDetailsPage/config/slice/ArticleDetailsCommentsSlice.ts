import {createEntityAdapter, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Comment} from "entities";
import {AppStoreTypes} from "app";
import {ArticleDetailsCommentTypes} from '../types/ArticleDetailsComment.types';
import {getCommentsByArticleId} from "../service/ArticleDetailsComments.service";

const commentAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
})

export const commentSelector = commentAdapter.getSelectors<AppStoreTypes>(
  (state) => state.articleDetailsComments || commentAdapter.getInitialState()
)


export const ArticleDetailsCommentsSlice = createSlice({
  name: 'articleComments',
  initialState: commentAdapter.getInitialState<ArticleDetailsCommentTypes>({
    isLoading: false,
    error: '',
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCommentsByArticleId.pending, (state) => {
        state.isLoading = true;
        state.error = undefined
      })
      .addCase(getCommentsByArticleId.fulfilled, (state, action: PayloadAction<Array<Comment>>) => {
        state.isLoading = false;
        commentAdapter.setAll(state, action.payload);
      })
      .addCase(getCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
  }
});

export const ArticleDetailsCommentsAction = ArticleDetailsCommentsSlice.actions;
export const {reducer: ArticleDetailsCommentsReducer} = ArticleDetailsCommentsSlice;
