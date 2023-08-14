import { Box } from '@mui/system';
import SubCard from 'components/cards/SubCard';

const { Modal } = require('@mui/material');

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    boxShadow: 24,
    backgroundColor: '#FFFFFF',
    padding: '30px 20px 20px 20px',
    borderColor: '#90caf975',
    border: '1px solid',
    color: '#616161',
    borderRadius: '12px'
};

export const CustomModal = ({ open, onClose, children, width, maxHeight, title, sx }) => {
    return (
        <Modal open={open} onClose={onClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
            <SubCard sx={{ ...style, ...sx, width: width ?? 560, maxHeight: maxHeight ?? '90vh', overflow: 'auto', outline: "none" }}>
                {title && <h3>{title}</h3>}
                <Box>{children}</Box>
            </SubCard>
        </Modal>
    );
};
