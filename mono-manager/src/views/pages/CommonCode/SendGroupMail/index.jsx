import React, { lazy } from 'react';
import Loadable from 'components/Loadable';
import { SendGroupMailApi } from 'api/content/mailSendGroup';

const GroupMailListPage = Loadable(lazy(() => import('./List')));
const GroupMailCreatePage = Loadable(lazy(() => import('./Create')));

const SendMailConfig = {
    routes: [
        {
            path: 'send',
            children: [
                {
                    path: '',
                    element: <GroupMailListPage />
                },
                {
                    path: 'create',
                    element: <GroupMailCreatePage />
                }
            ]
        }
    ],
    API: SendGroupMailApi
};

export default SendMailConfig;
