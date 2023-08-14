import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from '../index';
import { URL } from 'store/urls';

export const AuthApi = createApi({
    reducerPath: 'AuthApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['Auth'],
    endpoints: (build) => ({
        login: build.mutation({
            query: (data) => ({
                url: URL.LOGIN,
                method: 'POST',
                body: data
            }),
            invalidatesTags : ['INFO']
        })
    })
});

export const { useLoginMutation} =
    AuthApi;
