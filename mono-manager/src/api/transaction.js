import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';

export const TransactionApi = createApi({
    reducerPath: 'TransactionApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['Transaction'],
    endpoints: (build) => ({
        getTransactions: build.query({
            query: (params) => `${URL.TRANSACTION_LIST}?${params}`,
            providesTags: ['LIST']
        }),
        getTransaction: build.query({
            query: (params) => `${URL.TRANSACTION_LIST}/${params}`,
            providesTags: ['LIST']
        }),
        createTransaction: build.mutation({
            query: (body) => ({
                url: `${URL.TRANSACTION_CREATE}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        }),
        updateTransaction: build.mutation({
            query: (body) => ({
                url: `${URL.TRANSACTION_UPDATE}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        }),
        deleteTransaction: build.mutation({
            query: (body) => ({
                url: `${URL.TRANSACTION_DELETE}/${body}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        })
    })
});

export const {
    useGetTransactionsQuery,
    useCreateTransactionMutation,
    useUpdateTransactionMutation,
    useDeleteTransactionMutation,
    useGetTransactionQuery
} = TransactionApi;
