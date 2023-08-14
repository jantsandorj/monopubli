import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const useNoticeBoardColumns = () => {
    const { t } = useTranslation();
    const getColumns = (data) => {
        return [
            {
                name: t('select'),
                cell: (row) => <input type="checkbox" />,
                center: true,
                width: '100px'
            },
            {
                name: t('label_index'),
                selector: (row, index) => data?.totalElements - data?.pageable?.offset - index,
                center: true
            },
            {
                name: t('label_question'),
                selector: (row) => row.title
            },
            {
                name: t('label_creater'),
                selector: (row) => row.username
            },
            {
                name: t('label_is_secret'),
                selector: (row) => (row.isSecret === 'Y' ? t('label_secret') : t('label_general'))
            },
            {
                name: t('label_is_answered'),
                selector: (row) =>
                    row.isAnswered === 'Y' ? (
                        <Typography style={{ color: '#5CBAFF' }}>{t('label_answered')}</Typography>
                    ) : (
                        <Typography style={{ color: '#FFA1A1' }}>{t('label_unanswered')}</Typography>
                    )
            },
            {
                name: t('create_dt'),
                selector: (row) => row.createdDate
            }
        ];
    };

    return { getColumns };
};

export default useNoticeBoardColumns;
