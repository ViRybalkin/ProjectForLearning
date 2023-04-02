import { createSelector } from '@reduxjs/toolkit';
import { UserSliceTypes } from 'entities';
import { getUser } from '../getUser';

export const getInited = createSelector(getUser, (state: UserSliceTypes) => state?._inited);
