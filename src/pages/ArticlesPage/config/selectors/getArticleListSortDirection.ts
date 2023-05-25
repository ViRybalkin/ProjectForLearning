import {AppStoreTypes} from "@/app/providers/StoreProvider";

export const getArticleListSortDirection = (state: AppStoreTypes) => state.articleList?.sortDirection;