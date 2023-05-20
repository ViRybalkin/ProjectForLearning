import {AppStoreTypes} from "app/providers/StoreProvider";

export const getArticleListView = (state: AppStoreTypes) => state.articleList?.view;