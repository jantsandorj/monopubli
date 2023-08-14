import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import URL from 'api/url';
import MainCard from 'components/cards/MainCard';
import { ListButton, SaveButton } from 'components';
import ContentSettingsEdit from './ContentSettingsEdit';
import { BackButton } from 'components/button/BackButton';
import { useCreateContentSettingsMutation } from './ContentSettingsApi';

const ContentSettingsCreate = () => {
    const { t } = useTranslation();
    return (
        <MainCard title={<BackButton text={t('act_create')} />}>
            <Typography variant="body2" component={Paper}>
                <ContentSettingsEdit mutation={useCreateContentSettingsMutation}>
                    <Grid item xs={6} textAlign="left">
                        <ListButton to={URL.CONTENT_SETTINGS} />
                    </Grid>
                    <Grid item xs={6} textAlign="right">
                        <SaveButton />
                    </Grid>
                </ContentSettingsEdit>
            </Typography>
        </MainCard>
    );
};

export default ContentSettingsCreate;
