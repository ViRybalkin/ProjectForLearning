import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {userAction, UserSliceTypes} from "entities";
import {UserData} from "../types";

export const authByUserNameThunk = createAsyncThunk<UserSliceTypes, UserData,
  { rejectValue: string }>(
  'user/authByUserName',
  async (authData: UserData, thunkAPI) => {
    try {
      const {data} = await axios.post<UserSliceTypes>('http://localhost:8000/login', authData)

      thunkAPI.dispatch(userAction.setUserData({
        isAuth: true,
        username: data.username,
        id: data.id,
      }))

      localStorage.setItem('auth', JSON.stringify({username: data.username, id: data.id}))

      return data


    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.message)
    }
  }
)