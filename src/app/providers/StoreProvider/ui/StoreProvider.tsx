import { Provider } from 'react-redux';
import { createReduxStore } from '../config/AppStore';
import { StoreProviderTypes } from './StoreProvider.types';

export const StoreProvider = ({ children, initialState }: StoreProviderTypes) => {
  const store = createReduxStore(initialState);
  return <Provider store={store}>{children}</Provider>;
};
