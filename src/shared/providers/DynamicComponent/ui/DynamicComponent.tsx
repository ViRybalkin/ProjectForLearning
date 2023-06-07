import React, { useLayoutEffect } from 'react';
import { useStore } from 'react-redux';
import { AppStoreKeys, StoreWithReducerManager } from '@/app/providers/StoreProvider';
import { DynamicComponentProps } from './DynamicComponent.types';

export const DynamicComponent = ({ reducers, children, shouldRemoveAfterUnmount = true }: DynamicComponentProps) => {
  const store = useStore() as StoreWithReducerManager;

  useLayoutEffect(() => {
    Object.entries(reducers).forEach(([key, reducer]) => {
      if (reducer) {
        store.reducerManager.add(key as AppStoreKeys, reducer);
      }
    });

    return () => {
      if (shouldRemoveAfterUnmount) {
        Object.entries(reducers).forEach(([key]) => {
          store.reducerManager.remove(key as AppStoreKeys);
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{children}</div>;
};
