import { lazy } from 'react';
import MainLayout from './components/layout/MainLayout';
import {
    AdminConfig,
    BannerConfig,
    CommonCodeConfig,
    ContentConfig,
    ContentSettingsConfig,
    FaqBoardConfig,
    PopupConfig,
    QnaConfig,
    UserConfig,
    UserMenuConfig,
    AdminMenuConfig,
    SiteInfoConfig,
    SystemSettingConfig,
    RoleManageConfig,
    ContentMenuConfig,
    MailConfig,
    SendMailConfig,
    AccountSettingsConfig,
    MembershipConfig,
    WorkerConfig,
    ConsultingConfig,
    ProjectPaymentConfig,
    ProjectConfig,
    SkillConfig,
    FreeBoardConfig,
    NoticeBoardConfig
} from './views';
import MinimalLayout from 'components/layout/MinimalLayout';
import Loadable from 'components/Loadable';
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/auth-forms/Login')));
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

export const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: 'user',
            children: [...UserMenuConfig.routes]
        },
        {
            path: 'admin',
            children: [...AdminMenuConfig.routes]
        },
        {
            path: 'member',
            children: [...AdminConfig.routes, ...UserConfig.routes, ...AccountSettingsConfig.routes]
        },
        {
            path: 'manage',
            children: [
                ...BannerConfig.routes,
                ...PopupConfig.routes,
                ...ContentConfig.routes,
                ...ContentSettingsConfig.routes,
                ...ContentMenuConfig.routes,
                ...MembershipConfig.routes,
                ...WorkerConfig.routes
            ]
        },
        {
            path: 'common',
            children: [...CommonCodeConfig.routes, ...MailConfig.routes, ...SendMailConfig.routes]
        },
        {
            path: 'community',
            children: [...QnaConfig.routes, ...FaqBoardConfig.routes, ...FreeBoardConfig.routes, ...NoticeBoardConfig.routes]
        },
        {
            path: 'project/payment',
            children: [...ProjectPaymentConfig.routes]
        },
        {
            path: 'consulting',
            children: [...ConsultingConfig.routes]
        },
        {
            path: 'project',
            children: [...ProjectConfig.routes]
        },
        {
            path: 'settings',
            children: [...SiteInfoConfig.routes, ...SystemSettingConfig.routes, ...RoleManageConfig.routes, ...SkillConfig.routes]
        }
    ]
};

export const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/login/',
            element: <AuthLogin3 />
        }
    ]
};
