import React from 'react';
import MainCard from 'components/cards/MainCard';
import * as cmn from 'utils/functions/common';
import { List } from 'components';
import ContentMenuListTable from './ContentMenuListTable';

function ContentList() {
    return (
        <MainCard title={cmn.getTranslatedText('menu_content_manage')}>
            <List>
                <ContentMenuListTable />
            </List>
        </MainCard>
    );
}

export default ContentList;
