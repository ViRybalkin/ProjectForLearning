import {AppStoreTypes} from "@/app/providers/StoreProvider";

export const getError = (state: AppStoreTypes) => state?.profile?.error;