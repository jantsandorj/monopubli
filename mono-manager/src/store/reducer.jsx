import { CommonCodeFilterApi } from 'store/commonCodeApi';
import {
    BannerConfig,
    PopupConfig,
    AdminConfig,
    UserConfig,
    FaqBoardConfig,
    QnaConfig,
    ContentConfig,
    UserMenuConfig,
    CommonCodeConfig,
    ContentSettingsConfig,
    SiteInfoConfig,
    SystemSettingConfig,
    RoleManageConfig,
    AdminMenuConfig,
    ContentMenuConfig,
    MailConfig,
    SendMailConfig,
    AccountSettingsConfig,
    MembershipConfig,
    WorkerConfig,
    ConsultingConfig,
    ProjectConfig,
    ProjectPaymentConfig,
    SkillConfig,
    FreeBoardConfig,
    NoticeBoardConfig
} from 'views';
import { DashboardInfoApi } from 'views/dashboard/Default/DashboardApi';
import { AuthApi } from 'views/pages/authentication/auth-forms/AuthApi';

// ==============================|| COMBINE REDUCER ||============================== //

const Reducer = {
    [AuthApi.reducerPath]: AuthApi.reducer,
    [DashboardInfoApi.reducerPath]: DashboardInfoApi.reducer,
    [BannerConfig.API.reducerPath]: BannerConfig.API.reducer,
    [ContentConfig.API.reducerPath]: ContentConfig.API.reducer,
    [PopupConfig.API.reducerPath]: PopupConfig.API.reducer,
    [AdminConfig.API.reducerPath]: AdminConfig.API.reducer,
    [UserConfig.API.reducerPath]: UserConfig.API.reducer,
    [FaqBoardConfig.API.reducerPath]: FaqBoardConfig.API.reducer,
    [QnaConfig.API.reducerPath]: QnaConfig.API.reducer,
    [AdminMenuConfig.API.reducerPath]: AdminMenuConfig.API.reducer,
    [UserMenuConfig.API.reducerPath]: UserMenuConfig.API.reducer,
    [CommonCodeConfig.API.reducerPath]: CommonCodeConfig.API.reducer,
    [ContentSettingsConfig.API.reducerPath]: ContentSettingsConfig.API.reducer,
    [CommonCodeFilterApi.reducerPath]: CommonCodeFilterApi.reducer,
    [SiteInfoConfig.API.reducerPath]: SiteInfoConfig.API.reducer,
    [ContentMenuConfig.API.reducerPath]: ContentMenuConfig.API.reducer,
    [MailConfig.API.reducerPath]: MailConfig.API.reducer,
    [SendMailConfig.API.reducerPath]: SendMailConfig.API.reducer,
    [SystemSettingConfig.API.reducerPath]: SystemSettingConfig.API.reducer,
    [RoleManageConfig.API.reducerPath]: RoleManageConfig.API.reducer,
    [AccountSettingsConfig.API.reducerPath]: AccountSettingsConfig.API.reducer,
    [MembershipConfig.API.reducerPath]: MembershipConfig.API.reducer,
    [WorkerConfig.API.reducerPath]: WorkerConfig.API.reducer,
    [ConsultingConfig.API.reducerPath]: ConsultingConfig.API.reducer,
    [SkillConfig.API.reducerPath]: SkillConfig.API.reducer,
    [ProjectPaymentConfig.API.reducerPath]: ProjectPaymentConfig.API.reducer,
    [ProjectConfig.API.reducerPath]: ProjectConfig.API.reducer,
    [FreeBoardConfig.API.reducerPath]: FreeBoardConfig.API.reducer,
    [NoticeBoardConfig.API.reducerPath]: NoticeBoardConfig.API.reducer
};

export default Reducer;
