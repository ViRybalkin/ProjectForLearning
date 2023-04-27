import {createAsyncThunk} from "@reduxjs/toolkit";
import {userAction, UserSliceTypes} from "entities";
import {routerPath} from "shared/config/routes/Routes";
import {handleError} from "shared/config/helpers/error";
import {ThunkConfig} from "app";
import {UserData} from "../types";

export const authByUserNameThunk = createAsyncThunk<UserSliceTypes, UserData, ThunkConfig<string>>(
    'login/authByUserName',
    async (authData: UserData, {extra: {api, navigate}, rejectWithValue, dispatch}) => {
        try {
            const {data} = await api.post<UserSliceTypes>('/login', authData)

            dispatch(userAction.setUserData({
                isAuth: true,
                username: data.username,
                id: data.id,
            }))
            localStorage.setItem('auth', JSON.stringify({username: data.username, id: data.id}))
            if (navigate) {
                navigate(`${routerPath.profile}${data.id}`)
            }

            return data
        } catch (error) {

            const {data} = handleError(error)

            return rejectWithValue(data.message)
        }
    }
)