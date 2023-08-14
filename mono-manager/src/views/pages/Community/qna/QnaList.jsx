import React from 'react';
import MainCard from 'components/cards/MainCard';
import { useTranslation } from 'react-i18next';
import { List } from 'components';
import QnaListTable from './QnaListTable';

const QnaList = () => {
    const { t } = useTranslation();
    return (
        <MainCard title={t('menu_qna_board')}>
            <List>
                <QnaListTable />
            </List>
        </MainCard>
    );
};

export default QnaList;
