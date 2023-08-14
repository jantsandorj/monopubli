import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { forwardRef, useContext, useState } from 'react';
import { Skeleton, TextField } from '@mui/material';
import { ValidateContext } from 'components/form/ValidateContext';
import useDate from 'utils/DateFormat';
import dayjs from 'dayjs';

export const FormDateInput = (props) => {
    const [value, setValue] = useState();
    const { getDate } = useDate();
    const { error } = useContext(ValidateContext);

    return props.loading ? (
        <Skeleton animation="wave" height={60} sx={{ borderRadius: '12px' }} />
    ) : (
        <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth={props.mini ? false : true}>
            <input type="hidden" name={props.name} id={props.id} value={value ? getDate(value) : getDate(props.defaultValue)} />
            <DatePicker
                name={props.name}
                fullWidth={props.mini ? false : true}
                value={value ? value : props.defaultValue ? dayjs(props.defaultValue) : null}
                inputFormat={'YYYY-MM-DD'}
                format={'YYYY-MM-DD'}
                label={props.label}
                disabled={props.disabled}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                style={props.mini ? { width: '322px !important' } : {}}
                {...props}
                renderInput={(params) => (
                    <TextField
                        value={value}
                        fullWidth={props.mini ? false : true}
                        style={props.mini ? { width: '322px !important' } : {}}
                        {...params}
                        name={props.name}
                        error={Object.keys(error).includes(props.name)}
                        helperText={Object.keys(error).includes(props.name) ? error[props.name] : ''}
                    />
                )}
            />
        </LocalizationProvider>
    );
};
export const DateInput = (props) => {
    const [value, setValue] = useState(props.defaultvalue || '');
    return props.loading ? (
        <Skeleton animation="wave" height={60} sx={{ borderRadius: '12px' }} />
    ) : (
        <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth>
            <input type="hidden" name={props.name} id={props.id} value={value} />
            <DatePicker
                name={props.name}
                inputFormat={'YYYY-MM-DD'}
                fullWidth
                defaultvalue=""
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField fullWidth {...params} />}
            />
        </LocalizationProvider>
    );
};

//REACT HOOK FORM - DATE PICKER
export const FormDatePicker = forwardRef(({ loading, error, helperText, ...props }, _) => {
    if (loading) return <Skeleton animation="wave" height={60} sx={{ borderRadius: '12px' }} />;

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth>
            <input type="hidden" name={props.name} id={props.id} />
            <DatePicker
                name={props.name}
                inputFormat={'YYYY-MM-DD'}
                format={'YYYY-MM-DD'}
                fullWidth
                {...props}
                renderInput={(params) => (
                    <TextField size={props.size ? 'small' : ''} fullWidth error={error} helperText={helperText} {...params} />
                )}
            />
        </LocalizationProvider>
    );
});

export const FormDateInputUser = (props) => {
    const [value, setValue] = useState();
    const { getDate } = useDate();
    const { error } = useContext(ValidateContext);

    return props.loading ? (
        <Skeleton animation="wave" height={60} sx={{ borderRadius: '12px' }} />
    ) : (
        <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth={props.mini ? false : true}>
            <input type="hidden" name={props.name} id={props.id} value={value ? getDate(value) : getDate(props.defaultValue)} />
            <DatePicker
                name={props.name}
                fullWidth={props.mini ? false : true}
                value={value ? value : props?.defaultValue ? props?.defaultValue : null}
                inputFormat={'YYYY-MM-DD'}
                format={'YYYY-MM-DD'}
                label={props.label}
                disabled={props.disabled}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                style={props.mini ? { width: '322px !important' } : {}}
                renderInput={(params) => (
                    <TextField
                        value={value}
                        fullWidth={props.mini ? false : true}
                        style={props.mini ? { width: '322px !important' } : {}}
                        {...params}
                        error={Object.keys(error).includes(props.name)}
                        helperText={Object.keys(error).includes(props.name) ? error[props.name] : ''}
                    />
                )}
            />
        </LocalizationProvider>
    );
};
