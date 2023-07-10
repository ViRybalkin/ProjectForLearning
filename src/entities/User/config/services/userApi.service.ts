import {rtkApi} from '@/shared/api/rtkApi';
import {UserSliceTypes} from '../types/UserSlice.types';
import {UserApiTypes} from "../types/UserApi.types";

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
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
