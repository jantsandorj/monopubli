import React, { lazy } from 'react';
import { QnaApi } from './QnaApi';
import Loadable from 'components/Loadable';

const QnaList = Loadable(lazy(() => import('./QnaList')));
const QnaCreate = Loadable(lazy(() => import('./QnaCreate')));
const QnaUpdate = Loadable(lazy(() => import('./QnaUpdate')));
const QnaDetail = Loadable(lazy(() => import('./QnaDetail')));

const QnaConfig = {
    routes: [
        {
            path: 'qna',
            children: [
                {
                    path: '',
                    element: <QnaList />
                },
                {
                    path: 'detail/:code',
                    element: <QnaDetail />
                },
                {
                    path: 'create',
                    element: <QnaCreate />
                },
                {
                    path: 'modify/:code',
                    element: <QnaUpdate />
                }
            ]
        }
    ],
    API: QnaApi
};

export default QnaConfig;
