import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {authByUserNameReducer} from "features";
import {counterReducer, userReducer} from "../../../../entities"
import {AppStoreTypes} from "./AppStore.types";

export const createReduxStore = (preloadedState?: AppStoreTypes) => {
  const rootReducers: ReducersMapObject<AppStoreTypes> = {
    counter: counterReducer,
    user: userReducer,
    login: authByUserNameReducer,
  }
  return configureStore({
    reducer: rootReducers,
    preloadedState,
  })
}
