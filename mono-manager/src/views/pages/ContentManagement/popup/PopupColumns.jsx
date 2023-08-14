import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const usePopupColumns = () => {
    const { t } = useTranslation();
    const getColumns = (data) => {
        return [
            {
                name: t('sequence_number'),
                selector: (row, index) => data?.totalElements - data?.pageable?.offset - index,
                center: true,
                width: '80px'
            },
            {
                name: t('media_type'),
                selector: (row) => row.popupTypeNm,
                sortable: true,
                sortField: 'popup_type',
                center: true,
                width: '160px'
            },
            {
                name: t('popup_name'),
                selector: (row) => row.subject
            },
            {
                name: t('ref_start_dt'),
                selector: (row) => row.startDate,
                center: true,
                width: '120px'
            },
            {
                name: t('ref_end_dt'),
                selector: (row) => row.endDate,
                center: true,
                width: '120px'
            },
            {
                name: t('exposure_seq'),
                selector: (row) => row.sortNo,
                center: true,
                width: '100px'
            },
            {
                name: t('label_use_yn'),
                selector: (row) => (row.useYn === 'Y' ? <Typography>{t('use')}</Typography> : <Typography>{t('unused')}</Typography>),
                center: true,
                width: '100px'
            }
        ];
    };
    return { getColumns };
};
export default usePopupColumns;
