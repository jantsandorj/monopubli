import React, { lazy } from 'react';
import { ContentMenuApi } from './ContentMenuApi';
import Loadable from 'components/Loadable';

const ContentMenuList = Loadable(lazy(() => import('./ContentMenuList')));
const ContentMenuDetail = Loadable(lazy(() => import('./ContentMenuDetail')));
const ContentMenuCreate = Loadable(lazy(() => import('./ContentMenuCreate')));
const ContentMenuUpdate = Loadable(lazy(() => import('./ContentMenuUpdate')));

const ContentMenuConfig = {
    routes: [
        {
            path: 'content/menu',
            children: [
                {
                    path: '',
                    element: <ContentMenuList />
                },
                {
                    path: 'detail/:code',
                    element: <ContentMenuDetail />
                },
                {
                    path: 'create',
                    element: <ContentMenuCreate />
                },
                {
                    path: 'modify/:code',
                    element: <ContentMenuUpdate />
                }
            ]
        }
    ],
    API: ContentMenuApi
};
export default ContentMenuConfig;
