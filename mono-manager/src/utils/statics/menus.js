import URL from '../../api/url';
import { IconDashboard, IconNote, IconSubtask, IconUsers, IconNotification, IconSettings, IconHelp, IconList } from '@tabler/icons';
// ==============================|| MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'parentmenu_title_dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'menu_dashboard_default',
            type: 'item',
            url: '/dashboard/default',
            icon: IconDashboard,
            breadcrumbs: false
        }
    ]
};

const pages = {
    id: 'pages',
    title: 'parentmenu_title_manage',
    caption: '',
    type: 'group',
    children: [
        {
            id: 'content',
            title: 'menu_content_management',
            type: 'collapse',
            icon: IconNote,
            children: [
                {
                    id: 'content_banner',
                    title: 'menu_banner_manage',
                    type: 'item',
                    url: '/manage/banner',
                    target: false
                },
                {
                    id: 'content_popup',
                    title: 'menu_popup_manage',
                    type: 'item',
                    url: '/manage/popup',
                    target: false
                },
                {
                    id: 'content_manage',
                    title: 'menu_form_manage',
                    type: 'item',
                    url: URL.CONTENT_DATA,
                    target: false
                },
                {
                    id: 'content_menu_settings',
                    title: 'menu_manage',
                    type: 'item',
                    url: URL.CONTENT_MENU,
                    target: false
                },
                {
                    id: 'content_menu_settings',
                    title: 'menu_manage',
                    type: 'item',
                    url: URL.CONTENT_MENU,
                    target: false
                }
            ]
        },
        // Menu Manage
        {
            id: 'menu',
            title: 'menu_menu_manage',
            type: 'collapse',
            icon: IconSubtask,

            children: [
                {
                    id: 'menu_admin',
                    title: 'menu_admin_menu',
                    type: 'item',
                    url: '/admin/menu',
                    target: false
                },
                {
                    id: 'menu_user',
                    title: 'menu_user_menu',
                    type: 'item',
                    url: '/user/menu',
                    target: false
                }
            ]
        },

        // Member Manage
        {
            id: 'member',
            title: 'menu_member_manage',
            type: 'collapse',
            icon: IconUsers,

            children: [
                {
                    id: 'member_admin',
                    title: 'menu_admin_manage',
                    type: 'item',
                    url: '/member/admin',
                    target: false
                },
                {
                    id: 'member_user',
                    title: 'menu_user_manage',
                    type: 'item',
                    url: '/member/user',
                    target: false
                }
            ]
        },
        // Community manage
        {
            id: 'community',
            title: 'menu_community_manage',
            type: 'collapse',
            icon: IconNotification,

            children: [
                {
                    id: 'community_notice',
                    title: 'menu_notice_board',
                    type: 'item',
                    url: '/community/notice',
                    target: false
                },
                {
                    id: 'community_faq',
                    title: 'menu_faq_board',
                    type: 'item',
                    url: '/community/faq',
                    target: false
                },
                {
                    id: 'community_qna',
                    title: 'menu_qna_board',
                    type: 'item',
                    url: '/community/qna',
                    target: false
                }
            ]
        }
    ]
};

const utilities = {
    id: 'utilities',
    title: 'parentmenu_title_utilities',
    type: 'group',
    children: [
        {
            id: 'settings',
            title: 'menu_settings',
            type: 'collapse',
            icon: IconSettings,
            children: [
                {
                    id: 'settings_content',
                    title: 'menu_content_settings',
                    type: 'item',
                    url: URL.CONTENT_FORM,
                    breadcrumbs: false
                },
                {
                    id: 'settings_role_manage',
                    title: 'menu_role_manage_settings',
                    type: 'item',
                    url: URL.ROLE_MANAGE_SETTING,
                    breadcrumbs: false
                },
                {
                    id: 'settings_site_info',
                    title: 'menu_site_info_settings',
                    type: 'item',
                    url: URL.SETTINGS_SITE_INFO,
                    breadcrumbs: false
                },
                {
                    id: 'settings_system_setting',
                    title: 'menu_system_setting_settings',
                    type: 'item',
                    url: URL.SETTINGS_SYSTEM_SETTING,
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'common',
            title: 'menu_common',
            type: 'collapse',
            icon: IconList,
            children: [
                {
                    id: 'common_code',
                    title: 'menu_common_code',
                    type: 'item',
                    url: '/common/code',
                    breadcrumbs: false
                },
                {
                    id: 'common_mail',
                    title: 'menu_mail_template',
                    type: 'item',
                    url: URL.COMMON_MAIL_TEMPLATE,
                    breadcrumbs: false
                },
                {
                    id: 'common_send',
                    title: 'menu_send_mail',
                    type: 'item',
                    url: URL.COMMON_SEND_MAIL,
                    breadcrumbs: false
                }
            ]
        }
    ]
};

const other = {
    id: 'contact',
    type: 'group',
    children: [
        {
            id: 'contact_us',
            title: 'menu_common_contact',
            type: 'item',
            url: 'https://www.itwizard.mn/',
            icon: IconHelp,
            external: true,
            target: true
        }
    ]
};

const menuItems = {
    items: [dashboard, pages, utilities, other]
};

export default menuItems;
