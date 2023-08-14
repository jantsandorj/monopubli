import React from 'react';
import { BackButton } from 'components/button/BackButton';
import MainCard from 'components/cards/MainCard';
import { Grid, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ContentEdit from './ContentEdit';
import { ListButton, SaveButton } from 'components';
import { useCreateContentMutation } from './ContentApi';
import URL from 'api/url';

const ContentCreate = () => {
    const { t } = useTranslation();

    return (
        <MainCard title={<BackButton text={t('act_create')} />}>
            <Typography variant="body2" component={Paper}>
                <ContentEdit mutation={useCreateContentMutation} isLoading={false}>
                    <Grid item xs={6} textAlign="left">
                        <ListButton to={URL.CONTENT_LIST} />
                    </Grid>
                    <Grid item xs={6} textAlign="right">
                        <SaveButton loading={false} />
                    </Grid>
                </ContentEdit>
            </Typography>
        </MainCard>
    );
};

export default ContentCreate;
