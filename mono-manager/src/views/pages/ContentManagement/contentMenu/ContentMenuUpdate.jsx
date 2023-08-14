import React from 'react';
import { BackButton } from 'components/button/BackButton';
import MainCard from 'components/cards/MainCard';
import { Grid, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ContentMenuEdit from './ContentMenuEdit';
import { ListButton, SaveButton } from 'components';
import { useGetContentMenuQuery, useUpdateContentMenuMutation } from './ContentMenuApi';
import { useParams } from 'react-router';
import URL from 'api/url';

const ContentMenuUpdate = () => {
    const { t } = useTranslation();
    const { code } = useParams();
    const { data, isLoading } = useGetContentMenuQuery(code);

    return (
        <MainCard title={<BackButton text={t('act_modify')} />}>
            <Typography variant="body2" component={Paper}>
                <ContentMenuEdit data={data} isLoading={isLoading} mutation={useUpdateContentMenuMutation}>
                    <Grid item xs={6} textAlign="left">
                        <ListButton to={URL.CONTENT_MENU_DETAIL + '/' + code} />
                    </Grid>
                    <Grid item xs={6} textAlign="right">
                        <SaveButton />
                    </Grid>
                </ContentMenuEdit>
            </Typography>
        </MainCard>
    );
};

export default ContentMenuUpdate;
