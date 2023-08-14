import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';

export const UserApi = createApi({
    reducerPath: 'UserApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['Users'],
    endpoints: (build) => ({
        getUsers: build.query({
            query: (params) => `${URL.USER_LIST}?${params}&searchCondition=ALL`,
            providesTags: ['LIST']
        }),
        getUser: build.query({
            query: (params) => `${URL.USER_LIST}/${params}`,
            providesTags: ['LIST']
        }),
        createUser: build.mutation({
            query: (body) => ({
                url: `${URL.USER_CREATE}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        }),
        updateUser: build.mutation({
            query: (body) => ({
                url: `${URL.USER_UPDATE}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        }),
        deleteUser: build.mutation({
            query: (body) => ({
                url: `${URL.USER_DELETE}/${body}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        }),
        checkDuplicate: build.mutation({
            query: (body) => ({
                url: `${URL.USER_CHECK}/${body}`,
                method: 'POST',
                body: body
            })
        }),
        userPasswordChange: build.mutation({
            query: (data) => ({
                url: `${URL.USER_PASSWORD_CHANGE}`,
                method: 'POST',
                body: data
            })
        })
    })
});

export const {
    useGetUsersQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
    useGetUserQuery,
    useCheckDuplicateMutation,
    useUserPasswordChangeMutation
} = UserApi;
