import React, { lazy } from 'react';
import Loadable from 'components/Loadable';
import { AuthApi } from 'api/auth/auth';

const LoginPage = Loadable(lazy(() => import('./login')));

const AuthConfig = {
    routes: [
        {
            path: '/',
            element: <LoginPage />
        }
    ],
    API: AuthApi
};

export default AuthConfig;