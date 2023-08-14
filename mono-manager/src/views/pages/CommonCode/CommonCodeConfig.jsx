import React, { lazy } from 'react';
import { CommonCodeApi } from './CommonCodeApi';
import Loadable from 'components/Loadable';

const CommonCodeList = Loadable(lazy(() => import('./CommonCodeList')));

const CommonCodeConfig = {
    routes: [
        {
            path: 'code',
            children: [
                {
                    path: '',
                    element: <CommonCodeList />
                },
            ]
        }
    ],
    API: CommonCodeApi
};

export default CommonCodeConfig;
