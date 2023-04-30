import {createEntityAdapter, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ArticleDetailsDataType, ArticleListView} from "entities";
import {AppStoreTypes} from "app";
import {LOCAL_STORAGE_KEY} from "shared";
import {getArticleList} from "../service/getArticles.service";
import {ArticleListTypes} from "../types/articles.types";

const articleListAdapter = createEntityAdapter<ArticleDetailsDataType>({
    selectId: (article) => article.id,
})

export const articleListSelector = articleListAdapter.getSelectors<AppStoreTypes>(
    (state) => state.articleList || articleListAdapter.getInitialState()
)

export const ArticleListSlice = createSlice({
    name: 'articleComments',
    initialState: articleListAdapter.getInitialState<ArticleListTypes>({
        isLoading: false,
        error: '',
        view: 'SMALL',
        ids: [],
        entities: {},
    }),
    reducers: {
        setArticleListView: (state, action) => {
            state.view = action.payload;
            localStorage.setItem(LOCAL_STORAGE_KEY.articleView, action.payload)
        },
        initArticleListView: (state) => {
            const articleListView = localStorage.getItem(LOCAL_STORAGE_KEY.articleView)
            if (articleListView) {
                state.view = articleListView as ArticleListView;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getArticleList.pending, (state) => {
                state.isLoading = true;
                state.error = undefined
            })
            .addCase(getArticleList.fulfilled, (state, action: PayloadAction<Array<ArticleDetailsDataType>>) => {
                state.isLoading = false;
                articleListAdapter.setAll(state, action.payload);
            })
            .addCase(getArticleList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
});

export const ArticleListAction = ArticleListSlice.actions;
export const {reducer: ArticleListReducer} = ArticleListSlice;
