import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';

export const ConsultingApi = createApi({
    reducerPath: 'ConsultingApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['Consultings'],
    endpoints: (build) => ({
        getConsulting: build.query({
            query: (params) => `${URL.CONSULTING_DETAIL}/${params}`,
            providesTags: ['LIST']
        }),
        createConsulting: build.mutation({
            query: (body) => ({
                url: `${URL.CONSULTING_CREATE}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        }),
        updateConsulting: build.mutation({
            query: (body) => ({
                url: `${URL.CONSULTING_UPDATE}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        }),
        deleteConsulting: build.mutation({
            query: (body) => ({
                url: `${URL.CONSULTING_DELETE}/${body}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        })
    })
});

export const { useCreateConsultingMutation, useUpdateConsultingMutation, useDeleteConsultingMutation, useGetConsultingQuery } =
    ConsultingApi;
