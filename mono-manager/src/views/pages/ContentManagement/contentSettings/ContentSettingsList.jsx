import React from 'react';
import MainCard from 'components/cards/MainCard';
import * as cmn from 'utils/functions/common';
import { List } from 'components';
import ContentSettingsListTable from './ContentSettingsListTable';

function ContentList() {
    return (
        <MainCard title={cmn.getTranslatedText('menu_content_manage')}>
            <List>
                <ContentSettingsListTable />
            </List>
        </MainCard>
    );
}

export default ContentList;
