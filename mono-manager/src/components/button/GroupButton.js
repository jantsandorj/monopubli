import { styled } from '@mui/system';
import React from 'react';

export const RightSide = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: '10px '
}));

const Area = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'end',
    gap: '10px ',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
        marginRight: '0px',
        width: '100% !important',
        justifyContent: 'none !important',
        gap: '0px'
    }
}));

export const GroupButton = (props) => {
    return <Area {...props}>{props.children}</Area>;
};
