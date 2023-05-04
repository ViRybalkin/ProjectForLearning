import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app";
import {ArticleListAction, getArticleList, getArticleListInited} from "../../config";

export const articlePageInitialEffect = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
    'article/articlePageInitialEffect',
    async (searchParams: URLSearchParams, {getState, dispatch}) => {
        const inited = getArticleListInited(getState());
        const search = searchParams.get('search');
        const sortDirection = searchParams.get('sortDirection');
        const sortField = searchParams.get('sortField');
        const type = searchParams.get('type');

        if (search) {
            dispatch(ArticleListAction.setSearchValue(search));
        }

        if (sortDirection) {
            dispatch(ArticleListAction.setSortDirection(sortDirection));
        }

        if (sortField) {
            dispatch(ArticleListAction.setSortField(sortField));
        }

        if (type) {
            dispatch(ArticleListAction.setType(type));
        }

        if (!inited) {
            dispatch(ArticleListAction.initArticleListView());
            dispatch(getArticleList({}));
        }

    }
)