import React from 'react';
import { Container, Typography } from '@mui/material';

const MainContent = () => {
    return (
        <Container>
            <Typography variant="h4">Welcome to My App</Typography>
            <Typography>
                This is the main content area of your application. You can add your content here.
            </Typography>
        </Container>
    );
};

export default MainContent;
