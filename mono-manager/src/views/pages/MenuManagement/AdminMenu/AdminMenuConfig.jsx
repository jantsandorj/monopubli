import React, { lazy } from 'react';
import { AdminMenuApi } from './AdminMenuApi';
import Loadable from 'components/Loadable';

const AdminList = Loadable(lazy(() => import('./AdminMenu')));

const AdminMenuConfig = {
    routes: [
        {
            path: 'menu',
            children: [
                {
                    path: '',
                    element: <AdminList />
                }
            ]
        }
    ],
    API: AdminMenuApi
};

export default AdminMenuConfig;
