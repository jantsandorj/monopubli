import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';

export const UserApi = createApi({
    reducerPath: 'UserApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['Users'],
    endpoints: (build) => ({
        getUser: build.query({
            query: () => `${URL.USER_LIST}`,
            providesTags: ['LIST']
        })
    })
});

export const { useGetUserQuery } = UserApi;
