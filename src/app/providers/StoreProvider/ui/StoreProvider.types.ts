import { ReactNode } from 'react';
import { AppStoreTypes } from '../config/AppStore.types';

export interface StoreProviderTypes {
  children: ReactNode;
  initialState?: AppStoreTypes;
}
