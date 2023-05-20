import {AppStoreTypes} from "app/providers/StoreProvider";

export const getArticleListSearch = (state: AppStoreTypes) => state.articleList?.search;