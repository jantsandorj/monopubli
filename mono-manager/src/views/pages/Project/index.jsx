import React, { lazy } from 'react';
import Loadable from 'components/Loadable';
import { ProjectApi } from 'api/project';

const ProjectListPage = Loadable(lazy(() => import('./list')));
const ProjectCreatePage = Loadable(lazy(() => import('./create')));
const ProjectEditPage = Loadable(lazy(() => import('./edit')));

const ProjectConfig = {
    routes: [
        {
            path: 'manage',
            children: [
                {
                    path: '',
                    element: <ProjectListPage />
                },
                {
                    path: 'create',
                    element: <ProjectCreatePage />
                },
                {
                    path: 'modify/:code',
                    element: <ProjectEditPage />
                }
            ]
        }
    ],
    API: ProjectApi
};

export default ProjectConfig;
