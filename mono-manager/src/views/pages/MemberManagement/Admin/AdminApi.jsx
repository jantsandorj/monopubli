import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';

export const AdminApi = createApi({
    reducerPath: 'AdminApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['Admins'],
    endpoints: (build) => ({
        getAdmins: build.query({
            query: (params) => `${URL.ADMIN_LIST}?${params}&searchCondition=ALL`,
            providesTags: ['LIST']
        }),
        getAdmin: build.query({
            query: (params) => `${URL.ADMIN_LIST}/${params}`,
            providesTags: ['LIST']
        }),
        createAdmin: build.mutation({
            query: (body) => ({
                url: `${URL.ADMIN_CREATE}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        }),
        updateAdmin: build.mutation({
            query: (body) => ({
                url: `${URL.ADMIN_UPDATE}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        }),
        deleteAdmin: build.mutation({
            query: (body) => ({
                url: `${URL.ADMIN_DELETE}/${body}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        }),
        checkDuplicate: build.mutation({
            query: (body) => ({
                url: `${URL.ADMIN_CHECK}/${body}`,
                method: 'POST',
                body: body
            })
        }),
        adminPasswordChange: build.mutation({
            query: (formdata) => ({
                url: `${URL.ADMIN_PASSWORD_CHANGE}`,
                method: 'POST',
                body: formdata
            })
        }),
        getAdminRole: build.query({
            query: (params) => `${URL.ADMIN_ROLE}`,
            providesTags: ['LIST']
        })
    })
});

export const {
    useGetAdminsQuery,
    useCreateAdminMutation,
    useUpdateAdminMutation,
    useDeleteAdminMutation,
    useGetAdminQuery,
    useCheckDuplicateMutation,
    useAdminPasswordChangeMutation,
    useGetAdminRoleQuery
} = AdminApi;
