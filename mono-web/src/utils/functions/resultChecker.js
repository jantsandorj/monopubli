import Snackbar from 'components/Snackbar';
import { t } from 'i18next';

const resultChecker = ({ res, redirect, type }) => {
    if (res?.data) {
        if (res.data.status === 'success' || res.data.status === 200) {
            Snackbar.success(t(res.data.message));
            redirect();
        } else {
            if (res.data.message?.includes('duplicate')) {
                Snackbar.warning(t(res.data.message));
            } else {
                Snackbar.error(t(res.data.message));
            }
        }
    }
    if (res?.error) {
        switch (type) {
            case 'delete':
                Snackbar.error(t('error.delete'));
                break;
            case 'insert':
                Snackbar.error(t('error.insert'));
                break;
            case 'update':
                Snackbar.error(t('error.update'));
                break;
            default:
                Snackbar.error('System error');
                break;
        }
    }
};

export default resultChecker;
