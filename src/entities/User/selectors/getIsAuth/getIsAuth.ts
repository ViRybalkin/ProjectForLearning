import { createSelector } from '@reduxjs/toolkit';
import { UserSliceTypes } from 'entities';
import { getUser } from '../getUser';

export const getIsAuth = createSelector(getUser, (state: UserSliceTypes) => state?.isAuth);
