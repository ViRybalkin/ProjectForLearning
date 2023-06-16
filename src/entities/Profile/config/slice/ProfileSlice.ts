import {createSlice} from '@reduxjs/toolkit';
import {updateProfile} from "../service/UpdateProfile/UpdateProfile.service";
import {getProfile} from "../service/GetProfile/Profile.service";
import {ProfileTypes} from '../types/Profile.types'

const initialState: ProfileTypes = {
    data: undefined,
    error: undefined,
    isLoading: false,
    readonly: true,
    validationError: undefined,
};

export const ProfileSlice = createSlice({
    extraReducers: (builder) => {
        builder
            .addCase(getProfile.pending, (state) => {
                state.isLoading = true;
                state.error = undefined
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.readonly = true;
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateProfile.pending, (state) => {
                state.isLoading = true;
                state.validationError = undefined
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.validationError = action.payload;
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload
                state.readonly = true
                state.validationError = undefined
            })
    },
    initialState,
    name: 'profile',
    reducers: {
        onCancel(state: ProfileTypes) {
            state.readonly = !state.readonly;
            state.error = undefined;
        },
        setReadonly(state: ProfileTypes) {
            state.readonly = !state.readonly
        }
    }
});

export const ProfileAction = ProfileSlice.actions;
export const {reducer: ProfileReducer} = ProfileSlice;
