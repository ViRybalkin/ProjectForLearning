import { Reducer } from 'redux';
import { ReactNode } from 'react';
import { AppStoreKeys } from '../../StoreProvider/config/AppStore.types';

type ReducersTypes = {
  [name in AppStoreKeys]?: Reducer;
};

export type ReduceArray = [AppStoreKeys, Reducer];

export interface DynamicComponentProps {
  reducers: ReducersTypes;
  children: ReactNode;
  shouldRemoveAfterUnmount?: boolean;
}
