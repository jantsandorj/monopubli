import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_URL } from 'config';

/**
 * fetchBaseQuery which contain access token for createAPI function in all page components
 */
export const Api = {
    fetchBaseQuery: fetchBaseQuery({
        baseUrl: SERVER_URL,
        prepareHeaders: (headers, { getState }) => {
            const user = getState().authentication.user;
            if (user?.token) {
                headers.set('authorization', `Bearer ${user.token}`);
            }
        }
    })
};
