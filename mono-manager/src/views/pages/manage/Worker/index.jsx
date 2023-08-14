import React, { lazy } from 'react';
import Loadable from 'components/Loadable';
import { WorkerApi } from 'api/worker';

const WorkerListPage = Loadable(lazy(() => import('./list')));
const WorkerCreatePage = Loadable(lazy(() => import('./create')));
const WorkerEditPage = Loadable(lazy(() => import('./edit')));

const WorkerConfig = {
    routes: [
        {
            path: 'worker',
            children: [
                {
                    path: '',
                    element: <WorkerListPage />
                },
                {
                    path: 'create',
                    element: <WorkerCreatePage />
                },
                {
                    path: 'modify/:code',
                    element: <WorkerEditPage />
                }
            ]
        }
    ],
    API: WorkerApi
};

export default WorkerConfig;
