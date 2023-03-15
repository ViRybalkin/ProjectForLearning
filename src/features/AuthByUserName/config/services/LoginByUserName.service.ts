import {createAsyncThunk} from "@reduxjs/toolkit";
import {userAction, UserSliceTypes} from "entities";
import {routerPath} from "shared";
import {ThunkConfigTypes, UserData} from "../types";

export const authByUserNameThunk = createAsyncThunk<UserSliceTypes, UserData, ThunkConfigTypes>(
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
      navigate(routerPath.profile)

      return data
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message)
    }
  }
)