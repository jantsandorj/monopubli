import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';

export const RoleManageApi = createApi({
    reducerPath: 'RoleManageApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['RoleManage'],
    endpoints: (build) => ({
        getRoleManageList: build.query({
            query: (params) => `${URL.ROLE_MANAGE_LIST}?${params}`,
            providesTags: ['LIST']
        }),
        getRoleManage: build.query({
            query: (params) => `${URL.ROLE_MANAGE_LIST}/${params}`,
            providesTags: ['LIST']
        }),
        getMenuRole: build.query({
            query: (params) => `${URL.MENU_ROLE_LIST}/${params}`,
            providesTags: ['LIST']
        }),
        updateMenuManage: build.mutation({
            query: (body) => ({
                url: `${URL.MENU_ROLE_CREATE}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        }),
        updateRoleManage: build.mutation({
            query: (body) => ({
                url: `${URL.ROLE_MANAGE_UPDATE}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        }),
        createRoleManage: build.mutation({
            query: (body) => ({
                url: `${URL.ROLE_MANAGE_CREATE}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        }),
        deleteRoleManage: build.mutation({
            query: (body) => ({
                url: `${URL.ROLE_MANAGE_CREATE}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        })
    })
});

export const {
    useGetRoleManageListQuery,
    useGetRoleManageQuery,
    useGetMenuRoleQuery,
    useUpdateMenuManageMutation,
    useUpdateRoleManageMutation,
    useCreateRoleManageMutation,
    useDeleteRoleManageMutation
} = RoleManageApi;
