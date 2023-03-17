import {createSlice} from '@reduxjs/toolkit';
import {profileThunk} from "entities";
import {ProfileTypes} from '../types/Profile.types'

const initialState: ProfileTypes = {
  data: undefined,
  error: undefined,
  isLoading: false,
  readonly: true,
};

export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(profileThunk.pending, (state) => {
        state.isLoading = true;
        state.error = ''
      })
      .addCase(profileThunk.fulfilled, (state,action) => {
        state.isLoading = false;
        state.error = '';
        state.data = action.payload;
        state.readonly = true;
      })
      .addCase(profileThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
});

export const ProfileAction = ProfileSlice.actions;
export const { reducer: ProfileReducer } = ProfileSlice;
