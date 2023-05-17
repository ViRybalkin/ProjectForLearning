import {AppStoreTypes} from "app/providers/StoreProvider";

export const getArticleListType = (state: AppStoreTypes) => state.articleList?.type;