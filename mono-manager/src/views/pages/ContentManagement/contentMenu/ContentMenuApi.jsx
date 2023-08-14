import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';

export const ContentMenuApi = createApi({
    reducerPath: 'ContentMenuApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['ContentMenu'],
    endpoints: (build) => ({
        getContentMenus: build.query({
            query: (params) => `${URL.CONTENT_MENU_LIST}?${params}`,
            providesTags: ['LIST']
        }),
        getContentMenu: build.query({
            query: (params) => `${URL.CONTENT_MENU_LIST}/${params}`,
            providesTags: ['LIST']
        }),
        createContentMenu: build.mutation({
            query: (body) => ({
                url: `${URL.CONTENT_MENU_CREATE}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        }),
        updateContentMenu: build.mutation({
            query: (body) => ({
                url: `${URL.CONTENT_MENU_UPDATE}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        }),
        deleteContentMenu: build.mutation({
            query: (body) => ({
                url: `${URL.CONTENT_MENU_DELETE}/${body}`,
                method: 'DELETE',
                body: body
            }),
            invalidatesTags: ['LIST']
        })
    })
});

export const {
    useGetContentMenusQuery,
    useGetContentMenuQuery,
    useCreateContentMenuMutation,
    useUpdateContentMenuMutation,
    useDeleteContentMenuMutation
} = ContentMenuApi;
