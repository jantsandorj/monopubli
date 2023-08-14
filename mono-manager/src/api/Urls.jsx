export const URL = {
    DASHBOARD_INFO: '/api/dashboard/info',
    DASHBOARD_LATEST_NOTICE_BOARDS: '/api/dashboard/latest/notice/boards',
    DASHBOARD_LATEST_QNA_BOARDS: '/api/dashboard/latest/qna/boards',

    BANNER_LIST: '/api/banners',
    BANNER_CREATE: '/api/banners/create',
    BANNER_UPDATE: '/api/banners/update',
    BANNER_DELETE: '/api/banners/delete',

    TRANSACTION_LIST: '/api/transactions',
    TRANSACTION_CREATE: '/api/transactions/create',
    TRANSACTION_UPDATE: '/api/transactions/update',
    TRANSACTION_DELETE: '/api/transactions/delete',

    WORKER_DETAIL: '/api/worker',
    WORKER_LIST: '/api/workers',
    WORKER_CREATE: '/api/worker/create',
    WORKER_UPDATE: '/api/worker/update',
    WORKER_DELETE: '/api/worker/delete',

    CONSULT_DETAIL: '/api/consult',
    CONSULT_LIST: '/api/consults',
    CONSULT_CREATE: '/api/consult/create',
    CONSULT_UPDATE: '/api/consult/update',
    CONSULT_DELETE: '/api/consult/delete',

    PROJECT_DETAIL: '/api/project',
    PROJECT_LIST: '/api/projects',
    PROJECT_CREATE: '/api/project/create',
    PROJECT_UPDATE: '/api/project/update',
    PROJECT_DELETE: '/api/project/delete',

    SKILL_LIST: '/api/skill/list',
    SKILL_DETAIL: '/api/skill/detail',
    SKILL_CREATE: '/api/skill/create',
    SKILL_UPDATE: '/api/skill/update',
    SKILL_DELETE: '/api/skill/delete',

    PROJECT_PAYMENT_LIST : '/api/project/payment/list',
    PROJECT_PAYMENT_TAX_LIST : '/api/project/payment/tax/list',
    PROJECT_PAYMENT_RECEIVABLE_LIST : '/api/project/payment/receivable/list',
    PROJECT_PAYMENT_DETAIL : '/api/project/payment/detail',
    PROJECT_PAYMENT_SITUATION_UPDATE : '/api/project/payment/situation/update',
    PROJECT_PAYMENT_STATS_RECEIVABLE : '/api/project/payment/stats/receivable',
    PROJECT_PAYMENT_STATS_TAX : '/api/project/payment/stats/tax',

    ADMIN_LIST: '/api/security/admins',
    ADMIN_CREATE: '/api/security/admins/create',
    ADMIN_UPDATE: '/api/security/admins/update',
    ADMIN_DELETE: '/api/security/admins/delete',
    ADMIN_CHECK: '/api/security/admin/adminIdExist',
    ADMIN_CODES_GROUP: '/api/codes/group',
    ADMIN_PASSWORD_CHANGE: '/api/change/password',
    ADMIN_ROLE: '/api/author/infolist',

    USER_LIST: '/api/users',
    USER_CREATE: '/api/users/create',
    USER_UPDATE: '/api/users/update',
    USER_DELETE: '/api/users/delete',
    USER_CHECK: '/api/users/userIdExist',
    USER_PASSWORD_CHANGE: '/api/users/changepassword',

    CONTENT_LIST: '/api/content',
    CONTENT_CREATE: '/api/content/create',
    CONTENT_UPDATE: '/api/content/update',
    CONTENT_DELETE: '/api/content/delete',

    CONTENT_SETTINGS_LIST: '/api/content/settings',
    CONTENT_SETTINGS_CREATE: '/api/content/settings/create',
    CONTENT_SETTINGS_UPDATE: '/api/content/settings/update',
    CONTENT_SETTINGS_DELETE: '/api/content/settings/delete',
    CONTENT_SETTINGS_DETAIL: '/api/content/settings/detail',

    CONTENT_MENU_LIST: '/api/menucontents',
    CONTENT_MENU_CREATE: '/api/menucontents/create',
    CONTENT_MENU_UPDATE: '/api/menucontents/update',
    CONTENT_MENU_DELETE: '/api/menucontents/delete',
    CONTENT_MENU_DETAIL: '/api/menucontents/detail',

    POPUP_LIST: '/api/popups',
    POPUP_CREATE: '/api/popups/create',
    POPUP_UPDATE: '/api/popups/update',
    POPUP_DELETE: '/api/popups/delete',

    NOTICE_BOARD_LIST: '/api/notice/list',
    NOTICE_BOARD_DETAIL: '/api/notice/detail',
    NOTICE_BOARD_CREATE: '/api/notice/create',
    NOTICE_BOARD_UPDATE: '/api/notice/update',
    NOTICE_BOARD_DELETE: '/api/notice/delete',

    FREE_BOARD_LIST: '/api/free/board/list',
    FREE_BOARD_DETAIL: '/api/free/board/detail',
    FREE_BOARD_CREATE: '/api/free/board/create',
    FREE_BOARD_UPDATE: '/api/free/board/update',
    FREE_BOARD_DELETE: '/api/free/board/delete',

    FAQ_BOARD_LIST: '/api/faq/list',
    FAQ_BOARD_DETAIL: '/api/faq/detail',
    FAQ_BOARD_CREATE: '/api/faq/create',
    FAQ_BOARD_UPDATE: '/api/faq/update',
    FAQ_BOARD_DELETE: '/api/faq/delete',

    QNA_LIST: '/api/qna/list',
    QNA_DETAIL: '/api/qna/detail',
    QNA_CREATE: '/api/qna/create',
    QNA_UPDATE: '/api/qna/update',
    QNA_DELETE: '/api/qna/delete',

    ADMIN_MENU_LIST: '/api/menulist',
    MENU_ORDER_CHANGE: '/api/menu/change/order',
    USER_FILE_DELETE: '/api/files/',

    USER_MENU_LIST: '/api/menus',
    USER_MENU_CREATE: '/api/menus/create',
    USER_MENU_UPDATE: '/api/menus/update',
    USER_MENU_DELETE: '/api/menus/delete',
    COMMONCODE_LIST: '/api/codes',
    COMMONCODE_CREATE: '/api/codes/create',
    COMMONCODE_UPDATE: '/api/codes/update',
    COMMONCODE_DELETE: '/api/codes/delete',
    COMMONCODE_GROUPLIST: '/api/groupcodes',
    COMMONCODE_FILTER_LIST: '/api/codes/group',

    SITE_INFO: '/api/siteinfo',
    SITE_INFO_UPDATE: '/api/siteinfo/update',

    SYSTEM_SETTING: '/api/system/settings',
    SYSTEM_SETTING_UPDATE: '/api/system/settings/update',

    MAIL_SEND: '/api/mail/send',
    MAIL_LIST: '/api/mail/templates',
    MAIL_CREATE: '/api/mail/templates/create',
    MAIL_UPDATE: '/api/mail/templates/update',
    MAIL_DELETE: '/api/mail/templates/delete',

    MAIL_GROUP_LIST: '/api/mail/history/group/list',
    MAIL_GROUP_DETAIL: '/api/mail/histories',

    ROLE_MANAGE_LIST: '/api/author/infos',
    ROLE_MANAGE_CREATE: '/api/author/infos/create',
    ROLE_MANAGE_UPDATE: '/api/author/infos/update',

    MENU_ROLE_LIST: '/api/menus/roles',
    MENU_ROLE_CREATE: '/api/author/roles/create',

    MAIL_RECEIVERS_USER: '/api/user/info/list',
    MAIL_RECEIVERS_ADMIN: '/api/security/admin/info/list',

    ACCOUNT_SETTINGS_DETAIL: '/api/security/admins',
    ACCOUNT_SETTINGS_UPDATE: '/api/admin/updateProfileinfo',
    ACCOUNT_SETTINGS_UPDATE_IMG: '/api/admin/updateProfileimg',

    // MEMBERSHIP
    MEMBERSHIP_LIST: '/api/users',
    MEMBERSHIP_CREATE: '/api/users/create',
    MEMBERSHIP_UPDATE: '/api/users/update',
    MEMBERSHIP_DELETE: '/api/users/delete',

};
