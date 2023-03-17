import React from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '../config';
import { StoreProviderTypes } from './StoreProvider.types';

const StoreProvider = ({ children, initialState }: StoreProviderTypes) => {
  const navigate = useNavigate();
  const store = createReduxStore(navigate, initialState);
  return <Provider store={store}>{children}</Provider>;
};

export { StoreProvider };
