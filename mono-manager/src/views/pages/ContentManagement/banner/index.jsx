import React, { lazy } from 'react';
import Loadable from 'components/Loadable';
import { BannerApi } from 'api/content/banner';

const BannerListPage = Loadable(lazy(() => import('./list')));
const BannerCreatePage = Loadable(lazy(() => import('./create')));
const BannerEditPage = Loadable(lazy(() => import('./edit')));

const BannerConfig = {
    routes: [
        {
            path: 'banner',
            children: [
                {
                    path: '',
                    element: <BannerListPage />
                },
                {
                    path: 'create',
                    element: <BannerCreatePage />
                },
                {
                    path: 'modify/:code',
                    element: <BannerEditPage />
                }
            ]
        }
    ],
    API: BannerApi
};

export default BannerConfig;
