import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {authByUserNameThunk} from "../services/LoginByUserName.service";
import {AuthByUserNameTypes} from '../types/AuthByUserName.types';

const initialState: AuthByUserNameTypes = {
    username: '',
    password: '',
    error: undefined,
    isLoading: false,
};

export const authByUserNameSlice = createSlice({
    name: 'authByUserName',
    initialState,
    reducers: {
        setUserData(state: AuthByUserNameTypes, action: PayloadAction<AuthByUserNameTypes>) {
            state.username = action.payload.username;
            state.password = action.payload.password;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(authByUserNameThunk.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(authByUserNameThunk.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(authByUserNameThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export const authActions = authByUserNameSlice.actions;

export const {reducer: authByUserNameReducer} = authByUserNameSlice;
