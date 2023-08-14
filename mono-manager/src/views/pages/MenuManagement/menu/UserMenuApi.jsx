import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';

export const UserMenuApi = createApi({
    reducerPath: 'UserMenuApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['UserMenus'],
    endpoints: (build) => ({
        getUserMenus: build.query({
            query: (params) => `${URL.USER_MENU_LIST}/${params}`,
            providesTags: ['LIST']
        }),
        getUserMenu: build.query({
            query: (params) => `${URL.USER_MENU_LIST}/${params}`,
            providesTags: ['LIST']
        }),
        getCodeGroup: build.query({
            query: (params) => `${URL.USER_MENU_LIST}/${params}`,
            providesTags: ['LIST']
        }),
        createUserMenu: build.mutation({
            query: (body) => ({
                url: `${URL.USER_MENU_CREATE}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        }),
        updateUserMenu: build.mutation({
            query: (body) => ({
                url: `${URL.USER_MENU_UPDATE}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        }),
        deleteUserMenu: build.mutation({
            query: (body) => ({
                url: `${URL.USER_MENU_DELETE}/${body}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        }),
        checkDuplicate: build.mutation({
            query: (body) => ({
                url: `${URL.USER_MENU_CHECK}/${body}`,
                method: 'POST',
                body: body
            })
        })
    })
});

export const {
    useGetUserMenusQuery,
    useCreateUserMenuMutation,
    useUpdateUserMenuMutation,
    useDeleteUserMenuMutation,
    useGetUserMenuQuery,
    useCheckDuplicateMutation
} = UserMenuApi;
