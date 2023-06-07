import { Reducer } from 'redux';
import { ReactNode } from 'react';
import { AppStoreKeys } from '@/app/providers/StoreProvider';

type ReducersTypes = {
  [name in AppStoreKeys]?: Reducer;
};

export type ReduceArray = [AppStoreKeys, Reducer];

export interface DynamicComponentProps {
  reducers: ReducersTypes;
  children: ReactNode;
  shouldRemoveAfterUnmount?: boolean;
}
