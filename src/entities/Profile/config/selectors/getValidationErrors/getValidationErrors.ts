import {AppStoreTypes} from "app";

export const getValidationErrors = (state: AppStoreTypes) => state?.profile?.validationError;