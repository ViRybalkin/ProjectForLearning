import {createAsyncThunk} from "@reduxjs/toolkit";
import {addQueryParams, handleError} from "shared";
import {ThunkConfig} from "app";
import {ArticleDetailsDataType} from "entities";
import {
    getArticleListLimit,
    getArticleListPage,
    getArticleListProps,
    getArticleListSearch,
    getArticleListSortDirection,
    getArticleListSortField,
    getArticleListType
} from "../index";

export const getArticleList = createAsyncThunk<Array<ArticleDetailsDataType>, getArticleListProps, ThunkConfig<string>>(
    'article/getArticles',
    async (_, {extra: {api}, rejectWithValue, getState}) => {
        try {
            const limit = getArticleListLimit(getState());
            const type = getArticleListType(getState());
            const search = getArticleListSearch(getState());
            const sortDirection = getArticleListSortDirection(getState());
            const sortField = getArticleListSortField(getState());
            const page = getArticleListPage(getState());

            addQueryParams({sortDirection, sortField, type, search})


            const {data} = await api.get('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
                    _sort: sortField,
                    _order: sortDirection,
                    q: search?.length ? search : undefined,
                    type_like: type === 'all' ? undefined : type,
                }
            })
            return data
        } catch (error) {
            if (error instanceof Error) {
                rejectWithValue(error.message)
            }
            const {data} = handleError(error)

            return rejectWithValue(data.message)
        }
    }
)