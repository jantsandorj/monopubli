import React from 'react';
import Grid from '@mui/system/Unstable_Grid/Grid';
import defaulMenuImg from '../../assets/images/defaults/menuDefault.png';

export const MemberImageCard = ({ imgsrc, width, height, style, objectFit }) => {
    const objectFitValue = objectFit ? 'cover' : 'contain';
    return (
        <Grid
            sx={{
                mt: 3,
                display: 'flex',
                justifyContent: 'center',
                border: 1,
                borderColor: 'grey.500',
                borderRadius: '50%',
                height: width ? width : '160px',
                width: height ? height : '160px',
                objectFit: 'cover',
                background: '#bbb',
                overflow: 'hidden',
                ...style
            }}
        >
            {imgsrc?.map((img, index) => (
                <img
                    key={index}
                    src={img.url ? `${process.env.REACT_APP_EGOV_CONTEXT_URL}${img.url}` : defaulMenuImg}
                    alt="profile_photo"
                    style={{ width: '100%', height: '100%', objectFit: objectFitValue, backgroundPosition: 'center' }}
                />
            ))}
        </Grid>
    );
};
