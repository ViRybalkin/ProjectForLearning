import React, { useLayoutEffect } from 'react';
import { useStore } from 'react-redux';
import { AppStoreKeys, StoreWithReducerManager } from '../../StoreProvider';
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
        Object.entries(reducers).forEach(([key, reducer]) => {
          store.reducerManager.remove(key as AppStoreKeys);
        });
      }
    };
  }, []);

  return <div>{children}</div>;
};
