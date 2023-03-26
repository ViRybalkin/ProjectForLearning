import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {userReducer} from "entities"
import {$api} from "shared/config/api/api";
import {NavigateFunction} from "react-router/dist/lib/hooks";
import {CombinedState, Reducer} from "redux";
import {createReducerManager} from "./ReducerManager";
import {AppStoreTypes, ThunkExtraArgumentsTypes} from "./AppStore.types";

export const createReduxStore = (navigate: NavigateFunction,preloadedState?: AppStoreTypes) => {
  const rootReducers: ReducersMapObject<AppStoreTypes> = {
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const extraArgs: ThunkExtraArgumentsTypes = {
    api: $api,
    navigate
  }

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<AppStoreTypes>>,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument: extraArgs
      }
    }),
  })

  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}
