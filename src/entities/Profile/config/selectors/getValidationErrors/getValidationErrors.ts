import {AppStoreTypes} from 'app/providers/StoreProvider';

export const getValidationErrors = (state: AppStoreTypes) => state?.profile?.validationError;