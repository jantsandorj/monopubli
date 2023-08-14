import { useEffect, useState } from 'react';
import { Skeleton, TextField, TextareaAutosize, Typography, inputBaseClasses, styled } from '@mui/material';
import { CKEditor } from 'ckeditor4-react';
import { forwardRef } from 'react';
import theme from 'themes';

// export const FormTextArea = forwardRef(({ getEditorData, defaultValue, max, ...props }, _) => {
//     const [content, setContent] = useState(defaultValue || '');
//     const [isLoading, setIsLoading] = useState(props.loading);

//     useEffect(() => {
//         setContent(defaultValue);
//         setIsLoading(props.loading);
//     }, [props.loading, defaultValue]);

//     const inputHandler = (event) => {
//         const data = event.editor.getData();

//         getEditorData && getEditorData(data);
//         setContent(data);
//     };

//     return isLoading ? (
//         <Skeleton animation="wave" height={60} sx={{ borderRadius: '12px' }} />
//     ) : (
//         <>
//             <input type="hidden" name={props.name} value={content} />
//             <CKEditor
//                 name="content"
//                 id="content"
//                 initData={content}
//                 onChange={inputHandler}
//                 value={content}
//                 config={{
//                     extraAllowedContent: [
//                         'svg(class,focusable,aria-hidden,viewBox)',
//                         'path(*)',
//                         'span(*)',
//                         '*(*)',
//                         '*{*}',
//                         'div(*)',
//                         'img(*)'
//                     ],
//                     allowedContent: true
//                 }}
//             />
//         </>
//     );
// });

export const FormTextArea = ({ getEditorData, defaultValue, max, ...props }, _) => {
    const [content, setContent] = useState(defaultValue || '');
    const [isLoading, setIsLoading] = useState(props.loading);

    useEffect(() => {
        setContent(defaultValue);
        setIsLoading(props.loading);
    }, [props.loading, defaultValue]);

    const inputHandler = (event) => {
        const data = event.editor.getData();

        getEditorData && getEditorData(data);
        setContent(data);
    };

    return isLoading ? (
        <Skeleton animation="wave" height={60} sx={{ borderRadius: '12px' }} />
    ) : (
        <>
            <input type="hidden" name={props.name} value={content} />
            <CKEditor
                name="content"
                id="content"
                initData={content}
                onChange={inputHandler}
                value={content}
                config={{
                    extraAllowedContent: [
                        'svg(class,focusable,aria-hidden,viewBox)',
                        'path(*)',
                        'span(*)',
                        '*(*)',
                        '*{*}',
                        'div(*)',
                        'img(*)'
                    ],
                    allowedContent: true
                }}
            />
        </>
    );
};

const StyledTextArea = styled('textarea')({
    borderRadius: '3px',
    padding: '10px',
    width: '100%',
    height: '200px',
    rounded: '24px',
    border: '1px solid #c4c4c4',
    outline: '#c4c4c4',
    '&:hover': {
        border: '1px solid #616161',
        outline: '#616161'
    },
    '&:active': {
        border: '2px solid #1e96f3',
        outline: '#1e96f3'
    },
    '&:focus': {
        border: '2px solid #1e96f3',
        outline: '#1e96f3'
    },
    '&:focus-visible': {
        border: '2x solid #1e96f3',
        outline: '#1e96f3'
    }
});
export const FormTextAreaLabel = ({ defaultValue, max, ...props }) => {
    const [content, setContent] = useState(defaultValue || '');

    const inputHandler = (event) => {
        const data = event.editor.getData();
        setContent(data);
    };

    return props.loading ? (
        <Skeleton animation="wave" height={60} sx={{ borderRadius: '12px' }} />
    ) : (
        <>
            <StyledTextArea
                id="standard-multiline-flexible"
                name="content"
                initData={defaultValue}
                onChange={(e) => setContent(e.target.value)}
                value={content}
                placeholder={''}
                multiline
                variant="standard"
                minRows={4}
                {...props}
            />
        </>
    );
};

//REACT HOOK FORM - CKEditor
export const FormCKEditor = forwardRef(({ value, loading, onChange, error, helperText, readOnly, getEditorData }, _) => {
    const handleOnChange = (event) => {
        const data = event.editor.getData();
        getEditorData && getEditorData(data);
        onChange(data);
    };

    if (loading) return <Skeleton animation="wave" height={300} sx={{ borderRadius: '12px' }} />;

    return (
        <>
            <CKEditor
                readOnly={readOnly}
                initData={value}
                onChange={handleOnChange}
                value={value}
                config={{
                    extraAllowedContent: [
                        'svg(class,focusable,aria-hidden,viewBox)',
                        'path(*)',
                        'span(*)',
                        '*(*)',
                        '*{*}',
                        'div(*)',
                        'img(*)'
                    ],
                    allowedContent: true
                }}
            />
            {error && helperText && (
                <Typography color="red" fontSize={12} margin="5px 0 0" position="">
                    {helperText}
                </Typography>
            )}
        </>
    );
});
