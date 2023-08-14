import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';

export const SystemSettingApi = createApi({
    reducerPath: 'SystemSettingApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['SystemSetting'],
    endpoints: (build) => ({
        getSystemSetting: build.query({
            query: () => `${URL.SYSTEM_SETTING}`,
            providesTags: ['LIST']
        }),
        updateSystemSetting: build.mutation({
            query: (body) => ({
                url: `${URL.SYSTEM_SETTING_UPDATE}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        })
    })
});

export const { useGetSystemSettingQuery, useUpdateSystemSettingMutation } = SystemSettingApi;
