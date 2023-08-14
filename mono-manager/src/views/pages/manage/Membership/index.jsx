import React, { lazy } from 'react';
import Loadable from 'components/Loadable';
import { MembershipApi } from 'api/manage/membership';

const List = Loadable(lazy(() => import('./list')));
const Create = Loadable(lazy(() => import('./create')));
const Edit = Loadable(lazy(() => import('./edit')));

const MembershipConfig = {
    routes: [
        {
            path: 'membership',
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
    API: MembershipApi
};

export default MembershipConfig;
