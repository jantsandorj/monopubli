import React from 'react';
import MainCard from 'components/cards/MainCard';
import * as cmn from 'utils/functions/common';
import ContentListTable from './ContentListTable';
import { List } from 'components';

function ContentList() {
    return (
        <MainCard title={cmn.getTranslatedText('menu_content_manage')}>
            <List>
                <ContentListTable />
            </List>
        </MainCard>
    );
}

export default ContentList;
