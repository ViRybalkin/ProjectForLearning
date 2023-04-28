import {createSlice} from '@reduxjs/toolkit';
import {AddCommentFormSliceTypes} from "../types/AddCommentForm.types";

const initialState: AddCommentFormSliceTypes = {
    error: undefined,
};

export const AddCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {},
});

export const ArticleDetailsAction = AddCommentFormSlice.actions;
export const {reducer: ArticleDetailsReducer} = AddCommentFormSlice;
