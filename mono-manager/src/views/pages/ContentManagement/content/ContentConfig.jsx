import React, { lazy } from 'react';
import { ContentApi } from './ContentApi';
import Loadable from 'components/Loadable';
import CODE from 'utils/statics/code';

const ContentList = Loadable(lazy(() => import('./ContentList')));
const ContentCreate = Loadable(lazy(() => import('./ContentCreate')));
const ContentUpdate = Loadable(lazy(() => import('./ContentUpdate')));
const ContentDetail = Loadable(lazy(() => import('./ContentDetail')));

const ContentSettingsList = Loadable(lazy(() => import('./ContentSettingsList')));
const ContentSettingsDetail = Loadable(lazy(() => import('./ContentSettingsDetail')));
const ContentSettingsEdit = Loadable(lazy(() => import('./ContentSettingsEdit')));

const FormContentList = Loadable(lazy(() => import('./FormContentList')));
const FormContentDetail = Loadable(lazy(() => import('./FormContentDetail')));
const FormContentEdit = Loadable(lazy(() => import('./FormContentEdit')));

const ContentConfig = {
    routes: [
        {
            path: 'content',
            children: [
                {
                    path: '',
                    element: <ContentList />
                },
                {
                    path: 'detail/:code',
                    element: <ContentDetail />
                },
                {
                    path: 'create',
                    element: <ContentCreate />
                },
                {
                    path: 'modify/:code',
                    element: <ContentUpdate />
                },
                {
                    path: 'form',
                    children: [
                        {
                            path: '',
                            element: <ContentSettingsList />
                        },
                        {
                            path: 'detail',
                            element: <ContentSettingsDetail />
                        },
                        {
                            path: 'create',
                            element: <ContentSettingsEdit mode={CODE.MODE_CREATE} />
                        },
                        {
                            path: 'modify',
                            element: <ContentSettingsEdit mode={CODE.MODE_MODIFY} />
                        }
                    ]
                },
                {
                    path: 'data',
                    children: [
                        {
                            path: '',
                            element: <FormContentList />
                        },
                        {
                            path: 'detail',
                            element: <FormContentDetail />
                        },
                        {
                            path: 'create',
                            element: <FormContentEdit mode={CODE.MODE_CREATE} />
                        },
                        {
                            path: 'modify',
                            element: <FormContentEdit mode={CODE.MODE_MODIFY} />
                        }
                    ]
                }
            ]
        }
    ],
    API: ContentApi
};

export default ContentConfig;
