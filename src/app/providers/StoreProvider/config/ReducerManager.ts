import {AnyAction, combineReducers, Reducer, ReducersMapObject,} from '@reduxjs/toolkit';
import {AppStoreKeys, AppStoreTypes, ReducerManagerTypes} from "./AppStore.types";

export function createReducerManager(initialReducers: ReducersMapObject<AppStoreTypes>): ReducerManagerTypes {
    const reducers = {...initialReducers}

    let combinedReducer = combineReducers(reducers)

    let keysToRemove: AppStoreKeys[] = []

    return {
        add: (key: AppStoreKeys, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return
            }

            reducers[key] = reducer

            combinedReducer = combineReducers(reducers)
        },

        getReducerMap: () => reducers,

        reduce: (state: AppStoreTypes, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = {...state}
                keysToRemove.forEach((key) => {
                    delete state[key]
                })
                keysToRemove = []
            }

            return combinedReducer(state, action)
        },

        remove: (key: AppStoreKeys) => {
            if (!key || !reducers[key]) {
                return
            }

            delete reducers[key]

            keysToRemove.push(key)

            combinedReducer = combineReducers(reducers)
        }
    }
}
