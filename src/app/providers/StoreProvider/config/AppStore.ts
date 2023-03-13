import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {userReducer} from "entities"
import {createReducerManager} from "./ReducerManager";
import {AppStoreTypes} from "./AppStore.types";

export const createReduxStore = (preloadedState?: AppStoreTypes) => {
  const rootReducers: ReducersMapObject<AppStoreTypes> = {
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore({
    reducer: reducerManager.reduce,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    }),
  })

  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}
