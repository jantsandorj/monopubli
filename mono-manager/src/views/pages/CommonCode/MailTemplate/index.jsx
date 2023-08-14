import React, { lazy } from 'react';
import Loadable from 'components/Loadable';
import { MailApi } from 'api/content/mailTemplate';

const MailListPage = Loadable(lazy(() => import('./List')));
const MailCreatePage = Loadable(lazy(() => import('./Create')));
const MailEditPage = Loadable(lazy(() => import('./Edit')));

const MailConfig = {
    routes: [
        {
            path: 'mail',
            children: [
                {
                    path: '',
                    element: <MailListPage />
                },
                {
                    path: 'create',
                    element: <MailCreatePage />
                },
                {
                    path: 'edit/:code',
                    element: <MailEditPage />
                }
            ]
        }
    ],
    API: MailApi
};

export default MailConfig;
