import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';

export const FreeBoardApi = createApi({
    reducerPath: 'FreeBoardApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['FreeBoard'],
    endpoints: (build) => ({
        getFreeBoard: build.query({
            query: (params) => `${URL.FREE_BOARD_LIST}?${params}`,
            providesTags: ['LIST']
        }),
        getFreeBoardDetails: build.query({
            query: (params) => `${URL.FREE_BOARD_DETAIL}/${params}`,
            providesTags: ['LIST']
        }),
        createFreeBoard: build.mutation({
            query: (body) => ({
                url: `${URL.FREE_BOARD_CREATE}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        }),
        updateFreeBoard: build.mutation({
            query: (body) => ({
                url: `${URL.FREE_BOARD_UPDATE}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        }),
        deleteFreeBoard: build.mutation({
            query: (body) => ({
                url: `${URL.FREE_BOARD_DELETE}/${body}`,
                method: 'DELETE',
                body: body
            }),
            invalidatesTags: ['LIST']
        })
    })
});

export const {
    useGetFreeBoardQuery,
    useGetFreeBoardDetailsQuery,
    useCreateFreeBoardMutation,
    useUpdateFreeBoardMutation,
    useDeleteFreeBoardMutation
} = FreeBoardApi;
