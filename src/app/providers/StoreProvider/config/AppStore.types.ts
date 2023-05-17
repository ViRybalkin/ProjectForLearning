import {ProfileTypes} from "entities/Profile";
import {UserSliceTypes} from "entities/User";
import {ArticleDetailsReducerType} from "entities/ArticleDetails";
import {AuthByUserNameTypes} from "features/AuthByUserName";
import {GetScrollPositionTypes} from "features/getScrollPosition";
import {CombinedState, Reducer, ReducersMapObject} from "redux";
import {AnyAction, EnhancedStore} from "@reduxjs/toolkit";
import {AxiosInstance} from "axios";
import {ArticleListTypes} from "pages/ArticlesPage/config/types/articles.types";
import {rtkApi} from "shared/config/api/rtkApi";
import {createReduxStore} from "../config/AppStore";

export interface AppStoreTypes {
    user: UserSliceTypes;
    getPosition: GetScrollPositionTypes;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,
    login?: AuthByUserNameTypes;
    profile?: ProfileTypes;
    articleDetails?: ArticleDetailsReducerType;
    articleList?: ArticleListTypes;

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

export interface ThunkExtraArgumentsTypes {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    state: AppStoreTypes;
    extra: ThunkExtraArgumentsTypes;
}

export type RootState = ReturnType<typeof createReduxStore>['getState']
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']