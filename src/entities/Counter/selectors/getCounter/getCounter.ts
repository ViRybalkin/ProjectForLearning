import { AppStoreTypes } from 'app/providers/StoreProvider/config/AppStore.types';

export const getCounter = (state: AppStoreTypes) => state.counter;
