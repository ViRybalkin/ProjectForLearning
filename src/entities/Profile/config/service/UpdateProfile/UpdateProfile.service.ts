import {createAsyncThunk} from "@reduxjs/toolkit";
import {ProfileDataTypes} from "entities";
import {handleError} from "shared/config/helpers/error";
import {ProfileThunkConfig} from "../../types/Profile.types";

export const updateProfile = createAsyncThunk<ProfileDataTypes, ProfileDataTypes, ProfileThunkConfig>(
  'profile/updateProfile',
  async (payload , {extra: {api}, rejectWithValue}) => {
    try {
      const {data} = await api.put<ProfileDataTypes>('/profile', payload)


      return data
    } catch (error) {

      const {data} = handleError(error);
      
      return rejectWithValue(data.message)
    }
  }
)