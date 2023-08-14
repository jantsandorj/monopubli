import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, useTheme, Grid, InputAdornment, OutlinedInput, Typography } from '@mui/material';
import CommonCodeSelect from 'components/select/CommonCodeSelect';
import { IconSearch } from '@tabler/icons';
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import SubCard from 'components/cards/SubCard';
import ObjectUtil from 'utils/ObjectUtil';
import { ListContextWrapper } from '../../../../components/list/ListContextWrapper';

const BaseFilter = styled(SubCard)({
    paddingLeft: 16,
    paddingRight: 16
});

const AdminFilter = ({ defaultValue, disabled, ...props }) => {
    const { t } = useTranslation();
    const theme = useTheme();
    const { setSearchCondition, searchCondition } = useContext(ListContextWrapper);
    const onSubmit = (event) => {
        event.preventDefault();
        const formdata = new FormData(event.target);
        let newJson = JSON.stringify(ObjectUtil.formDataToJson(formdata)).replaceAll('All', '');
        setSearchCondition({ ...searchCondition, ...JSON.parse(newJson) });
    };

    return (
        <BaseFilter {...props}>
            <form onSubmit={onSubmit}>
                <Grid container columnSpacing={{ md: 2 }}>
                    <Grid container alignItems="center" spacing={2} sx={{ mb: 3 }}>
                        <Grid item xs={1}>
                            <Typography variant="h4" align="center">
                                {t('condition')}
                            </Typography>
                        </Grid>

                        <Grid item xs={11}>
                            <CommonCodeSelect groupName="USE_YN" name="useYn" label={t('Use yn')} all />
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant="h4" align="center">
                                {t('search')}
                            </Typography>
                        </Grid>
                        <Grid item xs={11}>
                            <OutlinedInput
                                fullWidth
                                style={{ marginRight: '20px', background: 'white' }}
                                type="text"
                                name="searchWrd"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Box sx={{ ml: 2 }}>
                                            <Typography sx={{ borderRadius: '12px' }}>
                                                <Button
                                                    variant="rounded"
                                                    sx={{
                                                        width: '36px',
                                                        height: '36px',
                                                        borderRadius: '12px',
                                                        transition: 'all .2s ease-in-out',
                                                        background: theme.palette.primary.light,
                                                        color: theme.palette.primary.dark,
                                                        '&[aria-controls="menu-list-grow"],&:hover': {
                                                            background: theme.palette.primary.dark,
                                                            color: theme.palette.primary.light
                                                        }
                                                    }}
                                                    type="submit"
                                                    color="inherit"
                                                    onClick={() => {
                                                        onSubmit();
                                                    }}
                                                >
                                                    <IconSearch size="1.3rem" />
                                                </Button>
                                            </Typography>
                                        </Box>
                                    </InputAdornment>
                                }
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </BaseFilter>
    );
};

export default AdminFilter;
