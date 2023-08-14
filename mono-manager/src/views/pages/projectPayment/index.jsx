import React, { lazy } from 'react';
import Loadable from 'components/Loadable';
import { ProjectPaymentApi } from 'api/project/projectPayment';

const TransactionList = Loadable(lazy(() => import('./transaction/list')));
const TaxList = Loadable(lazy(() => import('./tax/list')));
const ReceivableList = Loadable(lazy(() => import('./receivable/list')));

const ProjectPaymentConfig = {
    routes: [
        {
            path: '',
            children: [
                {
                    path: 'transaction',
                    element: <TransactionList/>
                },
                {
                    path: 'tax',
                    element: <TaxList />
                },
                {
                    path: 'receivable',
                    element: <ReceivableList/>
                }
            ]
        }
    ],
    API: ProjectPaymentApi
};

export default ProjectPaymentConfig;