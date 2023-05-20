import {AppStoreTypes} from "app/providers/StoreProvider";

export const getArticleListError = (state: AppStoreTypes) => state.articleList?.error;