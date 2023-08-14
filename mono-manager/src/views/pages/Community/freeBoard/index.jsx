import React, { lazy } from 'react';
import Loadable from 'components/Loadable';
import { FreeBoardApi } from 'api/community/FreeBoardApi';

const List = Loadable(lazy(() => import('./list')));
const Create = Loadable(lazy(() => import('./create')));
const Edit = Loadable(lazy(() => import('./edit')));

const FreeBoardConfig = {
    routes: [
        {
            path: 'free',
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
    API: FreeBoardApi
};

export default FreeBoardConfig;
