import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';

export const DashboardInfoApi = createApi({
    reducerPath: 'DashboardInfoApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['DashboardInfo'],
    endpoints: (build) => ({
        getDashboardInfo: build.query({
            query: () => `${URL.DASHBOARD_INFO}`,
            providesTags: ['LIST']
        }),
        getDashboardNoticeBoards: build.query({
            query: () => `${URL.DASHBOARD_LATEST_NOTICE_BOARDS}`,
            providesTags: ['LIST']
        }),
        getDashboardQnaBoards: build.query({
            query: () => `${URL.DASHBOARD_LATEST_QNA_BOARDS}`,
            providesTags: ['LIST']
        })
    })
});

export const { useGetDashboardInfoQuery, useGetDashboardNoticeBoardsQuery, useGetDashboardQnaBoardsQuery } = DashboardInfoApi;
