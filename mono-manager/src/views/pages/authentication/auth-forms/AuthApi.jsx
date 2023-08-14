import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_URL } from 'config';

export const AuthApi = createApi({
    reducerPath: 'LoginAuthApi',
    baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
    endpoints: (builder) => ({
        Login: builder.mutation({
            query: (data) => ({
                url: '/api/login',
                method: 'POST',
                body: data
            })
        })
    })
});

export const { useLoginMutation } = AuthApi;
