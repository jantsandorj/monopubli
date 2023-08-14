import { Modal, Stack, OutlinedInput } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { useTranslation } from 'react-i18next';
const { Button } = require('components/index');
const { Input } = require('./InputStyle');

export const DaumInput = ({ register, data }) => {
    const [open, setOpen] = useState(false);
    const [inputZipCodeValue, setInputZipCodeValue] = useState(data?.zip);
    const [inputAddressValue, setInputAddressValue] = useState(data?.addr);
    const [inputAddrEtcValue, setInputAddrEtcValue] = useState(data?.addrEtc);

    const { t } = useTranslation();
    const onCompletePost = (data) => {
        setOpen(false);

        setInputZipCodeValue(data.zonecode);
        setInputAddressValue(data.address);
    }; // onCompletePost 함수

    const postCodeStyle = {
        width: '400px',
        minHeight: '500px'
    };

    return (
        <>
            <Stack flex flexDirection={'row'} alignItems={'center'}>
                <OutlinedInput
                    {...register('zip')}
                    type="text"
                    size="small"
                    sx={{ width: '150px' }}
                    value={inputZipCodeValue}
                    inputprops={{ readOnly: true }}
                />
                <Button size="small" sx={{ marginLeft: '10px' }} onClick={() => setOpen(!open)}>
                    {t('zip_code')} {t('search')}
                </Button>
            </Stack>
            <OutlinedInput
                {...register('addr')}
                value={inputAddressValue}
                type="text"
                size="small"
                fullWidth
                sx={{ marginTop: '8px' }}
                inputprops={{ readOnly: true }}
            />
            <OutlinedInput
                {...register('addrEtc')}
                value={inputAddrEtcValue}
                onChange={(e) => setInputAddrEtcValue(e.target.value)}
                type="text"
                size="small"
                placeholder={t('addrEtcInput')}
                fullWidth
                sx={{ marginTop: '8px' }}
            />
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24
                    }}
                >
                    <DaumPostcode style={postCodeStyle} onComplete={onCompletePost} />
                </Box>
            </Modal>
        </>
    );
};
