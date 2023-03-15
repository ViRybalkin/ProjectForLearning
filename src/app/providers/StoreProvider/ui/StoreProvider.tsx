import React from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config';
import { StoreProviderTypes } from './StoreProvider.types';

const StoreProvider = ({ children, initialState }: StoreProviderTypes) => {
  const store = createReduxStore(initialState);
  return <Provider store={store}>{children}</Provider>;
};

export { StoreProvider };
