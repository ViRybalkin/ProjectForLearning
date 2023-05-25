import {AppStoreTypes} from "@/app/providers/StoreProvider";

export const getIsLoading = (state: AppStoreTypes) => state?.profile?.isLoading;