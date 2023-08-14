import React, { lazy } from 'react';
import Loadable from 'components/Loadable';
import { NoticeBoardApi } from 'api/community/NoticeBoardApi';

const List = Loadable(lazy(() => import('./list')));
const Create = Loadable(lazy(() => import('./create')));
const Edit = Loadable(lazy(() => import('./edit')));

const NoticeBoardConfig = {
    routes: [
        {
            path: 'notice',
            children: [
                {
                    path: '',
                    element: <List />
                },
                {
                    path: 'create',
                    element: <Create />
                },
                {
                    path: 'modify/:code',
                    element: <Edit />
                }
            ]
        }
    ],
    API: NoticeBoardApi
};

export default NoticeBoardConfig;
