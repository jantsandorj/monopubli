import React from 'react';
import MainCard from 'components/cards/MainCard';
import { Grid, Paper, Typography } from '@mui/material';
import { UpdateButton } from 'components';
import { useTranslation } from 'react-i18next';
import AccountSettingsEdit from './AccountSettingsEdit';
import AccountSettingsImg from './AccountSettingsImg';
import { useGetAccountSettingsQuery, useUpdateAccountSettingsMutation, useUpdateAccountSettingsImgMutation } from './AccountSettingsApi';

const AccountSettingsCreate = () => {
    const { t } = useTranslation();
    const seq = JSON.parse(localStorage.getItem('user'))?.amdinSeq;

    const { data } = useGetAccountSettingsQuery(seq);
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <MainCard title={t('system_setting')}>
                        <Typography variant="body2" component={Paper}>
                            <AccountSettingsEdit data={data} mutation={useUpdateAccountSettingsMutation}>
                                <Grid item xs={6} textAlign="left"></Grid>
                                <Grid item xs={6} textAlign="right">
                                    <UpdateButton />
                                </Grid>
                            </AccountSettingsEdit>
                        </Typography>
                    </MainCard>
                </Grid>
                <Grid item xs={4}>
                    <MainCard title={t('profile_phto')}>
                        <Typography variant="body2" component={Paper}>
                            <AccountSettingsImg data={data?.content} mutation={useUpdateAccountSettingsImgMutation}>
                                <Grid item xs={6} textAlign="left" />
                                <Grid item xs={12} textAlign="right">
                                    <UpdateButton />
                                </Grid>
                            </AccountSettingsImg>
                        </Typography>
                    </MainCard>
                </Grid>
            </Grid>
        </>
    );
};

export default AccountSettingsCreate;
