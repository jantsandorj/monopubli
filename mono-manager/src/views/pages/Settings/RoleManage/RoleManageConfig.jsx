import React, { lazy } from 'react';
import Loadable from 'components/Loadable';
import { RoleManageApi } from './RoleManageApi';

const RoleManageList = Loadable(lazy(() => import('./RoleManageList')));
const RoleManageConfig = {
    routes: [
        {
            path: 'rolemanage',
            children: [
                {
                    path: '',
                    element: <RoleManageList />
                }
            ]
        }
    ],
    API: RoleManageApi
};

export default RoleManageConfig;
