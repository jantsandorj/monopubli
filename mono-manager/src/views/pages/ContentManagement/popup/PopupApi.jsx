import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';

export const PopupApi = createApi({
    reducerPath: 'PopupApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['Popups'],
    endpoints: (build) => ({
        getPopups: build.query({
            query: (params) => `${URL.POPUP_LIST}?${params}`,
            providesTags: ['LIST']
        }),
        getPopup: build.query({
            query: (params) => `${URL.POPUP_LIST}/${params}`,
            providesTags: ['LIST']
        }),
        createPopup: build.mutation({
            query: (body) => ({
                url: `${URL.POPUP_CREATE}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        }),
        updatePopup: build.mutation({
            query: (body) => ({
                url: `${URL.POPUP_UPDATE}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        }),
        deletePopup: build.mutation({
            query: (body) => ({
                url: `${URL.POPUP_DELETE}/${body}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        })
    })
});

export const { useGetPopupsQuery, useCreatePopupMutation, useUpdatePopupMutation, useDeletePopupMutation, useGetPopupQuery } = PopupApi;
