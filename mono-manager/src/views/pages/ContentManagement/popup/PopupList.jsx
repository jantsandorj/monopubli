import React from 'react';
import MainCard from 'components/cards/MainCard';
import { List } from 'components';
import { useTranslation } from 'react-i18next';
import PopupListTable from './PopupListTable';

function PopupList() {
    const { t } = useTranslation();
    return (
        <MainCard title={t('menu_popup_manage')}>
            <List>
                <PopupListTable />
            </List>
        </MainCard>
    );
}
export default PopupList;
