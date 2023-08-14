import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';

export const ContentApi = createApi({
    reducerPath: 'ContentApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['Contents'],
    endpoints: (build) => ({
        getContents: build.query({
            query: (params) => `${URL.CONTENT_LIST}?${params}`,
            providesTags: ['LIST']
        }),
        getContentSettings: build.query({
            query: (params) => `${URL.CONTENT_SETTINGS_LIST}?${params}`,
            providesTags: ['LIST']
        }),
        createContent: build.mutation({
            query: (body) => ({
                url: `${URL.CONTENT_CREATE}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        }),
        updateContent: build.mutation({
            query: (body) => ({
                url: `${URL.CONTENT_UPDATE}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        }),
        deleteContent: build.mutation({
            query: (body) => ({
                url: `${URL.CONTENT_DELETE}/${body}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        })
    })
});

export const { useGetContentsQuery, useGetContentSettingsQuery, useCreateContentMutation, useUpdateContentMutation, useDeleteContentMutation} = ContentApi;
