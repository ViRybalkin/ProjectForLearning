import React, { useLayoutEffect } from 'react';
import { useStore } from 'react-redux';
import { AppStoreKeys, StoreWithReducerManager } from 'app';
import { DynamicComponentProps } from './DynamicComponent.types';

const DynamicComponent = ({ reducers, children, shouldRemoveAfterUnmount = true }: DynamicComponentProps) => {
  const store = useStore() as StoreWithReducerManager;

  useLayoutEffect(() => {
    Object.entries(reducers).forEach(([key, reducer]) => {
      store.reducerManager.add(key as AppStoreKeys, reducer);
    });

    return () => {
      if (shouldRemoveAfterUnmount) {
        Object.entries(reducers).forEach(([key, reducer]) => {
          store.reducerManager.remove(key as AppStoreKeys);
        });
      }
    };
  }, [reducers, shouldRemoveAfterUnmount, store.reducerManager]);

  return <div>{children}</div>;
};

export { DynamicComponent };
