import {rtkApi} from '@/shared/api/rtkApi';
import {UserSliceTypes} from '../types/UserSlice.types';
import {UserApiTypes} from "../types/UserApi.types";

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getAuthData: build.query<UserSliceTypes, string>({
            query: (userId) => ({
                method: 'GET',
                url: `/users/${userId}`,
            }),
        }),
        setUserSettings: build.mutation<UserSliceTypes, UserApiTypes>({
            query: ({userId, userSettings}) => ({
                body: {
                    userSettings
                },
                method: 'PATCH',
                url: `/users/${userId}`,
            }),
        }),
    }),
});

export const setUserSettingsMutation = userApi.endpoints.setUserSettings.initiate;
export const getUserDataQuery = userApi.endpoints.getAuthData.initiate;
