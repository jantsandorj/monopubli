import React from 'react';
import { Box, Divider, Grid, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import SubCard from 'components/cards/SubCard';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    boxShadow: 24,
    backgroundColor: '#FFFFFF',
    padding: '0',
    border: '1px solid',
    color: '#616161',
    borderRadius: '12px'
};

export const ModalChild = ({ width, title, children, close }) => {
    return (
        <SubCard sx={{ ...style, width: width ?? 560, maxHeight: '90vh' }}>
            {title && (
                <Grid container alignItems="center" spacing={1}>
                    <Grid item xs={6} paddingLeft="10px">
                        <Typography fontSize="16px">{title}</Typography>
                    </Grid>
                    <Grid item xs={6} textAlign="right">
                        <IconButton onClick={close}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                </Grid>
            )}
            <Box padding="20px 0">{children}</Box>
        </SubCard>
    );
};
