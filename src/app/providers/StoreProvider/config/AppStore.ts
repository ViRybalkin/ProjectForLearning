import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {userReducer} from "entities"
import {$api} from "shared/config/api/api";
import {CombinedState, Reducer} from "redux";
import {createReducerManager} from "./ReducerManager";
import {AppStoreTypes, ThunkExtraArgumentsTypes} from "./AppStore.types";

export const createReduxStore = (preloadedState?: AppStoreTypes) => {
    const rootReducers: ReducersMapObject<AppStoreTypes> = {
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducers)

    const extraArgs: ThunkExtraArgumentsTypes = {
        api: $api,
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
