import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';


export const FaqApi = createApi({
    reducerPath: 'FaqApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['Faqs'],
    endpoints: (build) => ({
        getFaqs: build.query({
            query: (params) => `${URL.FAQ_BOARD_LIST}?${params}`,
            providesTags: ['LIST']
        }),
        getFaq: build.query({
            query: (params) => `${URL.FAQ_BOARD_DETAIL}/${params}`,
            providesTags: ['LIST']
        }),
        createFaq: build.mutation({
            query: (body) => ({
                url: `${URL.FAQ_BOARD_CREATE}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        }),
        updateFaq: build.mutation({
            query: (body) => ({
                url: `${URL.FAQ_BOARD_UPDATE}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        }),
        deleteFaq: build.mutation({
            query: (body) => ({
                url: `${URL.FAQ_BOARD_DELETE}/${body}`,
                method: 'DELETE',
                body: body
            }),
            invalidatesTags: ['LIST']
        })
    })
});

    export const { useGetFaqsQuery, useCreateFaqMutation, useUpdateFaqMutation, useDeleteFaqMutation, useGetFaqQuery } =
    FaqApi;