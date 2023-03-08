import { createSlice } from '@reduxjs/toolkit';
import { UserSliceTypes } from './UserSlice.types';

const initialState: UserSliceTypes = {
  username: '',
  id: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const { reducer: userReducer } = userSlice;
