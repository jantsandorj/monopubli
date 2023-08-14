import React, { lazy } from 'react';
import Loadable from 'components/Loadable';
import { SkillApi } from 'api/settings/skill';

const SkillListPage = Loadable(lazy(() => import('./list')));

const SkillConfig = {
    routes: [
        {
            path: 'skill',
            children: [
                {
                    path: 'list',
                    element: <SkillListPage />
                }
            ]
        }
    ],
    API: SkillApi
};

export default SkillConfig;