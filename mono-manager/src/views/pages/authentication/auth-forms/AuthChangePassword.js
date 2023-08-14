/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { t } from 'i18next';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, FormControl, InputLabel, OutlinedInput } from '@mui/material';

// project imports
import AnimateButton from 'components/extended/AnimateButton';
import * as cmn from 'utils/functions/common';
import { requestAPI } from 'api/requestApi';
import { useNavigate } from 'react-router';
import URL from 'api/url';
import { useEffect } from 'react';
import { setModalOptionsOpen } from 'store/modalSlice';
import Loader from 'components/Loader';

// ============================|| Forget Pass - LOGIN ||============================ //

const AuthChangePassword = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const labelPassword = useRef(null);
    const labelRePassword = useRef(null);

    const [isLoading, setIsLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    useEffect(() => {
        let userToken = localStorage.getItem('userToken');

        if (!userToken || userToken === '') {
            cmn.setLoggedInUser(null);
            cmn.setUserToken('');
        } else {
            cmn.setUserToken(userToken);
        }
    }, [localStorage.getItem('userToken')]);

    const sendEmail = async () => {
        if (cmn.RequireValueNow(labelPassword, t('password'), 'text', true)) return;
        if (cmn.RequireValueNow(labelRePassword, t('verify_password'), 'text', true)) return;
        if (password !== rePassword) {
            dispatch(
                setModalOptionsOpen({
                    type: 'error',
                    onOpen: true,
                    description: t('pass_and_verify_pass_not_same')
                })
            );
            return;
        }

        const formData = new FormData();
        formData.append('password', password);

        const sendEmailURL = '/api/change/password';

        const requestOption = {
            method: 'POST',
            data: password,
            headers: {}
        };

        setIsLoading(true);
        let response = await requestAPI(sendEmailURL, requestOption);
        setIsLoading(false);

        if (response.status === 'success') {
            dispatch(
                setModalOptionsOpen({
                    type: 'success',
                    onOpen: true,
                    description: t(response.message)
                })
            );
            navigate(URL.MAIN);
        } else {
            dispatch(
                setModalOptionsOpen({
                    type: 'error',
                    onOpen: true,
                    description: t(response.message)
                })
            );
        }
    };

    return (
        <>
            {isLoading && <Loader />}
            <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
                <InputLabel htmlFor="outlined-adornment-id-login">{t('password')}</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-id-login"
                    type="text"
                    name="NewPassword"
                    label="New Password"
                    inputProps={{}}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    inputRef={labelPassword}
                />
            </FormControl>
            <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
                <InputLabel htmlFor="outlined-adornment-email-login">{t('verify_password')}</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-email-login"
                    type="text"
                    name="ReTypeNewPassword"
                    label="Re-Type New Password"
                    inputProps={{}}
                    inputRef={labelRePassword}
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                />
            </FormControl>
            <Box sx={{ mt: 2 }}>
                <AnimateButton>
                    <Button
                        disableElevation
                        fullWidth
                        size="large"
                        variant="contained"
                        color="primary"
                        onClick={sendEmail}
                        disabled={isLoading}
                    >
                        {t('send')}
                    </Button>
                </AnimateButton>
            </Box>
        </>
    );
};

export default AuthChangePassword;
