import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {userReducer} from "entities"
import {CombinedState, Reducer} from "redux";
import {getScrollPositionReducer} from "features";
import {rtkApi} from "shared/config/api/rtkApi";
import {$api} from "shared/config/api/api";
import {createReducerManager} from "./ReducerManager";
import {AppStoreTypes, ThunkExtraArgumentsTypes} from "./AppStore.types";

export const createReduxStore = (preloadedState?: AppStoreTypes) => {
    const rootReducers: ReducersMapObject<AppStoreTypes> = {
        user: userReducer,
        getPosition: getScrollPositionReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
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
        }).concat(rtkApi.middleware),
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}
