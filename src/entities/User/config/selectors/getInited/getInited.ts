import {createSelector} from '@reduxjs/toolkit';
import {UserSliceTypes} from '../../types/UserSlice.types';
import {getUser} from '../getUser/getUser';

export const getInited = createSelector(getUser, (state: UserSliceTypes) => state?._inited);
