import { Alert, FormHelperText, Grid, OutlinedInput, Skeleton, TextField } from '@mui/material';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components/index';
import { ValidateContext } from 'components/form/ValidateContext';

export const FormButtonFileInput = (props) => {
    const [file, setFile] = useState(props.defaultvalue);
    const { error } = useContext(ValidateContext);

    const fileHandler = (e) => {
        const { files, name, value } = e.target;
        setFile(files && files[0]);
    };
    return (
        <>
            {props.loading ? (
                <Skeleton animation="wave" height={60} sx={{ borderRadius: '12px' }} />
            ) : (
                <>
                    <OutlinedInput type="file" name="answerFile" style={{ display: 'none' }} />
                    <OutlinedInput
                        fullWidth
                        style={{ marginRight: '20px', paddingRight: '0' }}
                        value={file}
                        id="attach"
                        name="attach"
                        type="file"
                        onChange={fileHandler}
                        endAdornment={
                            <Button
                                disableElevation
                                style={{ height: '50px', borderRadius: '12px', width: '150px' }}
                                size="large"
                                type="button"
                                variant="contained"
                                color="primary"
                                // onClick={() => fileHandler(fieldFile)}
                            >
                                Select file
                            </Button>
                        }
                    />
                </>
            )}
            {props.loading ? (
                <Skeleton animation="wave" height={60} sx={{ borderRadius: '12px' }} />
            ) : (
                <Link to={props.attach?.downloadUrl || ''} target="_blank">
                    {props.attach?.name}
                </Link>
            )}
        </>
    );
};
export const ButtonFileInput = (props) => {
    const [file, setFile] = useState(props.defaultvalue);

    const fileHandler = (e) => {
        const { files, name, value } = e.target;
        setFile(files && files[0]);
    };
    return (
        <>
            {props.loading ? (
                <Skeleton animation="wave" height={60} sx={{ borderRadius: '12px' }} />
            ) : (
                <TextField
                    fullWidth
                    id={props.name}
                    name={props.name}
                    type="file"
                    defaultValue={props.defaultValue}
                    onChange={fileHandler}
                    {...props}
                />
            )}
            {props.loading ? (
                <Skeleton
                    animation="wave"
                    sx={{
                        width: '70%',
                        height: '200px',
                        border: 1,
                        borderRadius: '16px',
                        mt: 2,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden'
                    }}
                />
            ) : (
                ''
            )}
        </>
    );
};
