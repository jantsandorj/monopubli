import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ListContextWrapper } from 'components/list/ListContextWrapper';
import { Typography } from '@mui/material';

const useContentMenuColumns = () => {
    const { paginationInfo } = useContext(ListContextWrapper);
    const { t } = useTranslation();
    const getColumns = () => {
        return [
            {
                name: t('label_index'),
                selector: (row, index) => (+paginationInfo.size - 1) * +paginationInfo.page + index + 1,
                center: true,
                width: '100px'
            },
            {
                name: t('menu_id'),
                selector: (row) => row.menuId,
                center: true,
                width: '200px'
            },
            {
                name: t('menu_name'),
                selector: (row) => row.menuName
            },
            {
                name: t('Use yn'),
                selector: (row) => (row.useYn === 'Y' ? <Typography>{t('use')}</Typography> : <Typography>{t('unused')}</Typography>),
                center: true,
                width: '200px'
            }
        ];
    };
    return { getColumns };
};
export default useContentMenuColumns;
