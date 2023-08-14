// REACT
import { forwardRef } from 'react';

// MUI
import { Grid, Typography, Skeleton } from '@mui/material';

// COMPONENTS
import { FormLabelStyle } from 'components/button/style';

const CustomTextForm = forwardRef(({ full, type, label, textValue, isLoading }, _) => {
    return (
        <Grid item container xs={full ? 12 : 6} display={'flex'} alignItems={'center'}>
            <Grid item xs={full ? 1.5 : 3} height={'100%'}>
                <Typography sx={FormLabelStyle?.grayLabel}>{label || ''}</Typography>
            </Grid>
            <Grid item xs={full ? 10.5 : 9} sx={{ px: 1, pt: 1, pb: '1rem' }}>
                {type === 'typography' && isLoading ? (
                    <Skeleton animation="wave" width={'200px'} height={'19px'} sx={{ borderRadius: '12px' }} />
                ) : (
                    <Typography>{textValue}</Typography>
                )}
            </Grid>
        </Grid>
    );
});

export default CustomTextForm;
