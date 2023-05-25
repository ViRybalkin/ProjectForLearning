import {AppStoreTypes} from "@/app/providers/StoreProvider";

export const getArticleListIsLoading = (state: AppStoreTypes) => state.articleList?.isLoading;