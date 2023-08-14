import React from 'react';
import { BackButton } from 'components/button/BackButton';
import MainCard from 'components/cards/MainCard';
import { Grid, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import FaqEdit from './FaqEdit';
import { ListButton, SaveButton } from 'components';
import { useCreateFaqMutation } from './FaqApi';
import URL from 'api/url';
import CODE from 'utils/statics/code';

const FaqCreate = () => {
    const { t } = useTranslation();

    return (
        <MainCard title={<BackButton text={t(CODE.MODE_CREATE)} />}>
            <Typography variant="body2" component={Paper}>
                <FaqEdit mutation={useCreateFaqMutation}>
                    <Grid item xs={6} textAlign="left">
                        <ListButton to={URL.COMMUNITY_FAQ} />
                    </Grid>
                    <Grid item xs={6} textAlign="right">
                        <SaveButton />
                    </Grid>
                </FaqEdit>
            </Typography>
        </MainCard>
    );
};

export default FaqCreate;
