import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {userReducer} from "entities"
import {$api} from "shared";
import {NavigateFunction} from "react-router/dist/lib/hooks";
import {createReducerManager} from "./ReducerManager";
import {AppStoreTypes} from "./AppStore.types";


export const createReduxStore = (preloadedState?: AppStoreTypes, navigate?: NavigateFunction) => {
  const rootReducers: ReducersMapObject<AppStoreTypes> = {
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore({
    reducer: reducerManager.reduce,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument: {
          api: $api,
          navigate,
        }
      }
    }),
  })

  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}
