// REACT
import { useState, forwardRef, useEffect } from 'react';
import { Controller } from 'react-hook-form';
import dayjs from 'dayjs';

// MUI
import { FormControl, styled, Grid, Typography, InputAdornment, IconButton, FormHelperText, OutlinedInput, TextField } from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// COMPONENTS
import { FormLabelStyle } from 'components/button/style';
import { FormCmmCodeSelect } from 'components';

const CustomControllerInputs = forwardRef(
    ({ setValue, control, name, full, type: inputType, label, register, error, id, groupName, value, isLoading, ...props }, _) => {
        const [showPassword, setShowPassword] = useState(false);
        const [type, setType] = useState('text');

        useEffect(() => {
            inputType && setType(inputType);
        }, [inputType]);

        const StyledTextArea = styled('textarea')({
            borderRadius: '3px',
            padding: '10px',
            height: '150px',
            rounded: '24px',
            border: '1px solid #c4c4c4',
            outline: '#c4c4c4',
            '&:hover': {
                border: '1px solid #616161',
                outline: '#616161'
            },
            '&:active': {
                border: '2px solid #1e96f3',
                outline: '#1e96f3'
            },
            '&:focus': {
                border: '2px solid #1e96f3',
                outline: '#1e96f3'
            },
            '&:focus-visible': {
                border: '2x solid #1e96f3',
                outline: '#1e96f3'
            }
        });

        return (
            <Grid item container xs={full ? 12 : 6} display={'flex'} alignItems={'center'}>
                <Grid item xs={full ? 1.5 : 3} height={'100%'}>
                    <Typography sx={FormLabelStyle?.grayLabel}>{label || ''}</Typography>
                </Grid>
                <Grid item xs={full ? 10.5 : 9} sx={{ px: 1, pt: 1, pb: '1rem' }}>
                    {/* {type === 'typography' && <Typography sx={FormLabelStyle?.grayLabel}>{value}</Typography>} */}

                    <FormControl fullWidth error={!!error}>
                        {type === 'password' && (
                            <Controller
                                name={name}
                                control={control}
                                render={({ field }) => (
                                    <OutlinedInput
                                        aria-invalid="false"
                                        type={showPassword ? 'text' : 'password'}
                                        id={id}
                                        size="small"
                                        autoComplete="password"
                                        {...field}
                                        endAdornment={
                                            <InputAdornment
                                                sx={{ width: '20px', borderLeft: ' 1px solid #dee2e6' }}
                                                position="end"
                                                {...props}
                                            >
                                                <IconButton
                                                    onClick={() => setShowPassword((show) => !show)}
                                                    onMouseDown={(event) => event.preventDefault()}
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                )}
                            />
                        )}

                        {type === 'text' && (
                            <Controller
                                name={name}
                                control={control}
                                render={({ field }) => (
                                    <OutlinedInput size="small" sx={{ width: '251px' }} type={type} {...field} {...props} />
                                )}
                            />
                        )}

                        {type === 'email' && (
                            <Controller
                                name={name}
                                control={control}
                                render={({ field }) => (
                                    <OutlinedInput size="small" sx={{ width: '251px' }} type={type} {...field} {...props} />
                                )}
                            />
                        )}

                        {type === 'select' && groupName && (
                            <Controller
                                name={name}
                                control={control}
                                render={({ field }) => (
                                    <FormCmmCodeSelect sx={{ width: '251px' }} all groupName={groupName} {...field} {...props} />
                                )}
                            />
                        )}

                        {type === 'textArea' && (
                            <Controller
                                name={name}
                                control={control}
                                render={({ field }) => (
                                    <StyledTextArea
                                        id="standard-multiline-flexible"
                                        multiline
                                        variant="standard"
                                        minRows={3}
                                        {...field}
                                        {...props}
                                    />
                                )}
                            />
                        )}

                        {type === 'date' && (
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Controller
                                    control={control}
                                    name={name}
                                    render={({ field }) => (
                                        <DatePicker
                                            componentsProps={{
                                                actionBar: {
                                                    onClear: () => setValue(name, null),
                                                    actions: ['clear']
                                                }
                                            }}
                                            {...field}
                                            onChange={(e) => field.onChange(dayjs(e).format('YYYY-MM-DD'))}
                                            inputFormat={'YYYY-MM-DD'}
                                            format={'YYYY-MM-DD'}
                                            views={['year', 'month', 'day']}
                                            renderInput={(params) => (
                                                <TextField sx={{ width: '251px' }} size="small" {...params} {...props} />
                                            )}
                                        />
                                    )}
                                />
                            </LocalizationProvider>
                        )}
                        <FormHelperText error id={id} sx={{ position: 'absolute', bottom: -18, fontSize: 11, left: -10 }}>
                            {error ? error?.message : ' '}
                        </FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
        );
    }
);

export default CustomControllerInputs;
