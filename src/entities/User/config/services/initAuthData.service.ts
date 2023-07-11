import {createAsyncThunk} from "@reduxjs/toolkit";
import {handleError} from "@/shared/helpers/error";
import {ThunkConfig} from "@/app/providers/StoreProvider";
import {getUserDataQuery} from "../services/userApi.service";
import {UserSliceTypes} from "../types/UserSlice.types";
import {LOCAL_STORAGE_KEY} from "@/shared/constants";

export const initAuthDataService =
    createAsyncThunk<UserSliceTypes, void, ThunkConfig<string>>(
        'initAuthDataService',
        async (_, {dispatch, rejectWithValue}) => {
            const userId = localStorage.getItem(LOCAL_STORAGE_KEY.auth);

            if (!userId) {
                return rejectWithValue('');
            }

            try {
                const id = JSON.parse(userId)
                
                return await dispatch(getUserDataQuery(id)).unwrap();
            } catch (error) {

                const {data} = handleError(error)

                return rejectWithValue(data.message)
            }
        }
    )