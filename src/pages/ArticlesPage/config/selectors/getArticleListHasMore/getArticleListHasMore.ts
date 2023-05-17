import {AppStoreTypes} from "app/providers/StoreProvider";

export const getArticleListHasMore = (state: AppStoreTypes) => state.articleList?.hasMore;