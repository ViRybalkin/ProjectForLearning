import {createSlice} from '@reduxjs/toolkit';
import {authByUserNameThunk} from "features/AuthByUserName/config/sercives";
import {AuthByUserNameTypes} from '../types';

const initialState: AuthByUserNameTypes = {
  username: '',
  password: '',
  error: '',
  isLoading: false,
};

export const authByUserNameSlice = createSlice({
  name: 'authByUserName',
  initialState,
  reducers: {
    setUserName(state: AuthByUserNameTypes, action) {
      state.username = action.payload;
    },
    setPassword(state: AuthByUserNameTypes, action) {
      state.password = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authByUserNameThunk.fulfilled, (state, action) => {
      console.log(state)
    })
  }
})

export const authActions = authByUserNameSlice.actions;

export const {reducer: authByUserNameReducer} = authByUserNameSlice;
