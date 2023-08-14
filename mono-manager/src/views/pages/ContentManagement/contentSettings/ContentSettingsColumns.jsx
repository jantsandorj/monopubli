import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ListContextWrapper } from 'components/list/ListContextWrapper';
import { Typography } from '@mui/material';

const useContentSettingsColumns = () => {
    const { paginationInfo } = useContext(ListContextWrapper);
    const { t } = useTranslation();
    const getColumns = () => {
        return [
            {
                name: t('select'),
                selector: (row, index) => (+paginationInfo.size - 1) * +paginationInfo.page + index + 1,
                center: true,
                width: '100px'
            },
            {
                name: t('label_code'),
                selector: (row) => row.code,
                width: '200px'
            },
            {
                name: t('label_title'),
                selector: (row) => row.title
            },
            {
                name: t('label_content_type'),
                selector: (row) => row.contentType,
                sortable: true,
                sortField: 'name',
                center: true,
                width: '200px'
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
export default useContentSettingsColumns;
