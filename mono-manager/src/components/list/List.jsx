import React from 'react';
import Paper from '@mui/material/Paper';
import ListProvider from './ListContextWrapper';
import { Typography } from '@mui/material';

export const List = ({ children }) => {
    return (
        <Typography variant="body2" component={Paper}>
            <ListProvider>{children}</ListProvider>
        </Typography>
    );
};
