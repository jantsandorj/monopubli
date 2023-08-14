export const SERVER_URL = process.env.REACT_APP_EGOV_CONTEXT_URL; // REST Index 서버 Domain URL
export const AVAIL_LANG = [
    { code: 'en', name: 'English' },
    { code: 'kr', name: '한국어' }
];
export const config = {
    // basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
// like '/berry-material-react/react/default'
    basename: '/',
    defaultPath: '/dashboard/default',
    fontFamily: `'Pretendard', sans-serif`,
    borderRadius: 12
};
