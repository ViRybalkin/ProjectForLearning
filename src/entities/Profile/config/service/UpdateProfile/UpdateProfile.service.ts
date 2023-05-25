import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "@/app/providers/StoreProvider";
import {ProfileDataTypes, ValidationErrorsType} from "../../types/Profile.types";
import {validateProfile} from "../ValidationErrors/ValidationErrors.service";

export const updateProfile =
    createAsyncThunk<ProfileDataTypes, ProfileDataTypes, ThunkConfig<Array<ValidationErrorsType>>>(
        'profile/updateProfile',
        async (payload, {extra: {api}, rejectWithValue}) => {
            const validateError = validateProfile(payload)

            if (validateError.length) {
                return rejectWithValue(validateError)
            }

            try {
                const {data} = await api.put<ProfileDataTypes>(`/profile/${payload.id}`, payload)

                return data
            } catch (error) {
                return rejectWithValue(['SERVER_ERROR'])
            }
        }
    )