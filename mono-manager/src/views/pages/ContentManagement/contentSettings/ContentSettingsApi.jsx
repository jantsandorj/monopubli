import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';

export const ContentSettingsApi = createApi({
    reducerPath: 'ContentSettingsApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['ContentSettings'],
    endpoints: (build) => ({
        getContentSettings: build.query({
            query: (params) => `${URL.CONTENT_SETTINGS_LIST}?${params}`,
            providesTags: ['LIST']
        }),
        getContentSetting: build.query({
            query: (params) => `${URL.CONTENT_SETTINGS_DETAIL}/${params}`,
            providesTags: ['LIST']
        }),
        createContentSettings: build.mutation({
            query: (body) => ({
                url: `${URL.CONTENT_SETTINGS_CREATE}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        }),
        updateContentSettings: build.mutation({
            query: (body) => ({
                url: `${URL.CONTENT_SETTINGS_UPDATE}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        }),
        deleteContentSettings: build.mutation({
            query: (body) => ({
                url: `${URL.CONTENT_SETTINGS_DELETE}/${body}`,
                method: 'DELETE',
                body: body
            }),
            invalidatesTags: ['LIST']
        })
    })
});

export const {
    useGetContentSettingsQuery,
    useGetContentSettingQuery,
    useCreateContentSettingsMutation,
    useUpdateContentSettingsMutation,
    useDeleteContentSettingsMutation
} = ContentSettingsApi;
