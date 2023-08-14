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
import Loader from 'components/Loader';
import { setModalOptionsOpen } from 'store/modalSlice';

// ============================|| Forget Pass - LOGIN ||============================ //

const AuthForgetPass = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const navigate = useNavigate();

    const labelEmail = useRef();

    const [isLoading, setIsLoading] = useState(false);
    const [emailVal, setEmailVal] = useState('');

    const sendEmail = async () => {
        if (cmn.RequireValueNow(labelEmail, t('email'), 'text', true)) return;

        const formData = new FormData();
        formData.append('email', emailVal);

        const sendEmailURL = '/api/forget/password';

        const requestOption = {
            method: 'POST',
            data: formData,
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
            navigate(URL.LOGIN);
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
                <InputLabel htmlFor="outlined-adornment-email-login">{t('email')}</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-email-login"
                    type="email"
                    name="email"
                    label="email"
                    inputProps={{}}
                    inputRef={labelEmail}
                    value={emailVal}
                    onChange={(e) => setEmailVal(e.target.value)}
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

export default AuthForgetPass;
