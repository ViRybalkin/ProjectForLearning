import {AppStoreTypes} from "app/providers/StoreProvider";

export const getProfileData = (state: AppStoreTypes) => state?.profile?.data;