import { Box, styled } from '@mui/system';
import { LoadingButton } from '@mui/lab';
import { Button, Grid, Modal } from '@mui/material';

import { IconCheck } from '@tabler/icons';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

const StyledBox = styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24,
    backgroundColor: '#FFFFFF',
    paddingBottom: '20px',
    paddingRight: '20px',
    paddingLeft: '30px',
    paddingTop: '14px',
    borderRadius: '5px'
});

export const DeleteConfirm = ({ show, setShow, isLoading, onDelete, code, codeGroup }) => {
    const { t } = useTranslation();

    const onClose = useCallback(() => {
        if (isLoading) return;
        setShow(false);
    }, [isLoading, setShow]);

    return (
        <Modal
            open={show}
            onClose={onClose}
            title={t('act_delete')}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <StyledBox>
                <p id="parent-modal-description">{t('ask_to_delete')}</p>
                <Grid textAlign="right" marginTop={4}>
                    <LoadingButton
                        style={{ marginRight: 12 }}
                        loading={isLoading}
                        size="small"
                        disabled={isLoading}
                        loadingPosition="start"
                        startIcon={<IconCheck />}
                        variant="contained"
                        onClick={(e) => {
                            if (codeGroup) {
                                onDelete({ code, codeGroup });
                            } else {
                                onDelete(code);
                            }
                        }}
                    >
                        {t('act_confirm')}
                    </LoadingButton>
                    <Button
                        disableElevation
                        variant="outlined"
                        color="primary"
                        size="small"
                        disabled={isLoading}
                        onClick={(e) => {
                            setShow(false);
                        }}
                    >
                        {t('act_cancel')}
                    </Button>
                </Grid>
            </StyledBox>
        </Modal>
    );
};
