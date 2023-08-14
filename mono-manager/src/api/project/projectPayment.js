import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';

export const ProjectPaymentApi = createApi({
    reducerPath: 'ProjectPaymentApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['ProjectPayment'],
    endpoints: (build) => ({
        getProjectPayments: build.query({
            query: (params) => `${URL.PROJECT_PAYMENT_LIST}?${params}`,
            providesTags: ['LIST']
        }),
        getProjectTaxListPayments: build.query({
            query: (params) => `${URL.PROJECT_PAYMENT_TAX_LIST}?${params}`,
            providesTags: ['LIST']
        }),
        getProjectReceivableListPayments: build.query({
            query: (params) => `${URL.PROJECT_PAYMENT_RECEIVABLE_LIST}?${params}`,
            providesTags: ['LIST']
        }),
        getProjectPayment: build.query({
            query: (params) => `${URL.PROJECT_PAYMENT_DETAIL}/${params}`,
            providesTags: ['DETAIL']
        }),
        updateProjectPaymentSituation: build.mutation({
            query: (body) => ({
                url: `${URL.PROJECT_PAYMENT_SITUATION_UPDATE}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST','DETAIL']
        }),
        getProjectPaymentStatsTax: build.query({
            query: () => `${URL.PROJECT_PAYMENT_STATS_TAX}`,
            providesTags: ['STATS']
        }),
        getProjectPaymentStatsReceivable: build.query({
            query: () => `${URL.PROJECT_PAYMENT_STATS_RECEIVABLE}`,
            providesTags: ['STATS']
        })
    })
});

export const { useGetProjectPaymentsQuery, useGetProjectTaxListPaymentsQuery, useGetProjectReceivableListPaymentsQuery,
    useGetProjectPaymentQuery,
    useUpdateProjectPaymentSituationMutation,
    useGetProjectPaymentStatsTaxQuery,
    useGetProjectPaymentStatsReceivableQuery } = ProjectPaymentApi;
