import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';

export const NoticeBoardApi = createApi({
    reducerPath: 'NoticeBoardApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['NoticeBoard'],
    endpoints: (build) => ({
        getNoticeBoard: build.query({
            query: (params) => `${URL.NOTICE_BOARD_LIST}?${params}`,
            providesTags: ['LIST']
        }),
        getNoticeBoardDetails: build.query({
            query: (params) => `${URL.NOTICE_BOARD_DETAIL}/${params}`,
            providesTags: ['LIST']
        }),
        createNoticeBoard: build.mutation({
            query: (body) => ({
                url: `${URL.NOTICE_BOARD_CREATE}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        }),
        updateNoticeBoard: build.mutation({
            query: (body) => ({
                url: `${URL.NOTICE_BOARD_UPDATE}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        }),
        deleteNoticeBoard: build.mutation({
            query: (body) => ({
                url: `${URL.NOTICE_BOARD_DELETE}/${body}`,
                method: 'DELETE',
                body: body
            }),
            invalidatesTags: ['LIST']
        })
    })
});

export const {
    useGetNoticeBoardQuery,
    useGetNoticeBoardDetailsQuery,
    useCreateNoticeBoardMutation,
    useUpdateNoticeBoardMutation,
    useDeleteNoticeBoardMutation
} = NoticeBoardApi;
