import {UserSliceTypes} from "entities";
import {AuthByUserNameTypes} from "features";
import {CombinedState, Reducer, ReducersMapObject} from "redux";
import {AnyAction, EnhancedStore} from "@reduxjs/toolkit";
import {createReduxStore} from "app";

export interface AppStoreTypes {
  user: UserSliceTypes,
  login?: AuthByUserNameTypes,
}

export type AppStoreKeys = keyof AppStoreTypes

export interface ReducerManagerTypes {
  getReducerMap: () => ReducersMapObject<AppStoreTypes>;
  reduce: (state: AppStoreTypes, action: AnyAction) => CombinedState<AppStoreTypes>;
  add: (key: AppStoreKeys, reducer: Reducer) => void;
  remove: (key: AppStoreKeys) => void;
}

export interface StoreWithReducerManager extends EnhancedStore<AppStoreTypes> {
  reducerManager: ReducerManagerTypes
}

export type RootState = ReturnType<typeof createReduxStore>['getState']
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']