import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {authByUserNameThunk} from "../services/LoginByUserName.service";
import {AuthByUserNameTypes} from '../types/AuthByUserName.types';

const initialState: AuthByUserNameTypes = {
    error: undefined,
    isLoading: false,
    password: '',
    username: '',
};

export const authByUserNameSlice = createSlice({
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
    },
    initialState,
    name: 'authByUserName',
    reducers: {
        setUserData(state: AuthByUserNameTypes, action: PayloadAction<AuthByUserNameTypes>) {
            state.username = action.payload.username;
            state.password = action.payload.password;
        },
    }
})

export const authActions = authByUserNameSlice.actions;

export const {reducer: authByUserNameReducer} = authByUserNameSlice;
