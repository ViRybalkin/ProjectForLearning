import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {CombinedState, Reducer} from "redux";
import {userReducer} from "@/entities/User"
import {getScrollPositionReducer} from "@/features/getScrollPosition";
import {rtkApi} from "@/shared/api/rtkApi";
import {$api} from "@/shared/api/api";
import {createReducerManager} from "./ReducerManager";
import {AppStoreTypes, ThunkExtraArgumentsTypes} from "./AppStore.types";

export const createReduxStore = (preloadedState?: AppStoreTypes) => {
    const rootReducers: ReducersMapObject<AppStoreTypes> = {
        getPosition: getScrollPositionReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducers)

    const extraArgs: ThunkExtraArgumentsTypes = {
        api: $api,
    }

    const store = configureStore({
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false,
            thunk: {
                extraArgument: extraArgs
            }
        }).concat(rtkApi.middleware),
        preloadedState,
        reducer: reducerManager.reduce as Reducer<CombinedState<AppStoreTypes>>,
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}
