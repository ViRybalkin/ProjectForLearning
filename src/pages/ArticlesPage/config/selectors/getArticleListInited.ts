import {AppStoreTypes} from "@/app/providers/StoreProvider";

export const getArticleListInited = (state: AppStoreTypes) => state.articleList?._inited;