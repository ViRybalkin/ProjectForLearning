import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {LOCAL_STORAGE_KEY} from "shared";

export const rtkApi = createApi({
    reducerPath: 'rtkApi',
    baseQuery: fetchBaseQuery({
        baseUrl: __BASE_URL__,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(LOCAL_STORAGE_KEY.auth) || '';
            if (token) {
                headers.set('Authorization', token);
            }
            return headers;
        }
    }),
    endpoints: () => ({}),
})