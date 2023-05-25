import {createAsyncThunk} from "@reduxjs/toolkit";
import {userAction, UserSliceTypes} from "@/entities/User";
import {handleError} from "@/shared/config/helpers/error";
import {ThunkConfig} from "@/app/providers/StoreProvider";
import {LOCAL_STORAGE_KEY} from "@/shared/constants/localStorageKey";
import {UserData} from "../types/AuthByUserName.types";

export const authByUserNameThunk = createAsyncThunk<UserSliceTypes, UserData, ThunkConfig<string>>(
    'login/authByUserName',
    async (authData: UserData, {extra: {api}, rejectWithValue, dispatch}) => {
        try {
            const {data} = await api.post<UserSliceTypes>('/login', authData)

            dispatch(userAction.setUserData({
                avatar: data.avatar,
                isAuth: true,
                username: data.username,
                id: data.id,
                roles: data.roles,
            }))
            localStorage.setItem(LOCAL_STORAGE_KEY.auth, JSON.stringify({
                username: data.username,
                id: data.id,
                avatar: data.avatar,
                roles: data.roles,
            }))

            return data
        } catch (error) {

            const {data} = handleError(error)

            return rejectWithValue(data.message)
        }
    }
)