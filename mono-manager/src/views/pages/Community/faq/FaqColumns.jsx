import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const useFaqBoardColumns = () => {
    const { t } = useTranslation();
    const getColumns = (data) => {
        return [
            {
                name: t('select'),
                cell: (row) => <input type="checkbox" />,
                center: true,
                width: '80px'
            },
            {
                name: t('label_index'),
                selector: (row, index) => data?.totalElements - data?.pageable?.offset - index,
                center: true,
                width: '80px'
            },
            {
                name: t('label_category'),
                selector: (row) => row.categoryCd,
                center: true,
                width: '150px'
            },
            {
                name: t('label_title'),
                selector: (row) => row.question
            },
            {
                name: t('label_created_by'),
                selector: (row) => row.createdBy,
                center: true,
                width: '150px'
            },
            {
                name: t('exposure_yn'),
                selector: (row) => (row.exposureYn === 'Y' ? <Typography>{t('use')}</Typography> : <Typography>{t('unused')}</Typography>),
                center: true,
                width: '80px'
            },
            {
                name: t('label_views'),
                selector: (row) => row.viewCnt,
                center: true,
                width: '80px'
            },
            {
                name: t('create_dt'),
                selector: (row) => row?.createdDate,
                center: true,
                width: '140px'
            }
        ];
    };

    return { getColumns };
};

export default useFaqBoardColumns;
