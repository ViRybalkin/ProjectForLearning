import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app";
import {
    ArticleListAction,
    getArticleList,
    getArticleListHasMore,
    getArticleListIsLoading,
    getArticleListPage
} from "../../config";

export const getPaginatedArticleListService = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'article/getPaginatedArticleListService',
    async (_, {getState, dispatch}) => {
        const page = getArticleListPage(getState());
        const hasMore = getArticleListHasMore(getState());
        const isLoading = getArticleListIsLoading(getState());

        if (!isLoading && hasMore && page) {
            dispatch(ArticleListAction.setPage(page + 1));
            dispatch(getArticleList(page + 1))
        }

    }
)