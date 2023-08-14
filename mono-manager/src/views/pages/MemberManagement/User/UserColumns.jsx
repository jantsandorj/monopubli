import { useTranslation } from 'react-i18next';
import { Checkbox, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const useUserColumns = () => {
    const { t } = useTranslation();
    const getColumns = (openFieldMenu, showFieldMenu, data) => {
        return [
            {
                name: t('sequence_number'),
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
                name: t('join_type'),
                selector: (row) => row.job,
                center: true,
                width: '300px'
            },
            {
                name: t('gender'),
                selector: (row) => (row.gender === 'M' ? t('male') : t('female')),
                center: true,
                width: '150px'
            },
            {
                name: t('state'),
                selector: (row) => <Checkbox disabled={true} checked={row.useYn === 'Y'} />,
                center: true,
                width: '150px'
            },
            {
                name: t('join_dt'),
                selector: (row) => row.formattedCreateDate,
                center: true,
                width: '200px'
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

export default useUserColumns;
