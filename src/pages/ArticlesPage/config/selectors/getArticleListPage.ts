import {AppStoreTypes} from "app/providers/StoreProvider";

export const getArticleListPage = (state: AppStoreTypes) => state.articleList?.page;