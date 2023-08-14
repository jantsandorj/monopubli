import React, { lazy } from 'react';
import { PopupApi } from './PopupApi';
import Loadable from 'components/Loadable';

const PopupList = Loadable(lazy(() => import('./PopupList')));
const PopupCreate = Loadable(lazy(() => import('./PopupCreate')));
const PopupUpdate = Loadable(lazy(() => import('./PopupUpdate')));
const PopupDetail = Loadable(lazy(() => import('./PopupDetail')));

const PopupConfig = {
    routes: [
        {
            path: 'popup',
            children: [
                {
                    path: '',
                    element: <PopupList />
                },
                {
                    path: 'detail/:code',
                    element: <PopupDetail />
                },
                {
                    path: 'create',
                    element: <PopupCreate/>
                },
                {
                    path: 'modify/:code',
                    element: <PopupUpdate/>
                }
            ]
        }
    ],
    API: PopupApi
};

export default PopupConfig;