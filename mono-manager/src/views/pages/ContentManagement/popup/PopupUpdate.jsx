import React from 'react';
import { BackButton } from 'components/button/BackButton';
import MainCard from 'components/cards/MainCard';
import { Grid, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PopupEdit from './PopupEdit';
import { ListButton, UpdateButton } from 'components';
import { useGetPopupQuery, useUpdatePopupMutation } from './PopupApi';
import { useParams } from 'react-router';
import URL from 'api/url';

const PopupUpdate = () => {
    const { t } = useTranslation();
    const { code } = useParams();
    const { data, isLoading } = useGetPopupQuery(code);
    return (
        <MainCard title={<BackButton text={t('act_modify')} />}>
            <Typography variant="body2" component={Paper}>
                <PopupEdit data={data} isLoading={isLoading} mutation={useUpdatePopupMutation}>
                    <Grid item xs={6} textAlign="left">
                        <ListButton to={URL.CONTENT_POPUP} />
                    </Grid>
                    <Grid item xs={6} textAlign="right">
                        <UpdateButton />
                    </Grid>
                </PopupEdit>
            </Typography>
        </MainCard>
    );
};

export default PopupUpdate;
