import React from 'react';
import { BackButton } from 'components/button/BackButton';
import MainCard from 'components/cards/MainCard';
import { Grid, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import QnaEdit from './QnaEdit';
import { ListButton, SaveButton } from 'components';
import { useGetQnaQuery, useUpdateQnaMutation } from './QnaApi';
import { useParams } from 'react-router';
import URL from 'api/url';

const QnaCreate = () => {
    const { t } = useTranslation();
    const { code } = useParams();
    const { data, isLoading } = useGetQnaQuery(code);
    return (
        <MainCard title={<BackButton text={t('act_modify')} />}>
            <Typography variant="body2" component={Paper}>
                <QnaEdit data={data} isLoading={isLoading} mutation={useUpdateQnaMutation}>
                    <Grid item xs={6} textAlign="left">
                        <ListButton to={URL.COMMUNITY_QNA} />
                    </Grid>
                    <Grid item xs={6} textAlign="right">
                        <SaveButton />
                    </Grid>
                </QnaEdit>
            </Typography>
        </MainCard>
    );
};

export default QnaCreate;
