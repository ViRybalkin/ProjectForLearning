import {createAsyncThunk} from "@reduxjs/toolkit";
import {UserData} from "features/AuthByUserName/config/types";
import axios from "axios";
import {UserSliceTypes} from "entities";

export const authByUserNameThunk = createAsyncThunk<UserSliceTypes, UserData>(
  'user/authByUserName',
  async (authData: UserData, thunkAPI) => {
    const response = await axios.post<UserSliceTypes>('http://localhost:8000/login', authData)
    return response.data
  }
)