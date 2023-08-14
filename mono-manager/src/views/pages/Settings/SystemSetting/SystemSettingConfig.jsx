import React, { lazy } from 'react';
import Loadable from 'components/Loadable';
import { SystemSettingApi } from './SystemSettingApi';

const SystemSetting = Loadable(lazy(() => import('./SystemSetting')));
const SystemSettingConfig = {
    routes: [
        {
            path: 'systemSetting',
            children: [
                {
                    path: '',
                    element: <SystemSetting />
                }
            ]
        }
    ],
    API: SystemSettingApi
};

export default SystemSettingConfig;
