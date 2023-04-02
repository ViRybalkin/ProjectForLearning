import {createAsyncThunk} from "@reduxjs/toolkit";
import {ProfileDataTypes} from "entities";
import {validateProfile} from "../ValidationErrors/ValidationErrors.service";
import {ProfileThunkConfig, ValidationErrorsType} from "../../types/Profile.types";

export const updateProfile =
  createAsyncThunk<ProfileDataTypes, ProfileDataTypes, ProfileThunkConfig<Array<ValidationErrorsType>>>(
    'profile/updateProfile',
    async (payload, {extra: {api}, rejectWithValue}) => {

      const validateError = validateProfile(payload)

      if (validateError.length) {
        return rejectWithValue(validateError)
      }

      try {
        const {data} = await api.put<ProfileDataTypes>('/profile', payload)

        return data
      } catch (error) {
        return rejectWithValue(['SERVER_ERROR'])
      }
    }
  )