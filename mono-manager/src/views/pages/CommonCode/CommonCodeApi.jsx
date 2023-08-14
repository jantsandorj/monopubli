import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';

export const CommonCodeApi = createApi({
    reducerPath: 'CommonCodeApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['CommonCodes'],
    endpoints: (build) => ({
        getCommonCodes: build.query({
            query: (params) => `${URL.COMMONCODE_LIST}?${params}`,
            providesTags: ['LIST']
        }),
        getCommonCode: build.query({
            query: (params) => `${URL.COMMONCODE_LIST}/${params}`,
            providesTags: ['LIST']
        }),

        getCommonGroupCode: build.query({
            query: (params) => `${URL.COMMONCODE_GROUPLIST}`,
            providesTags: ['LIST']
        }),

        createCommonCode: build.mutation({
            query: (body) => ({
                url: `${URL.COMMONCODE_CREATE}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        }),
        updateCommonCode: build.mutation({
            query: (body) => ({
                url: `${URL.COMMONCODE_UPDATE}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        }),
        deleteCommonCode: build.mutation({
            query: (body) => ({
                url: `${URL.COMMONCODE_DELETE}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        })
    })
});

export const {
    useGetCommonCodesQuery,
    useGetCommonGroupCodeQuery,
    useCreateCommonCodeMutation,
    useUpdateCommonCodeMutation,
    useDeleteCommonCodeMutation,
    useGetCommonCodeQuery
} = CommonCodeApi;
