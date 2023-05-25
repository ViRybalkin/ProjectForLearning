import {AppStoreTypes} from "@/app/providers/StoreProvider";

export const getArticleListSortField = (state: AppStoreTypes) => state.articleList?.sortField;