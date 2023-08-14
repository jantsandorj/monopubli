// REACT
import { useTranslation } from 'react-i18next';

// MUI
import { Grid, Typography, TextField } from '@mui/material';
import { Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// COMPONENTS
import { FormCmmCodeSelect, SearchInput } from 'components';
import { FormLabelStyle } from 'components/button/style';

// FORM
import { Controller, useForm } from 'react-hook-form';
import dayjs from 'dayjs';

const CustomFilter = ({ filters, setOptions, formDefaultValues, isLoading, isFetching }) => {
    const { t } = useTranslation();
    const { control, handleSubmit } = useForm({
        defaultValues: formDefaultValues ?? { searchWrd: '' }
    });

    if(!filters){
        filters = [];
    }

    //SEARCH EVENT
    const submit = (values) => {
        let conditions = {};
        Object.keys(values).forEach((key) => (conditions[key] = values[key] !== t('ALL') ? values[key] : ''));
        setOptions((prevState) => ({ ...prevState, ...conditions }));
    };

    return (
        <Box border="1px solid" borderColor={'#454545'} borderRadius={0}>
            <form onSubmit={handleSubmit(submit)}>
                <Grid container sx={{...(filters.length === 1 && FormLabelStyle?.grayBottom) }}>
                    {filters &&
                        filters.length > 0 &&
                        filters.map((filter, index) => {
                            return (
                                <Grid
                                    sx={{...(filters.length > 2 && FormLabelStyle?.grayBottom)}}
                                    key={`filter-${index}`}
                                    item
                                    container
                                    xs={6}
                                    display={'flex'}
                                    alignItems={'center'}
                                >
                                    <Grid item xs={3} height={'100%'}>
                                        <Typography sx={FormLabelStyle?.grayLabel}>{t(filter?.label)}</Typography>
                                    </Grid>
                                    <Grid item xs={9} sx={{ p: 1 }}>
                                        {filter?.type === 'select' && filter?.commonCode && (
                                            <Controller
                                                control={control}
                                                name={filter?.name}
                                                render={({ field }) => (
                                                    <FormCmmCodeSelect
                                                        all={filter?.value === 'All' ? true : false}
                                                        groupName={filter?.commonCode}
                                                        label={t(filter?.label)}
                                                        disabled={isLoading || isFetching}
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        )}

                                        {filter?.type === 'select' && filter?.customData && (
                                            <Controller
                                                control={control}
                                                name={filter?.name}
                                                render={({ field }) => (
                                                    <FormCmmCodeSelect
                                                        all={filter?.value === 'All' ? true : false}
                                                        customData={filter?.customData}
                                                        label={t(filter?.label)}
                                                        disabled={isLoading || isFetching}
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        )}

                                        {filter?.type === 'dateRangePicker' && (
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <Controller
                                                    control={control}
                                                    name={'startDate'}
                                                    render={({ field }) => (
                                                        <DatePicker
                                                            {...field}
                                                            onChange={(e) => field.onChange(dayjs(e).format('YYYY-MM-DD'))}
                                                            inputFormat={'YYYY-MM-DD'}
                                                            format={'YYYY-MM-DD'}
                                                            views={['year', 'month', 'day']}
                                                            renderInput={(params) => (
                                                                <TextField sx={{ width: '200px' }} size="small" {...params} />
                                                            )}
                                                        />
                                                    )}
                                                />

                                                <Controller
                                                    control={control}
                                                    name={'endDate'}
                                                    render={({ field }) => (
                                                        <DatePicker
                                                            {...field}
                                                            onChange={(e) => field.onChange(dayjs(e).format('YYYY-MM-DD'))}
                                                            inputFormat={'YYYY-MM-DD'}
                                                            format={'YYYY-MM-DD'}
                                                            views={['year', 'month', 'day']}
                                                            renderInput={(params) => (
                                                                <TextField sx={{ ml: 1, width: '200px' }} size="small" {...params} />
                                                            )}
                                                        />
                                                    )}
                                                />
                                            </LocalizationProvider>
                                        )}
                                    </Grid>
                                </Grid>
                            );
                        })}
                </Grid>

                <Grid container sx={FormLabelStyle?.grayCol}>
                    <Grid item container xs={12} display={'flex'} alignItems={'center'}>
                        <Grid item xs={1.5} sx={{ backgroundColor: '#f5f5f5', height: '100%' }}>
                            <Typography sx={FormLabelStyle?.grayLabel}>{t('search')}</Typography>
                        </Grid>
                        <Grid item xs={10.5} sx={{ p: 1 }}>
                            <Controller
                                control={control}
                                name="searchWrd"
                                render={({ field }) => <SearchInput size="small" disabled={isLoading || isFetching} {...field} />}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default CustomFilter;
