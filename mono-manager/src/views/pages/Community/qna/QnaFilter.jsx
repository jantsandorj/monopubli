import React from 'react';
import { useTranslation } from 'react-i18next';
import { Filter } from 'components/list';
import { SearchInput } from 'components';
import { Grid, Typography } from '@mui/material';
import CommonCodeSelect from 'components/select/CommonCodeSelect';

const QnaFilter = () => {
    const { t } = useTranslation();

    return (
        <Filter>
            <Grid container alignItems="center" spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={1}>
                    <Typography variant="h4" align="center">
                        {t('condition')}
                    </Typography>
                </Grid>
                <Grid item xs={3.66}>
                    <CommonCodeSelect groupName="QNA_R" name="isAnswered" label={t('Question')} all />
                </Grid>
                <Grid item xs={3.66}></Grid>
                <Grid item xs={3.66}></Grid>
                <Grid item xs={1}>
                    <Typography variant="h4" align="center">
                        {t('search')}
                    </Typography>
                </Grid>
                <Grid item xs={11}>
                    <SearchInput />
                </Grid>
            </Grid>
        </Filter>
    );
};

export default QnaFilter;
