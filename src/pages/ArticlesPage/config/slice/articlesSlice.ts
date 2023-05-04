import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
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
        page: 1,
        limit: 9,
        ids: [],
        hasMore: false,
        entities: {},
        sortDirection: 'asc',
        sortField: 'views',
        search: '',
        type: 'all',
        _inited: false,
    }),
    reducers: {
        setArticleListView: (state, action) => {
            state.view = action.payload;
            localStorage.setItem(LOCAL_STORAGE_KEY.articleView, action.payload)
        },
        setPage: (state, action) => {
            state.page = action.payload
        },
        setSortDirection: (state, action) => {
            state.sortDirection = action.payload;
        },
        setSortField: (state, action) => {
            state.sortField = action.payload;
        },
        setSearchValue: (state, action) => {
            state.search = action.payload;
        },
        setType: (state, action) => {
            state.type = action.payload;
        },
        initArticleListView: (state) => {
            const articleListView = localStorage.getItem(LOCAL_STORAGE_KEY.articleView)
            if (articleListView) {
                state.view = articleListView as ArticleListView;
                state.limit = articleListView === 'SMALL' ? 9 : 4;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getArticleList.pending, (state) => {
                state.isLoading = true;
                state.error = undefined
            })
            .addCase(getArticleList.fulfilled, (state, action) => {
                state.isLoading = false;
                if (action.meta.arg.replace) {
                    articleListAdapter.setAll(state, action.payload);

                }
                articleListAdapter.setMany(state, action.payload);
                state.hasMore = action.payload.length > 0;
                state._inited = true;
            })
            .addCase(getArticleList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
});

export const ArticleListAction = ArticleListSlice.actions;
export const {reducer: ArticleListReducer} = ArticleListSlice;
