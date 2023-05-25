import {AppStoreTypes} from "@/app/providers/StoreProvider";

export const getArticleListLimit = (state: AppStoreTypes) => state.articleList?.limit;