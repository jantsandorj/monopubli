import React, { lazy } from 'react';
import { UserApi } from './UserApi';
import Loadable from 'components/Loadable';

const UserList = Loadable(lazy(() => import('./UserList')));
const UserCreate = Loadable(lazy(() => import('./UserCreate')));
const UserUpdate = Loadable(lazy(() => import('./UserUpdate')));
const UserDetail = Loadable(lazy(() => import('./UserDetail')));

const UserConfig = {
    routes: [
        {
            path: 'user',
            children: [
                {
                    path: '',
                    element: <UserList />
                },
                {
                    path: 'detail/:code',
                    element: <UserDetail />
                },
                {
                    path: 'create',
                    element: <UserCreate />
                },
                {
                    path: 'modify/:code',
                    element: <UserUpdate />
                }
            ]
        }
    ],
    API: UserApi
};

export default UserConfig;
