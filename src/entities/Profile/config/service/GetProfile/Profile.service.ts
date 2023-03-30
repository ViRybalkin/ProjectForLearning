import {createAsyncThunk} from "@reduxjs/toolkit";
import {ProfileDataTypes} from "entities";
import {handleError} from "shared/config/helpers/error";
import {ProfileThunkConfig} from "../../types/Profile.types";

export const getProfile = createAsyncThunk<ProfileDataTypes, void, ProfileThunkConfig<string>>(
  'profile/profileThunk',
  async (payload , {extra: {api}, rejectWithValue}) => {
    try {
      const {data} = await api.get<ProfileDataTypes>('/profile')


      return data
    } catch (error) {
      if(error instanceof Error) {
        return rejectWithValue(error.message)
      }

      const {data} = handleError(error);
      
      return rejectWithValue(data.message)
    }
  }
)