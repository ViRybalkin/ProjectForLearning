import {ArticleDetailsReducerType, ProfileTypes, UserSliceTypes} from "entities";
import {AddCommentFormSliceTypes, AuthByUserNameTypes} from "features";
import {CombinedState, Reducer, ReducersMapObject} from "redux";
import {AnyAction, EnhancedStore} from "@reduxjs/toolkit";
import {createReduxStore} from "app";
import {AxiosInstance} from "axios";
import {ArticleDetailsCommentTypes} from "pages/ArticlesDetailsPage/config";
import {ArticleListTypes} from "pages/ArticlesPage/config/types/articles.types";

export interface AppStoreTypes {
    user: UserSliceTypes;
    login?: AuthByUserNameTypes;
    profile?: ProfileTypes;
    articleDetails?: ArticleDetailsReducerType;
    articleDetailsComments?: ArticleDetailsCommentTypes;
    addCommentForm?: AddCommentFormSliceTypes;
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