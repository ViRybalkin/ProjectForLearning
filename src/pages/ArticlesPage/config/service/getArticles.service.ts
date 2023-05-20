import {createAsyncThunk} from "@reduxjs/toolkit";
import {handleError} from "shared/config/helpers/error";
import {addQueryParams} from "shared/config/helpers/addQueryParams";
import {ThunkConfig} from "app/providers/StoreProvider";
import {ArticleDetailsDataType} from "entities/ArticleDetails";
import {getArticleListType} from "../selectors/getArticleListType";
import {getArticleListSortField} from "../selectors/getArticleListSortField";
import {getArticleListSortDirection} from "../selectors/getArticleListSortDirection";
import {getArticleListSearch} from "../selectors/getArticleListSearch";
import {getArticleListLimit} from "../selectors/getArticleListLimit";
import {getArticleListPage} from "../selectors/getArticleListPage";
import {getArticleListProps} from "../types/articles.types";

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