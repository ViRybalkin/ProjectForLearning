import {AppStoreTypes} from "@/app/providers/StoreProvider";

export const getProfileReadOnly = (state: AppStoreTypes) => state?.profile?.readonly;