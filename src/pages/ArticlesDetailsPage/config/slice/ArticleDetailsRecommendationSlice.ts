import {createEntityAdapter, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ArticleDetailsDataType} from "entities";
import {AppStoreTypes} from "app";
import {ArticleDetailsRecommendationTypes} from "../types/ArticleDetailsRecommendation.types";
import {getArticleDetailsRecommendation} from "../service/ArticleDetailsRecommendation.service";

const recommendationAdapter = createEntityAdapter<ArticleDetailsDataType>({
    selectId: (comment) => comment.id,
})

export const recommendationSelector = recommendationAdapter.getSelectors<AppStoreTypes>(
    (state) => state.articleDetailsRecommendation || recommendationAdapter.getInitialState()
)


export const ArticleDetailsRecommendationSlice = createSlice({
    name: 'articleComments',
    initialState: recommendationAdapter.getInitialState<ArticleDetailsRecommendationTypes>({
        isLoading: false,
        error: '',
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getArticleDetailsRecommendation.pending, (state) => {
                state.isLoading = true;
                state.error = undefined
            })
            .addCase(
                getArticleDetailsRecommendation.fulfilled,
                (state, action: PayloadAction<Array<ArticleDetailsDataType>>) => {
                    state.isLoading = false;
                    recommendationAdapter.setAll(state, action.payload);
                })
            .addCase(getArticleDetailsRecommendation.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
});

export const ArticleDetailsRecommendationAction = ArticleDetailsRecommendationSlice.actions;
export const {reducer: ArticleDetailsRecommendationReducer} = ArticleDetailsRecommendationSlice;
