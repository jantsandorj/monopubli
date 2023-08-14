import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';


export const QnaApi = createApi({
    reducerPath: 'QnaApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['Qnas'],
    endpoints: (build) => ({
        getQnas: build.query({
            query: (params) => `${URL.QNA_LIST}?${params}`,
            providesTags: ['LIST']
        }),
        getQna: build.query({
            query: (params) => `${URL.QNA_DETAIL}/${params}`,
            providesTags: ['LIST']
        }),
        createQna: build.mutation({
            query: (body) => ({
                url: `${URL.QNA_CREATE}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        }),
        updateQna: build.mutation({
            query: (body) => ({
                url: `${URL.QNA_UPDATE}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        }),
        deleteQna: build.mutation({
            query: (body) => ({
                url: `${URL.QNA_DELETE}/${body}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        })
    })
});

    export const { useGetQnasQuery, useCreateQnaMutation, useUpdateQnaMutation, useDeleteQnaMutation, useGetQnaQuery } =
    QnaApi;