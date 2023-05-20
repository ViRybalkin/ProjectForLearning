import {AppStoreTypes} from 'app/providers/StoreProvider';
import {createSelector} from '@reduxjs/toolkit';

export const getUserRoles = (state: AppStoreTypes) => state?.user.roles;

export const getIsAdmin = createSelector(getUserRoles, (roles) => roles?.includes('ADMIN'));
export const getIsManager = createSelector(getUserRoles, (roles) => roles?.includes('MANAGER'));
