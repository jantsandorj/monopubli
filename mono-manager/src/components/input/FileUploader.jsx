import { Grid, Skeleton, OutlinedInput } from '@mui/material';

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
export const FileUploader = ({ loading, value, onChange, disabled, inputProps, error, helperText, type }) => {
    if (loading)
        return (
            <div>
                <Skeleton animation="wave" height={60} sx={{ borderRadius: '12px' }} />
                <Skeleton animation="wave" height={200} sx={style} />
            </div>
        );
    return (
        <div>
            <OutlinedInput
                type="file"
                size="small"
                sx={{ width: '251px' }}
                onChange={onChange}
                disabled={disabled}
                error={error}
                helperText={helperText}
                inputProps={inputProps}
            />
            <Grid sx={{ ...style, background: '#bbb' }}>
                {!value ? (
                    <span>PHOTO</span>
                ) : (
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <img
                        src={type === 'local' ? URL.createObjectURL(value) : process.env.REACT_APP_EGOV_CONTEXT_URL + value?.[0]?.url}
                        alt="upload photo"
                        style={{ width: 'auto', height: '100%' }}
                    />
                )}
            </Grid>
        </div>
    );
};
