import React from 'react';
import MainCard from 'components/cards/MainCard';
import { List } from 'components';
import AdminListTable from './AdminListTable';
import { useTranslation } from 'react-i18next';

function AdminList() {
    const { t } = useTranslation();
    return (
        <MainCard title={t('menu_admin_manage')}>
            <List>
                <AdminListTable />
            </List>
        </MainCard>
    );
}

export default AdminList;
