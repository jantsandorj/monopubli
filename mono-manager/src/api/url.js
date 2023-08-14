const URL = {
    //COMMON
    MAIN: '/', //메인페이지   

    LOGIN: '/login', //로그인
    LOGOUT: '/logout',
    ERROR: '/error', //로그인
    FORGET_PASSWORD: '/pages/forgetpass',
    CHANGE_PASSWORD: '/web/change/password',

    //ABOUT
    ABOUT: '/about', //사이트소개   
    ABOUT_SITE: '/about/site', // 사이트소개/소개
    ABOUT_HISTORY: '/about/history', // 사이트소개/연혁
    ABOUT_ORGANIZATION: '/about/organization', // 사이트소개/조직소개
    ABOUT_LOCATION: '/about/location', // 사이트소개/찾아오시는길

    //INTRO
    INTRO: '/intro', //정보마당
    INTRO_WORKS: '/intro/works', // 정보마당/주요사업소개
    INTRO_SERVICE: '/intro/service', // 정보마당/주요서비스소개

    //SUPPORT
    SUPPORT: '/support', // 고객지원
    SUPPORT_DOWNLOAD: '/support/download', // 고객지원/자료실
    SUPPORT_DOWNLOAD_DETAIL: '/support/download/detail', // 고객지원/자료실/상세
    SUPPORT_DOWNLOAD_CREATE: '/support/download/create', // 고객지원/자료실/등록
    SUPPORT_QNA: '/support/qna', // 고객지원/묻고답하기
    SUPPORT_QNA_DETAIL: '/support/qna/detail', // 고객지원/묻고답하기/상세
    SUPPORT_APPLY: '/support/apply', // 고객지원/서비스신청

    //INFORM
    INFORM: '/inform', // 알림마당 
    INFORM_DAILY: '/inform/daily', // 알림마당/오늘의행사
    INFORM_DAILY_DETAIL: '/inform/daily/detail', // 알림마당/오늘의행사상세
    INFORM_WEEKLY: '/inform/weekly', // 알림마당/금주의행사
    INFORM_WEEKLY_DETAIL: '/inform/weekly/detail', // 알림마당/금주의행사상세
    INFORM_NOTICE: '/inform/notice', // 알림마당/공지사항
    INFORM_NOTICE_DETAIL: '/inform/notice/detail', // 알림마당/공지사항상세
    INFORM_NOTICE_CREATE: '/inform/notice/create', // 알림마당/공지사항등록
    INFORM_NOTICE_MODIFY: '/inform/notice/modify', // 알림마당/공지사항수정
    INFORM_NOTICE_REPLY: '/inform/notice/reply', // 알림마당/공지사항답글
    INFORM_GALLERY: '/inform/gallery', // 알림마당/사이트갤러리
    INFORM_GALLERY_DETAIL: '/inform/gallery/detail', // 알림마당/사이트갤러리상세
    INFORM_GALLERY_CREATE: '/inform/gallery/create', // 알림마당/사이트갤러리등록
    INFORM_GALLERY_MODIFY: '/inform/gallery/modify', // 알림마당/사이트갤러리수정
    INFORM_GALLERY_REPLY: '/inform/gallery/reply', // 알림마당/사이트갤러리답글

    //ADMIN
    ADMIN: '/admin', // 사이트관리
    ADMIN_SCHEDULE: '/admin/schedule', // 사이트관리/일정관리
    ADMIN_SCHEDULE_DETAIL: '/admin/schedule/detail', // 사이트관리/일정관리상세
    ADMIN_SCHEDULE_CREATE: '/admin/schedule/create', // 사이트관리/일정관리생성
    ADMIN_SCHEDULE_MODIFY: '/admin/schedule/modify', // 사이트관리/일정관리수정

    ADMIN_TEMPLATE: '/admin/template', // 사이트관리/게시판템플릿관리 목록
    ADMIN_TEMPLATE_CREATE: '/admin/template/create', // 사이트관리/게시판템플릿관리 등록
    ADMIN_TEMPLATE_MODIFY: '/admin/template/modify', // 사이트관리/게시판템플릿관리 상세/수정

    ADMIN_BOARD: '/admin/board', // 사이트관리/게시판생성관리 목록
    ADMIN_BOARD_DETAIL: '/admin/board/detail', // 사이트관리/게시판생성관리 상세
    ADMIN_BOARD_CREATE: '/admin/board/create', // 사이트관리/게시판생성관리 등록
    ADMIN_BOARD_MODIFY: '/admin/board/modify', // 사이트관리/게시판생성관리 상세/수정

    ADMIN_USAGE: '/admin/usage', // 사이트관리/게시판사용관리 목록
    ADMIN_USAGE_DETAIL: '/admin/usage/detail', // 사이트관리/게시판사용관리 상세
    ADMIN_USAGE_CREATE: '/admin/usage/create', // 사이트관리/게시판사용관리 등록
    ADMIN_USAGE_MODIFY: '/admin/usage/modify', // 사이트관리/게시판사용관리 상세/수정

    ADMIN_NOTICE: '/admin/notice/', // 사이트관리/공지사항관리 목록
    ADMIN_NOTICE_DETAIL: '/admin/notice/detail', // 사이트관리/공지사항관리 상세
    ADMIN_NOTICE_CREATE: '/admin/notice/create', // 사이트관리/공지사항관리 등록
    ADMIN_NOTICE_MODIFY: '/admin/notice/modify', // 사이트관리/공지사항관리 수정
    ADMIN_NOTICE_REPLY: '/admin/notice/reply', // 사이트관리/공지사항관리 답글 등록

    ADMIN_GALLERY: '/admin/gallery', // 사이트관리/사이트갤러리관리
    ADMIN_GALLERY_DETAIL: '/admin/gallery/detail', // 사이트관리/사이트갤러리관리 상세
    ADMIN_GALLERY_CREATE: '/admin/gallery/create', // 사이트관리/사이트갤러리관리 등록
    ADMIN_GALLERY_MODIFY: '/admin/gallery/modify', // 사이트관리/사이트갤러리관리 수정
    ADMIN_GALLERY_REPLY: '/admin/gallery/reply', // 사이트관리/사이트갤러리관리 답글 등록

    //MANAGER - CMS MANAGER
    CONTENT: '/manage/content', // 사이트관리/MODEL
    CONTENT_DETAIL: '/manage/content/detail', // 사이트관리/MODEL 상세
    CONTENT_CREATE: '/manage/content/create', // 사이트관리/MODEL 등록
    CONTENT_MODIFY: '/manage/content/modify', // 사이트관리/MODEL 수정        
    CONTENT_SETTINGS: '/manage/content/settings', // 사이트관리/MODEL 목록
    CONTENT_MENU: '/manage/content/menu', // 사이트관리/MODEL 
    CONTENT_MENU_MODIFY: '/manage/content/menu/modify', // 사이트관리/MODEL 목록
    CONTENT_MENU_DETAIL: '/manage/content/menu/detail', // 사이트관리/MODEL 목록
    CONTENT_SETTINGS_DETAIL: '/manage/content/settings/detail', // 사이트관리/MODEL 상세
    CONTENT_SETTINGS_CREATE: '/manage/content/settings/create', // 사이트관리/MODEL 등록
    CONTENT_SETTINGS_MODIFY: '/manage/content/settings/modify', // 사이트관리/MODEL 수정   

    CONTENT_FORM: '/manage/content/form', // 사이트관리/MODEL 목록
    CONTENT_FORM_DETAIL: '/manage/content/form/detail', // 사이트관리/MODEL 상세
    CONTENT_FORM_CREATE: '/manage/content/form/create', // 사이트관리/MODEL 등록
    CONTENT_FORM_MODIFY: '/manage/content/form/modify', // 사이트관리/MODEL 수정   

    CONTENT_DATA: '/manage/content/data', // 사이트관리/MODEL 목록
    CONTENT_DATA_DETAIL: '/manage/content/data/detail', // 사이트관리/MODEL 상세
    CONTENT_DATA_CREATE: '/manage/content/data/create', // 사이트관리/MODEL 등록
    CONTENT_DATA_MODIFY: '/manage/content/data/modify', // 사이트관리/MODEL 수정   

    CONTENT_BANNER: '/manage/banner',
    CONTENT_BANNER_DETAIL: '/manage/banner/detail',
    CONTENT_BANNER_CREATE: '/manage/banner/create',
    CONTENT_BANNER_MODIFY: '/manage/banner/modify',

    CONTENT_POPUP: '/manage/popup',
    CONTENT_POPUP_DETAIL: '/manage/popup/detail',
    CONTENT_POPUP_CREATE: '/manage/popup/create',
    CONTENT_POPUP_MODIFY: '/manage/popup/modify',

    BANNER: "/manage/banner",
    BANNER_DETAIL: "/manage/banner/detail",
    BANNER_MODIFY: "/manage/banner/modify",
    BANNER_CREATE: "/manage/banner/create",

    WORKER: "/manage/worker",
    WORKER_DETAIL: "/manage/worker/detail",
    WORKER_MODIFY: "/manage/worker/modify",
    WORKER_CREATE: "/manage/worker/create",

    //MEMBER 
    MEMBER_ADMIN: '/member/admin', // 멤버
    MEMBER_ADMIN_DETAIL: '/member/admin/detail', // 사이트관리/MODEL 상세
    MEMBER_ADMIN_CREATE: '/member/admin/create', // 사이트관리/MODEL 등록
    MEMBER_ADMIN_MODIFY: '/member/admin/modify', // 사이트관리/MODEL 수정  

    MEMBER_USER: '/member/user', // 멤버
    MEMBER_USER_DETAIL: '/member/user/detail', // 사이트관리/MODEL 상세
    MEMBER_USER_CREATE: '/member/user/create', // 사이트관리/MODEL 등록
    MEMBER_USER_MODIFY: '/member/user/modify', // 사이트관리/MODEL 수정   

    // COMMUNITY
    COMMUNITY_NOTICE: '/community/notice',
    COMMUNITY_NOTICE_DETAIL: '/community/notice/detail',
    COMMUNITY_NOTICE_CREATE: '/community/notice/create',
    COMMUNITY_NOTICE_MODIFY: '/community/notice/modify',

    // COMMUNITY - FREE BOARD
    COMMUNITY_FREE: '/community/free',
    COMMUNITY_FREE_DETAIL: '/community/free/detail',
    COMMUNITY_FREE_CREATE: '/community/free/create',
    COMMUNITY_FREE_MODIFY: '/community/free/modify',

    //MEMBER - ADMIN
    COMMON_CODE: '/common/code',
    // COMMON_CODE_DETAIL          : '/common/code/detail',
    // COMMON_CODE_CREATE          : '/common/code/create',
    // COMMON_CODE_MODIFY          : '/common/code/modify',

    COMMON_MAIL_TEMPLATE: '/common/mail',
    COMMON_MAIL_TEMPLATE_CREATE: '/common/mail/create',
    COMMON_MAIL_TEMPLATE_EDIT: '/common/mail/edit',

    COMMON_SEND_MAIL: '/common/send',
    COMMON_SEND_MAIL_CREATE: '/common/send/create',
    COMMON_SEND_MAIL_EDIT: '/common/send/edit',
    // COMMUNITY - QNA
    COMMUNITY_QNA: '/community/qna',
    COMMUNITY_QNA_DETAIL: '/community/qna/detail',
    COMMUNITY_QNA_CREATE: '/community/qna/create',
    COMMUNITY_QNA_MODIFY: '/community/qna/modify',

    // COMMUNITY - FAQ
    COMMUNITY_FAQ: '/community/faq',
    COMMUNITY_FAQ_DETAIL: '/community/faq/detail',
    COMMUNITY_FAQ_CREATE: '/community/faq/create',
    COMMUNITY_FAQ_MODIFY: '/community/faq/modify',

    USER_MENU: '/user/menu', // 사이트관리/TEMPLATE
    ADMIN_MENU: '/admin/menu', // 사이트관리/TEMPLATE

    MANAGER: '/manager', // 사이트관리/TEMPLATE
    TEMPLATE: '/template', // 사이트관리/TEMPLATE 목록
    TEMPLATE_DETAIL: '/template/detail', // 사이트관리/TEMPLATE 상세
    TEMPLATE_CREATE: '/template/create', // 사이트관리/TEMPLATE 등록
    TEMPLATE_MODIFY: '/template/modify', // 사이트관리/TEMPLATE 수정    

    // SETTINGS
    SETTINGS_SITE_INFO: '/settings/siteinfo', //
    SETTINGS_SITE_INFO_CREATE: '/settings/siteinfo/create', //
    SETTINGS_SITE_INFO_MODIFY: '/settings/siteinfo/modify', 
    
    // SETTINGS - system setting
    SETTINGS_SYSTEM_SETTING: '/settings/systemsetting', //
    
    // SETTINGS - role manage
    ROLE_MANAGE_SETTING: '/settings/rolemanage', //

    //ACCOUNT SETTINGS
    ACCOUNT_SETTINGS: '/member/accountsettings',

    //MEMBERSHIP
    MEMBERSHIP_LIST: '/manage/membership',
    MEMBERSHIP_CREATE: '/manage/membership/create',
    MEMBERSHIP_MODIFY: '/manage/membership/modify',

    //PROJECT
    PROJECT_LIST:   '/project/manage',
    PROJECT_CREATE: '/project/manage/create',
    PROJECT_MODIFY: '/project/manage/modify',

    //CONSULTING
    CONSULTING_LIST:   '/consulting',
    CONSULTING_CREATE: '/consulting/create',
    CONSULTING_MODIFY: '/consulting/modify',
}

export default URL; 