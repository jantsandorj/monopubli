import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';

export const SkillApi = createApi({
    reducerPath: 'SkillApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['Skills'],
    endpoints: (build) => ({
        getSkills: build.query({
            query: (params) => `${URL.SKILL_LIST}?${params}`,
            providesTags: ['LIST']
        }),
        getSkill: build.query({
            query: (params) => `${URL.SKILL_DETAIL}/${params}`,
            providesTags: ['DETAIL']
        }),
        createSkill: build.mutation({
            query: (body) => ({
                url: `${URL.SKILL_CREATE}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST','DETAIL']
        }),
        updateSkill: build.mutation({
            query: (body) => ({
                url: `${URL.SKILL_UPDATE}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST','DETAIL']
        }),
        deleteSkill: build.mutation({
            query: (body) => ({
                url: `${URL.SKILL_DELETE}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        })
    })
});

export const { useGetSkillsQuery, useCreateSkillMutation, useUpdateSkillMutation, useDeleteSkillMutation, useGetSkillQuery } = SkillApi;
