import React, { useLayoutEffect } from 'react';
import { useStore } from 'react-redux';
import { StoreWithReducerManager } from 'app';
import { DynamicComponentProps, ReduceArray } from './DynamicComponent.types';

const DynamicComponent = ({ reducers, children, shouldRemoveAfterUnmount = false }: DynamicComponentProps) => {
  const store = useStore() as StoreWithReducerManager;

  useLayoutEffect(() => {
    Object.entries(reducers).forEach(([key, reduce]: ReduceArray) => {
      store.reducerManager.add(key, reduce);

      if (shouldRemoveAfterUnmount) {
        return () => {
          store.reducerManager.remove(key);
        };
      }
    });
  }, []);

  return <div>{children}</div>;
};

export { DynamicComponent };
