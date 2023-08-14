// REACT
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalOptionsCancel } from 'store/modalSlice';

// MUI
import { Modal, Box, Alert, AlertTitle, Button, Grid } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

function CustomModal() {
    const modalOptions = useSelector((state) => state.modalSlice);
    const dispatch = useDispatch();
    const [modalItems, setModalItems] = useState({});
    const { type, onOpen, title, description, onBtn, onBtnAction, onBtnTxt } = modalItems;

    useEffect(() => {
        setModalItems(modalOptions);
    }, [modalOptions]);

    return (
        <Modal open={onOpen ?? false} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    borderRadius: '10px'
                }}
            >
                <Alert
                    severity={type === 'success' || type === 'error' || type === 'info' || type === 'warning' ? type : 'info'}
                    sx={{ background: '#fff', padding: '10px 20px' }}
                >
                    <Grid sx={{ width: 400 }}>
                        {title && <AlertTitle> {title}</AlertTitle>}
                        {description ?? ''}
                        <Grid item textAlign={'right'}>
                            {onBtn && (
                                <Button
                                    onClick={() => (onBtnAction ? onBtnAction() : console.log('Please call onBtnAction'))}
                                    variant="outlined"
                                    sx={{ mt: 2 }}
                                >
                                    {onBtnTxt}
                                </Button>
                            )}
                            <Button
                                variant="outlined"
                                size="small"
                                sx={{ border: `1px solid ${blueGrey[700]}`, color: blueGrey[700] }}
                                onClick={() => {
                                    dispatch(setModalOptionsCancel());
                                }}
                            >
                                Close
                            </Button>
                        </Grid>
                    </Grid>
                </Alert>
            </Box>
        </Modal>
    );
}

export default CustomModal;
