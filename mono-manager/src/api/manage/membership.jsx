import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';

export const MembershipApi = createApi({
    reducerPath: 'MembershipApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['Membership'],
    endpoints: (build) => ({
        getMembership: build.query({
            query: (params) => `${URL.MEMBERSHIP_LIST}?${params}`,
            providesTags: ['LIST']
        }),
        getMembershipDetails: build.query({
            query: (params) => `${URL.MEMBERSHIP_LIST}/${params}`,
            providesTags: ['LIST']
        }),
        createMembership: build.mutation({
            query: (body) => ({
                url: `${URL.MEMBERSHIP_CREATE}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        }),
        updateMembership: build.mutation({
            query: (body) => ({
                url: `${URL.MEMBERSHIP_UPDATE}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        }),
        deleteMembership: build.mutation({
            query: (body) => ({
                url: `${URL.MEMBERSHIP_DELETE}/${body}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        })
    })
});

export const {
    useGetMembershipQuery,
    useGetMembershipDetailsQuery,
    useCreateMembershipMutation,
    useUpdateMembershipMutation,
    useDeleteMembershipMutation
} = MembershipApi;
