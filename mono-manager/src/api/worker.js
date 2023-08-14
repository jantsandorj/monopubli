import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';

export const WorkerApi = createApi({
    reducerPath: 'WorkerApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['Workers'],
    endpoints: (build) => ({
        getWorkers: build.query({
            query: (params) => `${URL.WORKER_LIST}?${params}`,
            providesTags: ['LIST']
        }),
        getWorker: build.query({
            query: (params) => `${URL.WORKER_DETAIL}/${params}`,
            providesTags: ['LIST']
        }),
        createWorker: build.mutation({
            query: (body) => ({
                url: `${URL.WORKER_CREATE}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        }),
        updateWorker: build.mutation({
            query: (body) => ({
                url: `${URL.WORKER_UPDATE}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        }),
        deleteWorker: build.mutation({
            query: (body) => ({
                url: `${URL.WORKER_DELETE}/${body}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        })
    })
});

export const { useGetWorkersQuery, useCreateWorkerMutation, useUpdateWorkerMutation, useDeleteWorkerMutation, useGetWorkerQuery } =
    WorkerApi;
