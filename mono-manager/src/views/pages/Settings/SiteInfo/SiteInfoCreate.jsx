import React from 'react';
import MainCard from 'components/cards/MainCard';
import { Grid, Paper, Typography } from '@mui/material';
import { UpdateButton } from 'components';
import { useTranslation } from 'react-i18next';
import SiteInfoEdit from './SiteInfoEdit';
import { useGetSiteInfoQuery, useUpdateSiteInfoMutation } from './SiteInfoApi';

const SiteInfoCreate = () => {
    const { t } = useTranslation();
    const { data, isLoading } = useGetSiteInfoQuery();

    return (
        <MainCard title={t('site_info')}>
            <Typography variant="body2" component={Paper}>
                <SiteInfoEdit data={data?.content} mutation={useUpdateSiteInfoMutation} isLoading={isLoading}>
                    <Grid item xs={6} textAlign="left"></Grid>
                    <Grid item xs={6} textAlign="right">
                        <UpdateButton />
                    </Grid>
                </SiteInfoEdit>
            </Typography>
        </MainCard>
    );
};

export default SiteInfoCreate;
