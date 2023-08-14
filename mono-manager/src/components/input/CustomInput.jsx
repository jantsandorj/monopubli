import { useState, forwardRef } from 'react';
import { FormControl, Grid, Typography, InputAdornment, IconButton, FormHelperText, OutlinedInput } from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { FormLabelStyle } from 'components/button/style';
import { useEffect } from 'react';
import { FormCmmCodeSelect } from 'components';

const CustomInput = forwardRef(({ full, type: inputType, label, register, error, id, groupName, ...props }, _) => {
    const [showPassword, setShowPassword] = useState(false);
    const [type, setType] = useState('text');
    useEffect(() => {
        inputType && setType(inputType);
    }, [inputType]);

    return (
        <Grid item container xs={full ? 12 : 6} display={'flex'} alignItems={'center'}>
            <Grid item xs={full ? 2 : 3} height={'100%'}>
                <Typography sx={FormLabelStyle?.grayLabel}>{label || ''}</Typography>
            </Grid>
            <Grid item xs={full ? 10 : 9} sx={{ px: 1, pt: 1, pb: '1rem' }}>
                <FormControl error={!!error}>
                    {type === 'password' && (
                        <OutlinedInput
                            aria-invalid="false"
                            type={showPassword ? 'text' : 'password'}
                            id={id}
                            size="small"
                            autoComplete="password"
                            {...props}
                            endAdornment={
                                <InputAdornment sx={{ minWidth: '20px', borderLeft: ' 1px solid #dee2e6' }} position="end">
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

                    {type === 'text' && <OutlinedInput size="small" sx={{ minWidth: '251px' }} type={type} {...props} />}
                    {type === 'email' && <OutlinedInput size="small" sx={{ minWidth: '251px' }} type={type} {...props} />}
                    {type === 'select' && groupName && (
                        <FormCmmCodeSelect sx={{ minWidth: '251px' }} all groupName={groupName} {...props} />
                    )}
                    {type === 'date' && <LocalizationProvider dateAdapter={AdapterDayjs}></LocalizationProvider>}
                    <FormHelperText error id={id} sx={{ position: 'absolute', bottom: -18, fontSize: 11, left: -10 }}>
                        {error ? error?.message : ' '}
                    </FormHelperText>
                </FormControl>
            </Grid>
        </Grid>
    );
});

export default CustomInput;
