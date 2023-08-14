import React from 'react';
import { BackButton } from 'components/button/BackButton';
import MainCard from 'components/cards/MainCard';
import { Grid, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ContentSettingsEdit from './ContentSettingsEdit';
import { ListButton, SaveButton } from 'components';
import { useGetContentSettingQuery, useUpdateContentSettingsMutation } from './ContentSettingsApi';
import { useParams } from 'react-router';
import URL from 'api/url';

const ContentSettingsUpdate = () => {
    const { t } = useTranslation();
    const { code } = useParams();
    const { data, isLoading } = useGetContentSettingQuery(code);

    return (
        <MainCard title={<BackButton text={t('act_modify')} />}>
            <Typography variant="body2" component={Paper}>
                <ContentSettingsEdit data={data} isLoading={isLoading} mutation={useUpdateContentSettingsMutation}>
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

export default ContentSettingsUpdate;
