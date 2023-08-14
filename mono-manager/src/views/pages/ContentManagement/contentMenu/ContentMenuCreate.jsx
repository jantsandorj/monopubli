import React from 'react';
import { BackButton } from 'components/button/BackButton';
import MainCard from 'components/cards/MainCard';
import { Grid, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ContentMenuEdit from './ContentMenuEdit';
import { ListButton, SaveButton } from 'components';
import { useCreateContentMenuMutation } from './ContentMenuApi';
import URL from 'api/url';

const ContentMenuCreate = () => {
    const { t } = useTranslation();
    return (
        <MainCard title={<BackButton text={t('act_create')} />}>
            <Typography variant="body2" component={Paper}>
                <ContentMenuEdit mutation={useCreateContentMenuMutation}>
                    <Grid item xs={6} textAlign="left">
                        <ListButton to={URL.CONTENT_Menu} />
                    </Grid>
                    <Grid item xs={6} textAlign="right">
                        <SaveButton />
                    </Grid>
                </ContentMenuEdit>
            </Typography>
        </MainCard>
    );
};

export default ContentMenuCreate;
