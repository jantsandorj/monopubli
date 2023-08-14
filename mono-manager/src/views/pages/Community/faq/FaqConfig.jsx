import React, { lazy } from 'react';
import { FaqApi } from './FaqApi';
import Loadable from 'components/Loadable';

const FaqList = Loadable(lazy(() => import('./FaqList')));
const FaqCreate = Loadable(lazy(() => import('./FaqCreate')));
const FaqUpdate = Loadable(lazy(() => import('./FaqUpdate')));
const FaqDetail = Loadable(lazy(() => import('./FaqDetail')));

const FaqConfig = {
    routes: [
        {
            path: 'Faq',
            children: [
                {
                    path: '',
                    element: <FaqList />
                },
                {
                    path: 'detail/:code',
                    element: <FaqDetail />
                },
                {
                    path: 'create',
                    element: <FaqCreate />
                },
                {
                    path: 'modify/:code',
                    element: <FaqUpdate />
                }
            ]
        }
    ],
    API: FaqApi
};

export default FaqConfig;
