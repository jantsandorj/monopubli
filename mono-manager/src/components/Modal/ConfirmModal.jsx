// material-ui
import { Button, Grid, Modal } from '@mui/material';
import { IconCheck } from '@tabler/icons';
import { useTranslation } from 'react-i18next';
import SubCard from 'components/cards/SubCard';
import { styled } from '@mui/system';

// ==============================|| MODAL - CUSTOM MODAL ||============================== //

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24
};

const BaseButton = styled(Button)({});

const ConfirmModal = (props) => {
    const { t } = useTranslation();

    return (
        <Modal open={props.open} onClose={props.onClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
            <SubCard sx={{ ...style, width: props.width ?? 400, maxHeight: '90vh' }} title={props.title}>
                <p id="parent-modal-description">{props.description}</p>
                {props.children}
                {props.noButton == true ? (
                    ''
                ) : (
                    <Grid textAlign="right" marginTop={4}>
                        {props.modalType !== 'confirm' ? (
                            <>
                                <Button disableElevation size="large" variant="outlined" color="primary" onClick={props.onCancel}>
                                    {t('act_cancel')}
                                </Button>
                            </>
                        ) : (
                            <>
                                <BaseButton
                                    style={{ marginRight: 12 }}
                                    loading={props.isLoading}
                                    disabled={props.isLoading}
                                    loadingPosition="start"
                                    startIcon={<IconCheck />}
                                    variant="contained"
                                    size="large"
                                    type="submit"
                                >
                                    {t('act_confirm')}
                                </BaseButton>
                                <Button disableElevation size="large" variant="outlined" color="primary" onClick={props.onCancel}>
                                    {t('act_cancel')}
                                </Button>
                            </>
                        )}
                    </Grid>
                )}
            </SubCard>
        </Modal>
    );
};

ConfirmModal.defaultProps = {
    modalType: 'confirm'
};

export default ConfirmModal;
