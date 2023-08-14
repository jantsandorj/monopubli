import React from 'react';
import { Filter } from 'components/list';
import { Grid, Typography } from '@mui/material';
import { SearchInput, Select } from 'components';
import { useTranslation } from 'react-i18next';

const ContentFilter = () => {
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
                    <Select
                        defaultValue={'1'}
                        options={[
                            {
                                code: '1',
                                code_eng_nm: 'type'
                            }
                        ]}
                    />
                </Grid>
                <Grid item xs={3.66}>
                    <Select
                        defaultValue={'1'}
                        options={[
                            {
                                code: '1',
                                code_eng_nm: 'type'
                            }
                        ]}
                    />
                </Grid>
                <Grid item xs={3.66}>
                    <Select
                        defaultValue={'1'}
                        options={[
                            {
                                code: '1',
                                code_eng_nm: 'type'
                            }
                        ]}
                    />
                </Grid>
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

export default ContentFilter;
