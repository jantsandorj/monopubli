import { useState } from 'react';
import { t } from 'i18next';
import URL from 'api/url';
import { useTheme } from '@mui/material/styles';
import { Box, Button, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack } from '@mui/material';

// third party
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

// project imports
import AnimateButton from 'components/extended/AnimateButton';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { Link } from 'react-router-dom';
import Loader from 'components/Loader';
import { useAuth } from './useAuth';

// ============================|| FIREBASE - LOGIN ||============================ //
const formDefaultValues = {
    email: 'admin@gmail.com',
    password: '123456'
};
const validationSchema = yup.object({
    email: yup.string().email('Must be a valid email').max(255).required('Email is required'),
    password: yup.string().max(255).required('Password is required')
});

const LoginForm = () => {
    const theme = useTheme();
    const { logIn, isLoading } = useAuth();
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({ defaultValues: formDefaultValues, resolver: yupResolver(validationSchema) });
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const submit = (loginData) => {
        const formData = new FormData();
        formData.append('username', loginData.email);
        formData.append('password', loginData.password);
        logIn(formData);
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            {isLoading && <Loader />}
            <FormControl fullWidth error={Boolean(errors.email)} sx={{ ...theme.typography.customInput }}>
                <InputLabel htmlFor="outlined-adornment-email-login">{t('email')}</InputLabel>
                <OutlinedInput id="outlined-adornment-email-login" type="email" {...register('email')} />

                {errors.email && <FormHelperText id="standard-weight-helper-text-email-login">{errors?.email?.message}</FormHelperText>}
            </FormControl>

            <FormControl fullWidth error={Boolean(errors.password)} sx={{ ...theme.typography.customInput }}>
                <InputLabel htmlFor="password-login">{t('password')}</InputLabel>
                <OutlinedInput
                    id="password-login"
                    type={showPassword ? 'text' : 'password'}
                    {...register('password')}
                    autoComplete="on"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                size="large"
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                {errors.password && <FormHelperText id="password-login">{errors.password?.message}</FormHelperText>}
            </FormControl>

            <Box sx={{ mt: 2 }}>
                <AnimateButton>
                    <Button fullWidth size="large" type="submit" variant="contained" color="primary">
                        {t('sign_in')}
                    </Button>
                </AnimateButton>
            </Box>
            <Stack direction="row" justifyContent="flex-end" spacing={1} sx={{ mt: 1 }}>
                <Link to={URL.FORGET_PASSWORD} style={{ textDecoration: 'none', color: '#000' }}>
                    {t('forget_password')}
                </Link>
            </Stack>
        </form>
    );
};

export default LoginForm;
