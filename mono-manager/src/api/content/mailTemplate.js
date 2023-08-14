import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';

export const MailApi = createApi({
    reducerPath: 'MailApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['Mails'],
    endpoints: (build) => ({
        getMails: build.query({
            query: (params) => `${URL.MAIL_LIST}?${params}`,
            providesTags: ['LIST']
        }),
        getMail: build.query({
            query: (params) => `${URL.MAIL_LIST}/${params}`,
            providesTags: ['LIST']
        }),
        createMail: build.mutation({
            query: (body) => ({
                url: `${URL.MAIL_CREATE}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        }),
        updateMail: build.mutation({
            query: (body) => ({
                url: `${URL.MAIL_UPDATE}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        }),
        deleteMail: build.mutation({
            query: (body) => ({
                url: `${URL.MAIL_DELETE}/${body}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        })
    })
});

export const { useGetMailsQuery, useCreateMailMutation, useUpdateMailMutation, useDeleteMailMutation, useGetMailQuery } = MailApi;
