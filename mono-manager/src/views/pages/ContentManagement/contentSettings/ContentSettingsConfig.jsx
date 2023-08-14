import React, { lazy } from 'react';
import { ContentSettingsApi } from './ContentSettingsApi';
import Loadable from 'components/Loadable';

const ContentSettingsList = Loadable(lazy(() => import('./ContentSettingsList')));
const ContentSettingsDetail = Loadable(lazy(() => import('./ContentSettingsDetail')));
const ContentSettingsCreate = Loadable(lazy(() => import('./ContentSettingsCreate')));
const ContentSettingsUpdate = Loadable(lazy(() => import('./ContentSettingsUpdate')));

const ContentSettingsConfig = {
    routes: [
        {
            path: 'content/settings',
            children: [
                {
                    path: '',
                    element: <ContentSettingsList />
                },
                {
                    path: 'detail/:code',
                    element: <ContentSettingsDetail />
                },
                {
                    path: 'create',
                    element: <ContentSettingsCreate />
                },
                {
                    path: 'modify/:code',
                    element: <ContentSettingsUpdate />
                }
            ]
        }
    ],
    API: ContentSettingsApi
};

export default ContentSettingsConfig;
