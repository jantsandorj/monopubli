import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from 'api';
import { URL } from 'api/Urls';

export const CommonCodeFilterApi = createApi({
    reducerPath: 'CommonCodeFilterApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['CommonCodes'],
    endpoints: (build) => ({
        getCommonFilterCode: build.query({
            query: (codegroup) => `${URL.COMMONCODE_FILTER_LIST}?codegroup=${codegroup}`,
            providesTags: ['LIST']
        })
    })
});

export const { useGetCommonFilterCodeQuery } = CommonCodeFilterApi;
