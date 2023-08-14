import React, { lazy } from 'react';
import { UserMenuApi } from './UserMenuApi';
import Loadable from 'components/Loadable';

const UserList = Loadable(lazy(() => import('./UserMenu')));

const UserConfig = {
    routes: [
        {
            path: 'menu',
            children: [
                {
                    path: '',
                    element: <UserList />
                }
            ]
        }
    ],
    API: UserMenuApi
};

export default UserConfig;
