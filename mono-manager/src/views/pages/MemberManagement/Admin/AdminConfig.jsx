import React, { lazy } from 'react';
import { AdminApi } from './AdminApi';
import Loadable from 'components/Loadable';

const AdminList = Loadable(lazy(() => import('./AdminList')));
const AdminCreate = Loadable(lazy(() => import('./AdminCreate')));
const AdminUpdate = Loadable(lazy(() => import('./AdminUpdate')));
const AdminDetail = Loadable(lazy(() => import('./AdminDetail')));

const AdminConfig = {
    routes: [
        {
            path: 'admin',
            children: [
                {
                    path: '',
                    element: <AdminList />
                },
                {
                    path: 'detail/:code',
                    element: <AdminDetail />
                },
                {
                    path: 'create',
                    element: <AdminCreate />
                },
                {
                    path: 'modify/:code',
                    element: <AdminUpdate />
                }
            ]
        }
    ],
    API: AdminApi
};

export default AdminConfig;
