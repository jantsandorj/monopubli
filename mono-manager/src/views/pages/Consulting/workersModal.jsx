import { Modal, Box } from '@mui/material';

const WorkersModal = ({ modalShow }) => {
    return (
        <Modal open={modalShow} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 800,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4
                }}
            >
                sssssssssssssssssss
            </Box>
        </Modal>
    );
};

export default WorkersModal;
