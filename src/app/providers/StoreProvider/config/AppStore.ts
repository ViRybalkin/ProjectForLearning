import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {authByUserNameReducer} from "features";
import {userReducer} from "entities"
import {AppStoreTypes} from "./AppStore.types";

export const createReduxStore = (preloadedState?: AppStoreTypes) => {
  const rootReducers: ReducersMapObject<AppStoreTypes> = {
    user: userReducer,
    login: authByUserNameReducer,
  }
  return configureStore({
    reducer: rootReducers,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    }),
  })
}
