import React, { lazy } from 'react';
import Loadable from 'components/Loadable';
import { SiteInfoApi } from './SiteInfoApi';

const SiteInfoCreate = Loadable(lazy(() => import('./SiteInfoCreate')));
const SiteInfoConfig = {
    routes: [
        {
            path: 'siteInfo',
            children: [
                {
                    path: '',
                    element: <SiteInfoCreate />
                }
            ]
        }
    ],
    API: SiteInfoApi
};

export default SiteInfoConfig;
