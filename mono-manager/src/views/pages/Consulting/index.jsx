import React, { lazy } from 'react';
import Loadable from 'components/Loadable';
import { ConsultingApi } from 'api/consulting';

const ConsultingListPage = Loadable(lazy(() => import('./list')));
const ConsultingEditPage = Loadable(lazy(() => import('./edit')));

const ConsultingConfig = {
    routes: [
        {
            path: '',
            children: [
                {
                    path: '',
                    element: <ConsultingListPage />
                },
                {
                    path: 'modify/:code',
                    element: <ConsultingEditPage />
                }
            ]
        }
    ],
    API: ConsultingApi
};

export default ConsultingConfig;
