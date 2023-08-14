import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';

export const SendGroupMailApi = createApi({
    reducerPath: 'SendGroupMailApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['SendGroupMails'],
    endpoints: (build) => ({
        getMailGroupList: build.query({
            query: (params) => `${URL.MAIL_GROUP_LIST}?${params}`,
            providesTags: ['LIST']
        }),
        getMailGroupDetail: build.query({
            query: (params) => `${URL.MAIL_GROUP_DETAIL}?${params}`,
            providesTags: ['LIST']
        }),
        getMailReveiverUsers: build.query({
            query: () => `${URL.MAIL_RECEIVERS_USER}`,
            providesTags: ['LIST']
        }),
        getMailReveiverAdmins: build.query({
            query: () => `${URL.MAIL_RECEIVERS_ADMIN}`,
            providesTags: ['LIST']
        }),
        sendMail: build.mutation({
            query: (body) => ({
                url: `${URL.MAIL_SEND}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        })
    })
});

export const {
    useGetMailGroupDetailQuery,
    useGetMailGroupListQuery,
    useGetMailReveiverAdminsQuery,
    useGetMailReveiverUsersQuery,
    useSendMailMutation
} = SendGroupMailApi;
