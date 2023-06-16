import {createAsyncThunk} from "@reduxjs/toolkit";
import {handleError} from "@/shared/helpers/error";
import {addQueryParams} from "@/shared/helpers/addQueryParams";
import {ThunkConfig} from "@/app/providers/StoreProvider";
import {ArticleDetailsDataType} from "@/entities/ArticleDetails";
import {getArticleListType} from "../selectors/getArticleListType";
import {getArticleListSortField} from "../selectors/getArticleListSortField";
import {getArticleListSortDirection} from "../selectors/getArticleListSortDirection";
import {getArticleListSearch} from "../selectors/getArticleListSearch";
import {getArticleListLimit} from "../selectors/getArticleListLimit";
import {getArticleListPage} from "../selectors/getArticleListPage";
import {getArticleListProps} from "../types/articles.types";

export const getArticleList = createAsyncThunk<Array<ArticleDetailsDataType>, getArticleListProps, ThunkConfig<string>>(
    'article/getArticles',
    async (_, {extra: {api}, getState, rejectWithValue}) => {
        try {
            const limit = getArticleListLimit(getState());
            const type = getArticleListType(getState());
            const search = getArticleListSearch(getState());
            const sortDirection = getArticleListSortDirection(getState());
            const sortField = getArticleListSortField(getState());
            const page = getArticleListPage(getState());

            addQueryParams({search, sortDirection, sortField, type})


            const {data} = await api.get('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _order: sortDirection,
                    _page: page,
                    _sort: sortField,
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