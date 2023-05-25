import {createAsyncThunk} from "@reduxjs/toolkit";
import {handleError} from "@/shared/config/helpers/error";
import {ThunkConfig} from "@/app/providers/StoreProvider";
import {ProfileDataTypes} from "../../types/Profile.types";

export const getProfile = createAsyncThunk<ProfileDataTypes, string, ThunkConfig<string>>(
    'profile/profileThunk',
    async (profileId, {extra: {api}, rejectWithValue}) => {
        try {
            const {data} = await api.get<ProfileDataTypes>(`/profile/${profileId}`)


            return data
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            }

            const {data} = handleError(error);

            return rejectWithValue(data.message)
        }
    }
)