import React from 'react';
import { BackButton } from 'components/button/BackButton';
import MainCard from 'components/cards/MainCard';
import { Grid, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PopupEdit from './PopupEdit';
import { ListButton, SaveButton } from 'components';
import { useCreatePopupMutation } from './PopupApi';
import URL from 'api/url';

const PopupCreate = () => {
    const { t } = useTranslation();

    return (
        <MainCard title={<BackButton text={t('act_create')} />}>
            <Typography variant="body2" component={Paper}>
                <PopupEdit mutation={useCreatePopupMutation}>
                    <Grid item xs={6} textAlign="left">
                        <ListButton to={URL.CONTENT_POPUP} />
                    </Grid>
                    <Grid item xs={6} textAlign="right">
                        <SaveButton />
                    </Grid>
                </PopupEdit>
            </Typography>
        </MainCard>
    );
};
export default PopupCreate;
