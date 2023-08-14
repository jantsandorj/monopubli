import React from 'react';
import { BackButton } from 'components/button/BackButton';
import MainCard from 'components/cards/MainCard';
import { Grid, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import FaqEdit from './FaqEdit';
import { ListButton, UpdateButton } from 'components';
import { useGetFaqQuery, useUpdateFaqMutation } from './FaqApi';
import { useParams } from 'react-router';
import URL from 'api/url';

const FaqUpdate = () => {
    const { t } = useTranslation();
    const { code } = useParams();
    const { data, isLoading } = useGetFaqQuery(code);
    return (
        <MainCard title={<BackButton text={t('act_modify')} />}>
            <Typography variant="body2" component={Paper}>
                <FaqEdit data={data} isLoading={isLoading} mutation={useUpdateFaqMutation}>
                    <Grid item xs={6} textAlign="left">
                        <ListButton to={URL.COMMUNITY_FAQ} />
                    </Grid>
                    <Grid item xs={6} textAlign="right">
                        <UpdateButton />
                    </Grid>
                </FaqEdit>
            </Typography>
        </MainCard>
    );
};

export default FaqUpdate;
