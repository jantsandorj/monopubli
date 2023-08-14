import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';

export const ProjectApi = createApi({
    reducerPath: 'ProjectApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['Projects'],
    endpoints: (build) => ({
        getProjects: build.query({
            query: (params) => `${URL.PROJECT_LIST}?${params}`,
            providesTags: ['LIST']
        }),
        getProject: build.query({
            query: (params) => `${URL.PROJECT_DETAIL}/${params}`,
            providesTags: ['LIST']
        }),
        createProject: build.mutation({
            query: (body) => ({
                url: `${URL.PROJECT_CREATE}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        }),
        updateProject: build.mutation({
            query: (body) => ({
                url: `${URL.PROJECT_UPDATE}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        }),
        deleteProject: build.mutation({
            query: (body) => ({
                url: `${URL.PROJECT_DELETE}/${body}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        })
    })
});

export const { useGetProjectsQuery, useCreateProjectMutation, useUpdateProjectMutation, useDeleteProjectMutation, useGetProjectQuery } =
    ProjectApi;
