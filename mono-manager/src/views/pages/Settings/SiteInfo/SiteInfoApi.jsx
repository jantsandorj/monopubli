import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';

export const SiteInfoApi = createApi({
    reducerPath: 'SiteInfoApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['SiteInfo'],
    endpoints: (build) => ({
        getSiteInfo: build.query({
            query: () => `${URL.SITE_INFO}`,
            providesTags: ['LIST']
        }),
        updateSiteInfo: build.mutation({
            query: (body) => ({
                url: `${URL.SITE_INFO_UPDATE}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        })
    })
});

export const { useGetSiteInfoQuery, useUpdateSiteInfoMutation } = SiteInfoApi;
