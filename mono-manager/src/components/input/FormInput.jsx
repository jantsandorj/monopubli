import React, { useState, useEffect } from 'react';
import {
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Skeleton,
    TextField,
    Typography
} from '@mui/material';
import { forwardRef, useContext } from 'react';
import { ValidateContext } from 'components/form/ValidateContext';
import { FlashAuto, Visibility, VisibilityOff } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Select } from 'components';
import { t } from 'i18next';

export const FormInput = forwardRef(({ showpassword, hide, loading, ...props }, _) => {
    const { error } = useContext(ValidateContext);
    const { t } = useTranslation();
    const [show, setShow] = useState(true);
    return loading ? (
        <Skeleton animation="wave" height={60} sx={{ borderRadius: '12px' }} />
    ) : (
        <>
            <OutlinedInput
                id={props.name}
                name={props.name}
                type="text"
                placeholder={props.placeholder}
                defaultValue={props?.defaultValue}
                maxLength="255"
                fullWidth={!props.minWidth}
                style={{ overflow: 'hidden' }}
                sx={{ backgroundColor: 'white', display: props.hide ? 'none' : 'block' }}
                autoComplete="off"
                // sx={{ backgroundColor: 'white', display: hide ? 'none' : 'block' }}
                endAdornment={
                    props.eye && (
                        <InputAdornment position="end" sx={{ position: 'relative' }}>
                            <IconButton
                                aria-label="toggle password visibility"
                                sx={{ position: 'absolute', right: '10px', bottom: '6px' }}
                                onClick={() => {
                                    showpassword((show) => !show);
                                    setShow((show) => !show);
                                }}
                                edge="end"
                            >
                                {show ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    )
                }
                {...props}
                error={props?.error ?? Object.keys(error).includes(props.name)}
                inputProps={{ autoComplete: 'new-password' }}
            />
            {props?.helperText ?? Object.keys(error).includes(props.name) ? (
                <FormHelperText error id={props.name}>
                    {props?.helperText ?? t(error[props.name])}
                </FormHelperText>
            ) : (
                ''
            )}
        </>
    );
});
export const BaseInput = (props) => {
    return props.loading ? (
        <Skeleton animation="wave" height={60} sx={{ borderRadius: '12px' }} />
    ) : (
        <TextField
            id={props.name}
            name={props.name}
            type="text"
            placeholder={props.placeholder}
            defaultValue={props?.defaultValue}
            maxLength="255"
            fullWidth
            {...props}
            inputProps={props}
        />
    );
};
export const OnlyTextInput = (props) => {
    const { error } = useContext(ValidateContext);
    const onKeyDown = (event) => {
        const regex = /^[0-9\b]+$/;
        if (regex.test(event.key)) {
            event.preventDefault();
        }
    };

    return props.loading ? (
        <Skeleton animation="wave" height={60} sx={{ borderRadius: '12px' }} />
    ) : (
        <>
            <TextField
                id={props.name}
                name={props.name}
                type="text"
                placeholder={props.placeholder}
                defaultValue={props?.defaultValue}
                maxLength="255"
                fullWidth
                onKeyDown={onKeyDown}
                {...props}
            />
            {Object.keys(error).includes(props.name) && (
                <Typography color="red" fontSize={12} position="">
                    {error[props.name]}
                </Typography>
            )}
        </>
    );
};

export const FormInputAdminRole = forwardRef(({ showpassword, loading, ...props }, _) => {
    const { error } = useContext(ValidateContext);
    const [role, setRole] = useState('');

    return loading ? (
        <Skeleton animation="wave" height={60} sx={{ borderRadius: '12px' }} />
    ) : (
        <>
            <FormControl fullWidth>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name={props.name}
                    label={t('admin_role')}
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    {props.roles?.map((item, index) => (
                        <MenuItem key={index} value={item.authorCd}>
                            {item.authorNm}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            {props?.helperText ?? Object.keys(error).includes(props.name) ? (
                <FormHelperText error id={props.name}>
                    {props?.helperText ?? error[props.name]}
                </FormHelperText>
            ) : (
                ''
            )}
        </>
    );
});
