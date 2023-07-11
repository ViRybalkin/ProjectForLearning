import {createAsyncThunk} from "@reduxjs/toolkit";
import {userAction, UserSliceTypes} from "@/entities/User";
import {handleError} from "@/shared/helpers/error";
import {ThunkConfig} from "@/app/providers/StoreProvider";
import {LOCAL_STORAGE_KEY} from "@/shared/constants/localStorageKey";
import {UserData} from "../types/AuthByUserName.types";

export const authByUserNameThunk = createAsyncThunk<UserSliceTypes, UserData, ThunkConfig<string>>(
    'login/authByUserName',
    async (authData: UserData, {dispatch, extra: {api}, rejectWithValue}) => {
        try {
            const {data} = await api.post<UserSliceTypes>('/login', authData)
            dispatch(userAction.setUserData({
                avatar: data.avatar,
                featureFlags: data.featureFlags,
                id: data.id,
                isAuth: true,
                roles: data.roles,
                userSettings: data.userSettings,
                username: data.username
            }))
            localStorage.setItem(LOCAL_STORAGE_KEY.auth, data.id)

            return data
        } catch (error) {

            const {data} = handleError(error)

            return rejectWithValue(data.message)
        }
    }
)