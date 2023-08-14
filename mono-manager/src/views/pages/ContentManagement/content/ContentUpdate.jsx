import React from 'react';
import { BackButton } from 'components/button/BackButton';
import MainCard from 'components/cards/MainCard';
import { Grid, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ContentEdit from './ContentEdit';
import { ListButton, UpdateButton } from 'components';
import { useGetContentsQuery, useUpdateContentMutation } from './ContentApi';
import { useParams } from 'react-router';
import URL from 'api/url';

const ContentUpdate = () => {
    const { t } = useTranslation();
    const { code } = useParams();
    const { data, isLoading } = useGetContentsQuery(code);

    return (
        <MainCard title={<BackButton text={t('act_modify')} />}>
            <Typography variant="body2" component={Paper}>
                <ContentEdit data={data} isLoading={isLoading} mutation={useUpdateContentMutation}>
                    <Grid item xs={6} textAlign="left">
                        <ListButton to={URL.CONTENT} />
                    </Grid>
                    <Grid item xs={6} textAlign="right">
                        <UpdateButton />
                    </Grid>
                </ContentEdit>
            </Typography>
        </MainCard>
    );
};

export default ContentUpdate;
