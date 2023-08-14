import { styled } from '@mui/system';
import { Button as BaseButton } from '@mui/material';
import React from 'react';

const StyledButton = styled(BaseButton)({
    height: 41,
    minWidth: 150
});

const Button = ({ ...props }) => {
    return <StyledButton color="primary" variant="contained" size="small" disableElevation {...props} />;
};

export default Button;
