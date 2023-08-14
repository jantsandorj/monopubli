import React, { lazy } from 'react';
import Loadable from 'components/Loadable';
import { MainApi } from 'api/main/main';

const MainPage = Loadable(lazy(() => import('./main')));

const MainConfig = {
    routes: [
        {
            path: '/',
            element: <MainPage />
        }
    ],
    API: MainApi
};

export default MainConfig;