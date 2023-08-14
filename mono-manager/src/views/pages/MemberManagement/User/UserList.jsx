import React from 'react';
import MainCard from 'components/cards/MainCard';
import { List } from 'components';
import UserListTable from './UserListTable';
import { useTranslation } from 'react-i18next';

function UserList() {
    const { t } = useTranslation();

    return (
        <MainCard title={t('menu_user_manage')}>
            <List>
                <UserListTable />
            </List>
        </MainCard>
    );
}

export default UserList;
