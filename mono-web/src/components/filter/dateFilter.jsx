// REACT
import React from "react";
// MUI
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {  Select as BaseSelect, FormControl, Grid, MenuItem, TextField, Typography } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';

// COMPONENTS

// FORM
import { Controller, useForm } from 'react-hook-form';

// STYLE
import { CommonStyle } from "../../themes/commonStyle";

const DateFilter = ({ filters, setOptions, formDefaultValues, isLoading, isFetching, all, ...props }) => {

    const { control, handleSubmit } = useForm({
        defaultValues: formDefaultValues ?? { searchWrd: '' }
    });

    //SEARCH EVENT
    const submit = (values) => {
        let conditions = {};
        Object.keys(values).forEach((key) => (conditions[key] = values[key] !== 'ALL' ? values[key] : ''));
        setOptions((prevState) => ({ ...prevState, ...conditions }));
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Grid item sx={CommonStyle.search_calendar_inner}>
                <FormControl size="small"  >
                    <BaseSelect 
                        size="small" 
                        variant="outlined" 
                        input={<OutlinedInput />} 
                        {...props} 
                        sx={CommonStyle.basic_selectbox} value={"ALL"}
                        >
                            <MenuItem value="ALL">{'All'}</MenuItem>
                            <MenuItem value="444">
                                    4444
                            </MenuItem>
                            <MenuItem value="5555"> 
                                    5555
                            </MenuItem>
                    </BaseSelect>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <input type="hidden" name={'start'} id={'date'} />
                    <DatePicker
                        sx={CommonStyle.date_input}
                        name="startDate"
                        inputFormat={'YYYY-MM-DD'}
                        defaultvalue=""
                        renderInput={(params) => <TextField size="small" {...params} />}
                    />
                </LocalizationProvider>
                <Typography color="white">-</Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <input type="hidden" name={'end'} id={'date'} />
                    <DatePicker
                        sx={CommonStyle.date_input}
                        name="endDate"
                        inputFormat={'YYYY-MM-DD'}
                        defaultvalue=""
                        renderInput={(params) => <TextField size="small" {...params} />}
                    />
                </LocalizationProvider>
            </Grid>
        </form>
    );
};

export default DateFilter;
