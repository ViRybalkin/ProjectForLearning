import {createAsyncThunk} from "@reduxjs/toolkit";
import {ProfileDataTypes} from "entities";
import {ProfileThunkConfig} from "../types/Profile.types";

export const profileThunk = createAsyncThunk<ProfileDataTypes, void, ProfileThunkConfig>(
  'profile/profileThunk',
  async (payload , {extra: {api}, rejectWithValue}) => {
    try {
      const {data} = await api.get<ProfileDataTypes>('/profile')


      return data
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message)
    }
  }
)