import {configureStore} from '@reduxjs/toolkit'
import counterReducer from "../../../../entities/Counter/config/CounterSlice"
import {AppStoreTypes} from "./AppStore.types";

export const createReduxStore = (preloadedState?: AppStoreTypes) => {
  return configureStore({
    reducer: {
      counter: counterReducer
    },
    preloadedState,
  })
}
