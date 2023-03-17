import {createAsyncThunk} from "@reduxjs/toolkit";
import {ProfileDataTypes} from "entities";
import {handleError} from "shared/config/helpers/error";
import {ProfileThunkConfig} from "../types/Profile.types";

export const profileThunk = createAsyncThunk<ProfileDataTypes, void, ProfileThunkConfig>(
  'profile/profileThunk',
  async (payload , {extra: {api}, rejectWithValue}) => {
    try {
      const {data} = await api.get<ProfileDataTypes>('/profile')


      return data
    } catch (error) {

      const {data} = handleError(error);
      
      return rejectWithValue(data.message)
    }
  }
)