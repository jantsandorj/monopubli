import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';

export const AccountSettingsApi = createApi({
    reducerPath: 'AccountSettingsApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['AccountSettings'],

    endpoints: (build) => ({
        getAccountSettings: build.query({
            query: (seq) => `${URL.ACCOUNT_SETTINGS_DETAIL + '/' + seq}`,
            providesTags: ['LIST']
        }),
        updateAccountSettings: build.mutation({
            query: (body) => ({
                url: `${URL.ACCOUNT_SETTINGS_UPDATE}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        }),
        updateAccountSettingsImg: build.mutation({
            query: (body) => ({
                url: `${URL.ACCOUNT_SETTINGS_UPDATE_IMG}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        })
    })
});

export const { useGetAccountSettingsQuery, useUpdateAccountSettingsMutation, useUpdateAccountSettingsImgMutation } = AccountSettingsApi;
