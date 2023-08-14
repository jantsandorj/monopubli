import React from 'react';
import { useTranslation } from 'react-i18next';
import { Filter } from 'components/list';
import { SearchInput } from 'components';
import { Grid, Typography } from '@mui/material';
import CommonCodeSelect from 'components/select/CommonCodeSelect';

const PopupFilter = () => {
    const { t } = useTranslation();

    return (
        <Filter>
            <Grid container alignItems="center" spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={1}>
                    <Typography variant="h4" align="center">
                        {t('condition')}
                    </Typography>
                </Grid>
                <Grid item xs={5.5}>
                    <CommonCodeSelect groupName="USE_YN" name="useYn" label={t('Use yn')} all />
                </Grid>
                <Grid item xs={5.5}></Grid>
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
export default PopupFilter;
