import React from 'react';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { Skeleton } from '@mui/material';

export const ImageCard = ({ imgsrc, loading }) => {
    if (loading) return <Skeleton animation="wave" height={160} sx={{ borderRadius: '12px' }} />;
    return (
        <Grid
            sx={{
                mt: 3,
                display: 'flex',
                justifyContent: 'center',
                border: 1,
                borderColor: 'grey.500',
                borderRadius: '16px',
                height: '160px',
                background: '#bbb',
                overflow: 'hidden'
            }}
        >
            {imgsrc?.map((img, index) => (
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <img
                    key={index}
                    src={`${process.env.REACT_APP_EGOV_CONTEXT_URL}${img.url}`}
                    alt="profile photo"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundPosition: 'center' }}
                />
            ))}
        </Grid>
    );
};
