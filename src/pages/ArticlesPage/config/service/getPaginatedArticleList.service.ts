import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {ArticleListAction} from "../../config/slice/articlesSlice";
import {getArticleList} from "../../config/service/getArticles.service";
import {getArticleListIsLoading,} from "../../config/selectors/getArticleListIsLoading/getArticleListIsLoading";
import {getArticleListHasMore,} from "../../config/selectors/getArticleListHasMore/getArticleListHasMore";
import {getArticleListPage} from "../../config/selectors/getArticleListPage/getArticleListPage";

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
            dispatch(getArticleList({}))
        }

    }
)