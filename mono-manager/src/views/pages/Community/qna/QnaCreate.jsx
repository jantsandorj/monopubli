import React, { useContext, useEffect } from 'react';
import { BackButton } from 'components/button/BackButton';
import MainCard from 'components/cards/MainCard';
import { Grid, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import QnaEdit from './QnaEdit';
import { ListButton, SaveButton } from 'components';
import { useCreateQnaMutation } from './QnaApi';
import URL from 'api/url';
import { LoadingContext } from 'App';
import CODE from 'utils/statics/code';

const QnaCreate = () => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useContext(LoadingContext);

    useEffect(() => {
        //Runs only on the first render
        setIsLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <MainCard title={<BackButton text={t(CODE.MODE_CREATE)} />}>
            <Typography variant="body2" component={Paper}>
                <QnaEdit mutation={useCreateQnaMutation} isLoading={isLoading}>
                    <Grid item xs={6} textAlign="left">
                        <ListButton to={URL.COMMUNITY_QNA} />
                    </Grid>
                    <Grid item xs={6} textAlign="right" loading={isLoading}>
                        <SaveButton />
                    </Grid>
                </QnaEdit>
            </Typography>
        </MainCard>
    );
};

export default QnaCreate;
