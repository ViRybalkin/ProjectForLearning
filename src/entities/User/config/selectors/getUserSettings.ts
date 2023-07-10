import {createSelector} from '@reduxjs/toolkit';
import {UserSliceTypes} from '../types/UserSlice.types';
import {getUser} from './getUser';

export const getUserSettings = createSelector(getUser, (state: UserSliceTypes) => state?.userSettings);
