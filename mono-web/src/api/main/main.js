import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from '../index';
import { URL } from 'store/urls';

export const MainApi = createApi({
    reducerPath: 'MainApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['Mains'],
    endpoints: (build) => ({
        getMenus: build.query({
            query: () => `${URL.MENU_LIST}`,
            providesTags: ['MENU_LIST']
        }),
        getSiteInfo: build.query({
            query: () => `${URL.SITE_INFO}`,
            providesTags: ['SITE_INFO']
        }),
    })
});

export const { useGetMenusQuery, useGetSiteInfoQuery } =
    MainApi;
