import { Grid, Skeleton, TextField, IconButton, Button } from '@mui/material';
import { useContext, useEffect, useRef } from 'react';
import { useState } from 'react';
import { ValidateContext } from 'components/form/ValidateContext';
import ClearIcon from '@mui/icons-material/Clear';
import { useDeleteAdminImageMutation } from 'views/pages/MenuManagement/AdminMenu/AdminMenuApi';

export const FormImgFileInput = ({ defaultValue, name, loading, ...props }) => {
    const [img, setimg] = useState();
    const { error } = useContext(ValidateContext);
    const fileHandler = (e) => {
        const { files, name, value } = e.target;
        setimg(files || files[0]);
    };

    return (
        <>
            {loading ? (
                <Skeleton animation="wave" height={60} sx={{ borderRadius: '12px' }} />
            ) : (
                <>
                    <TextField
                        fullWidth
                        id={name}
                        name={img ? name : ''}
                        type="file"
                        error={Object.keys(error).includes(name)}
                        helperText={Object.keys(error).includes(name) ? error[name] : ''}
                        onChange={fileHandler}
                        defaultValue={null}
                        {...props}
                    />
                </>
            )}
            {loading ? (
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
                <Grid
                    sx={{
                        width: '70%',
                        height: '200px',
                        background: '#bbb',
                        borderColor: 'grey',
                        border: 1,
                        borderRadius: '16px',
                        mt: 2,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden'
                    }}
                >
                    {!(img || (defaultValue?.length > 0 && defaultValue[0]?.url)) && <span>PHOTO</span>}
                    {(img || (defaultValue?.length > 0 && defaultValue[0]?.url)) && (
                        <img
                            src={img ? URL.createObjectURL(img[0]) : `${process.env.REACT_APP_EGOV_CONTEXT_URL}${defaultValue[0].url}`}
                            alt="profile_photo"
                            style={{ width: 'auto', height: '100%' }}
                        />
                    )}
                </Grid>
            )}
        </>
    );
};
export const FormImgFileInputCircle = ({ defaultValue, name, loading, ...props }) => {
    const [img, setimg] = useState();
    const { error } = useContext(ValidateContext);
    const fileHandler = (e) => {
        const { files, name, value } = e.target;
        setimg(files || files[0]);
    };

    return (
        <>
            {loading ? (
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
                <Grid
                    sx={{
                        width: '200px',
                        height: '200px',
                        background: '#bbb',
                        borderColor: 'grey',
                        border: 1,
                        borderRadius: '100%',
                        mt: 2,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden'
                    }}
                >
                    {!(img || (defaultValue?.length > 0 && defaultValue[0]?.url)) && <span>PHOTO</span>}
                    {(img || (defaultValue?.length > 0 && defaultValue[0]?.url)) && (
                        <img
                            src={img ? URL.createObjectURL(img[0]) : `${process.env.REACT_APP_EGOV_CONTEXT_URL}${defaultValue[0].url}`}
                            alt="profile_photo"
                            style={{ width: '100%', height: '100%', backgroundPosition: 'center', overflow: 'hidden', objectFit: 'cover' }}
                        />
                    )}
                </Grid>
            )}
            {loading ? (
                <Skeleton animation="wave" height={60} sx={{ borderRadius: '12px' }} />
            ) : (
                <>
                    <TextField
                        fullWidth
                        id={name}
                        name={name}
                        type="file"
                        error={Object.keys(error).includes(name)}
                        helperText={Object.keys(error).includes(name) ? error[name] : ''}
                        onChange={fileHandler}
                        defaultValue={null}
                        {...props}
                    />
                </>
            )}
        </>
    );
};
export const ImgFileInput = ({ defaultValue, name, loading, ...props }) => {
    const [img, setimg] = useState();
    const [defaultImage, setDefaultImage] = useState({});
    const { error } = useContext(ValidateContext);

    const fileHandler = (e) => {
        const { files } = e.target;
        setimg(files && files[0]);
    };

    const handleClearImage = () => {
        setimg(null);
        setDefaultImage(null);
    };

    useEffect(() => {
        handleClearImage();
        setDefaultImage(defaultValue); // Update the defaultImage state when defaultValue changes
    }, [defaultValue]);

    return (
        <>
            {loading ? (
                <Skeleton animation="wave" height={51} sx={{ borderRadius: '12px' }} />
            ) : (
                <TextField
                    fullWidth
                    id={name}
                    name={img ? name : ''}
                    type="file"
                    error={Object.keys(error).includes(name)}
                    helperText={Object.keys(error).includes(name) ? error[name] : ''}
                    onChange={fileHandler}
                    defaultValue={defaultImage?.url}
                    inputProps={{ accept: 'image/png, image/gif, image/jpeg, image/jpg' }}
                    {...props}
                    InputProps={{
                        endAdornment: (
                            <>
                                <IconButton onClick={handleClearImage} size="small">
                                    <ClearIcon />
                                </IconButton>
                            </>
                        )
                    }}
                />
            )}
            {loading ? (
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
                <Grid
                    sx={{
                        width: '70%',
                        height: '200px',
                        background: '#bbb',
                        borderColor: 'grey',
                        border: 1,
                        borderRadius: '16px',
                        mt: 2,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden'
                    }}
                >
                    {!img && !defaultImage?.url && <span>PHOTO</span>}
                    {(img || defaultImage?.url) && (
                        <>
                            <img
                                src={img ? URL.createObjectURL(img) : process.env.REACT_APP_EGOV_CONTEXT_URL + defaultImage?.url}
                                alt="single_photo"
                                style={{ width: 'auto', height: 'auto', maxHeight: '100%', maxWidth: '100%' }}
                            />
                            {img && (
                                <IconButton onClick={handleClearImage} size="small" sx={{ position: 'absolute', top: '8px', right: '8px' }}>
                                    <ClearIcon />
                                </IconButton>
                            )}
                        </>
                    )}
                </Grid>
            )}
        </>
    );
};

export const RowImgFileInput = ({ defaultValue, name, loading, ...props }) => {
    const [img, setImg] = useState();
    const [defaultImage, setDefaultImage] = useState(defaultValue);
    const { error } = useContext(ValidateContext);
    const [deleteAdminImage, { isLoading }] = useDeleteAdminImageMutation();

    const fileHandler = (e) => {
        const { files } = e.target;
        setImg(files && files[0]);
    };

    const handleClearImage = () => {
        setImg(null);
        setDefaultImage(null);
    };

    const handleDeleteImage = (seqid) => {
        setImg(null);
        setDefaultImage(null);
        deleteAdminImage(seqid);
    };

    useEffect(() => {
        handleClearImage();
        setDefaultImage(defaultValue); // Update the defaultImage state when defaultValue changes
    }, [defaultValue]);

    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Grid container spacing={2}>
                    <Grid item xs={props?.edit && !loading && (img || defaultImage?.url) ? 8 : 12}>
                        {loading ? (
                            <Skeleton animation="wave" height={51} sx={{ borderRadius: '12px' }} />
                        ) : (
                            <TextField
                                sx={{ mt: 1 }}
                                fullWidth
                                id={name}
                                name={img ? name : ''}
                                type="file"
                                error={Object.keys(error).includes(name)}
                                helperText={Object.keys(error).includes(name) ? error[name] : ''}
                                onChange={fileHandler}
                                defaultValue={''}
                                inputProps={{ accept: 'image/png, image/gif, image/jpeg, image/jpg' }}
                                {...props}
                                InputProps={{
                                    endAdornment: (
                                        <>
                                            <IconButton onClick={handleClearImage} size="small">
                                                <ClearIcon />
                                            </IconButton>
                                        </>
                                    )
                                }}
                            />
                        )}
                    </Grid>
                    {props.edit && (
                        <Grid item xs={4} sx={{ mt: 1 }}>
                            {!loading && (img || defaultImage?.url) && (
                                <Button
                                    sx={{ height: '100%', width: '100%' }}
                                    onClick={() => handleDeleteImage(defaultValue?.fileSeq)}
                                    variant="outlined"
                                    color="error"
                                >
                                    Delete Image
                                </Button>
                            )}
                        </Grid>
                    )}
                </Grid>
            </Grid>
            <Grid item xs={4}>
                {loading ? (
                    <Skeleton
                        animation="wave"
                        sx={{
                            width: '100%',
                            height: '200px',
                            border: 1,
                            borderRadius: '16px',
                            mt: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden'
                        }}
                    />
                ) : (
                    <Grid
                        sx={{
                            width: props.width ? props.width : '100%',
                            height: props.height ? props.height : '200px',
                            background: '#bbb',
                            borderColor: 'grey',
                            border: 1,
                            borderRadius: '16px',
                            mt: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden'
                        }}
                    >
                        {!img && !defaultImage?.url && <span>PHOTO</span>}
                        {(img || defaultImage?.url) && (
                            <>
                                <img
                                    src={img ? URL.createObjectURL(img) : process.env.REACT_APP_EGOV_CONTEXT_URL + defaultImage?.url}
                                    alt="single_photo"
                                    style={{ width: 'auto', height: 'auto', maxHeight: '100%', maxWidth: '100%' }}
                                />
                                {img && (
                                    <IconButton
                                        onClick={handleClearImage}
                                        size="small"
                                        sx={{ position: 'absolute', top: '8px', right: '8px' }}
                                    >
                                        <ClearIcon />
                                    </IconButton>
                                )}
                            </>
                        )}
                    </Grid>
                )}
            </Grid>
        </Grid>
    );
};
