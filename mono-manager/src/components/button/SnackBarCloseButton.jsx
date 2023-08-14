import React from 'react';
import { IconButton } from '@mui/material';
import { useSnackbar } from 'notistack';
import CloseIcon from '@mui/icons-material/Close';

export const SnackbarCloseButton = ({ snackbarKey }) => {
    const { closeSnackbar } = useSnackbar();

    return (
        <IconButton onClick={() => closeSnackbar(snackbarKey)}>
            <CloseIcon fontSize="small" />
        </IconButton>
    );
};
