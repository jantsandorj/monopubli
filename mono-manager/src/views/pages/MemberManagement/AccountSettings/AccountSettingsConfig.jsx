import React, { lazy } from 'react';
import Loadable from 'components/Loadable';
import { AccountSettingsApi } from './AccountSettingsApi';

const AccountSettingsCreate = Loadable(lazy(() => import('./AccountSettingsCreate')));
const AccountSettingsConfig = {
    routes: [
        {
            path: 'accountsettings',
            children: [
                {
                    path: '',
                    element: <AccountSettingsCreate />
                }
            ]
        }
    ],
    API: AccountSettingsApi
};

export default AccountSettingsConfig;
