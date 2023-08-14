import { useTranslation } from 'react-i18next';
import { Button, Checkbox, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const useAdminColumns = () => {
    const { t } = useTranslation();
    const adminLogViewList = async () => {};

    const getColumns = (openFieldMenu, showFieldMenu, data) => {
        return [
            {
                name: t('label_numbering'),
                selector: (row, index) => data?.totalElements - data?.pageable?.offset - index,
                center: true,
                width: '80px'
            },
            {
                name: t('email'),
                selector: (row) => row.username,
                center: true
            },
            {
                name: t('label_name'),
                selector: (row) => row.fullname,
                center: true
            },
            {
                name: t('admin_role'),
                selector: (row) => row.authorCd,
                center: true
            },

            {
                name: t('label_log'),
                selector: (row) => {
                    return (
                        <>
                            <Button
                                disableElevation
                                variant="contained"
                                style={{
                                    minWidth: '80px',
                                    borderRadius: '10px',
                                    padding: '2px'
                                }}
                                onClick={adminLogViewList}
                            >
                                {t('view')}
                            </Button>
                        </>
                    );
                },
                center: true
            },
            {
                name: t('state'),
                selector: (row) => <Checkbox disabled={true} checked={row.useYn === 'Y'} />,
                center: true,
                width: '150px'
            },
            {
                name: t('last_login_dt'),
                selector: (row) => row.lastLoginDate,
                center: true
            },

            {
                name: t('label_action'),
                selector: (row) => (
                    <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={openFieldMenu ? 'long-menu' : undefined}
                        aria-expanded={openFieldMenu ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={(e) => showFieldMenu(e, row)}
                    >
                        <MoreVertIcon />
                    </IconButton>
                ),
                center: true,
                width: '100px'
            }
        ];
    };

    return { getColumns };
};

export default useAdminColumns;
