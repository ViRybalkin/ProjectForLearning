import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSliceTypes } from './UserSlice.types';

const initialState: UserSliceTypes = {
  username: '',
  id: '',
  isAuth: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state: UserSliceTypes, action: PayloadAction<UserSliceTypes>) {
      state.username = action.payload.username;
      state.id = action.payload.id;
      state.isAuth = action.payload.isAuth;
    },
    initUserData(state: UserSliceTypes) {
      const data = localStorage.getItem('auth');
      if (data) {
        const authData: UserSliceTypes = JSON.parse(data);
        state.username = authData.username;
        state.id = authData.id;
        state.isAuth = true;
      }
    },
    logout(state: UserSliceTypes) {
      state.username = '';
      state.id = '';
      state.isAuth = false;

      localStorage.removeItem('auth');
    },
  },
});

export const userAction = userSlice.actions;
export const { reducer: userReducer } = userSlice;
