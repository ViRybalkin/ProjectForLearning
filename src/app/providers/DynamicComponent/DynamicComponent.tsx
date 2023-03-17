import React, { useLayoutEffect } from 'react';
import { useStore } from 'react-redux';
import { AppStoreKeys, StoreWithReducerManager } from 'app';
import { DynamicComponentProps } from './DynamicComponent.types';

const DynamicComponent = ({ reducers, children, shouldRemoveAfterUnmount = false }: DynamicComponentProps) => {
  const store = useStore() as StoreWithReducerManager;

  useLayoutEffect(() => {
    Object.entries(reducers).forEach(([key, reduce]) => {
      store.reducerManager.add(key as AppStoreKeys, reduce);

      if (shouldRemoveAfterUnmount) {
        return () => {
          store.reducerManager.remove(key as AppStoreKeys);
        };
      }
    });
  }, []);

  return <div>{children}</div>;
};

export { DynamicComponent };
