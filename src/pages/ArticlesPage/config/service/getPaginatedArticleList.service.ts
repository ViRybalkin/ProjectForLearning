import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "@/app/providers/StoreProvider";
import {ArticleListAction} from "../../config/slice/articlesSlice";
import {getArticleList} from "../../config/service/getArticles.service";
import {getArticleListIsLoading,} from "../selectors/getArticleListIsLoading";
import {getArticleListHasMore,} from "../selectors/getArticleListHasMore";
import {getArticleListPage} from "../selectors/getArticleListPage";

export const getPaginatedArticleListService = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'article/getPaginatedArticleListService',
    async (_, {dispatch, getState}) => {
        const page = getArticleListPage(getState());
        const hasMore = getArticleListHasMore(getState());
        const isLoading = getArticleListIsLoading(getState());

        if (!isLoading && hasMore && page) {
            dispatch(ArticleListAction.setPage(page + 1));
            dispatch(getArticleList({}))
        }

    }
)