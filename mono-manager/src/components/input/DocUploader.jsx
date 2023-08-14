import { Grid, Skeleton, TextField } from '@mui/material';
import { forwardRef } from 'react';

const style = {
    width: '70%',
    height: '200px',
    border: 1,
    borderRadius: '16px',
    mt: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
};

//REACT HOOK FORM - IMAGE UPLOADER
export const DocUploader = forwardRef(({ size, loading, value, onChange, disabled, inputprops, error, helperText, type }, _) => {
    if (loading)
        return (
            <div>
                <Skeleton animation="wave" height={60} sx={{ borderRadius: '12px' }} />
                <Skeleton animation="wave" height={200} sx={style} />
            </div>
        );
    return (
        <div>
            <TextField
                size={size ?? ''}
                fullWidth
                type="file"
                onChange={onChange}
                disabled={disabled}
                error={error}
                helperText={helperText}
                inputprops={inputprops}
            />
        </div>
    );
});
