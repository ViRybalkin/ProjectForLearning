import {createSelector} from '@reduxjs/toolkit';
import {AppStoreTypes} from '@/app/providers/StoreProvider';

export const getUserRoles = (state: AppStoreTypes) => state?.user.roles;

export const getIsAdmin = createSelector(getUserRoles, (roles) => roles?.includes('ADMIN'));
export const getIsManager = createSelector(getUserRoles, (roles) => roles?.includes('MANAGER'));
