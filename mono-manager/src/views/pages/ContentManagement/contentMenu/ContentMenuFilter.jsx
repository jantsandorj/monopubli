import React from 'react';
import { Filter } from 'components/list';
import { Grid, Typography } from '@mui/material';
import { SearchInput } from 'components';
import { useTranslation } from 'react-i18next';
import CommonCodeSelect from 'components/select/CommonCodeSelect';

const ContentMenuFilter = () => {
    const { t } = useTranslation();

    return (
        <Filter>
            <Grid container alignItems="center" spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={1}>
                    <Typography variant="h4" align="center">
                        {t('condition')}
                    </Typography>
                </Grid>
                <Grid item xs={7}>
                    <CommonCodeSelect groupName="USE_YN" name="useYn" label={t('Use yn')} all />
                </Grid>

                <Grid item xs={4}></Grid>
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
export default ContentMenuFilter;
