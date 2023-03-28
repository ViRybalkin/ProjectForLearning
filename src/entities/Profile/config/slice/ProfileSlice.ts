import {createSlice} from '@reduxjs/toolkit';
import {updateProfile} from "entities";
import {getProfile} from "../service/getProfile/Profile.service";
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
  reducers: {
    setReadonly(state: ProfileTypes) {
      state.readonly = !state.readonly
    },
    onCancel(state: ProfileTypes) {
      state.readonly = !state.readonly;
      state.error = undefined;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
        state.error = ''
      })
      .addCase(getProfile.fulfilled, (state,action) => {
        state.isLoading = false;
        state.error = '';
        state.data = action.payload;
        state.readonly = true;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
        state.error = ''
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload
        state.readonly = true
      })
  }
});

export const ProfileAction = ProfileSlice.actions;
export const { reducer: ProfileReducer } = ProfileSlice;
