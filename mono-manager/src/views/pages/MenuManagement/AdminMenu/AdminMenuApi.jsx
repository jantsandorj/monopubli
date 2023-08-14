import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';

export const AdminMenuApi = createApi({
    reducerPath: 'AdminMenuApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['AdminMenus'],
    endpoints: (build) => ({
        getAdminMenus: build.query({
            query: (params) => `${URL.USER_MENU_LIST}/${params}`,
            providesTags: ['LIST']
        }),
        getNavMenus: build.query({
            query: (params) => `${URL.ADMIN_MENU_LIST}`,
            providesTags: ['LIST']
        }),
        getAdminMenu: build.query({
            query: (params) => `${URL.USER_MENU_LIST}/${params}`,
            providesTags: ['LIST']
        }),
        createAdminMenu: build.mutation({
            query: (body) => ({
                url: `${URL.USER_MENU_CREATE}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        }),
        deleteAdminImage: build.mutation({
            query: (params) => ({
                url: `${URL.USER_FILE_DELETE}${params}/delete`,
                method: 'POST'
            }),
            invalidatesTags: ['LIST']
        }),
        updateAdminMenu: build.mutation({
            query: (body) => ({
                url: `${URL.USER_MENU_UPDATE}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        }),
        deleteAdminMenu: build.mutation({
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
        }),
        changeMenuOrder: build.mutation({
            query: (body) => ({
                url: `${URL.MENU_ORDER_CHANGE}`,
                method: 'POST',
                body: { menuList: body }
            }),
            invalidatesTags: ['LIST']
        })
    })
});

export const {
    useGetAdminMenusQuery,
    useCreateAdminMenuMutation,
    useUpdateAdminMenuMutation,
    useDeleteAdminMenuMutation,
    useGetAdminMenuQuery,
    useCheckDuplicateMutation,
    useGetNavMenusQuery,
    useDeleteAdminImageMutation,
    useChangeMenuOrderMutation
} = AdminMenuApi;
