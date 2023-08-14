import React from 'react';
import MainCard from 'components/cards/MainCard';
import CommonCodeListTable from './CommonCodeListTable';
import { List } from 'components';
import { useTranslation } from 'react-i18next';

function CommonCodeList() {
    const { t } = useTranslation();
    return (
        <MainCard title={t('menu_common_code')}>
            <List>
                <CommonCodeListTable />
            </List>
        </MainCard>
    );
}

export default CommonCodeList;
