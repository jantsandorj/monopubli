import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import { FormControlLabel, OutlinedInput, Radio, Skeleton, Typography } from '@mui/material';
import { forwardRef, useEffect, useState } from 'react';
import { useContext } from 'react';
import { ValidateContext } from 'components/form/ValidateContext';

export const RadioButtonGender = ({ name, loading, valueData, ...props }) => {
    const { error } = useContext(ValidateContext);
    const [valueGender, setValueGender] = useState(props.defaultValue === undefined ? '' : props.defaultValue);

    if (loading) return <Skeleton animation="wave" height={60} sx={{ borderRadius: '12px' }} />;

    return (
        props.data && (
            <>
                <OutlinedInput
                    id={name}
                    name={name}
                    type="text"
                    error={props?.error ?? Object.keys(error).includes(props.name)}
                    maxLength="255"
                    sx={{ backgroundColor: 'white' }}
                    value={valueGender}
                    className="userGender"
                    startAdornment={
                        <RadioGroup
                            value={valueGender}
                            defaultValue="M"
                            onChange={(e) => {
                                setValueGender(e.target.value);
                            }}
                        >
                            <ul style={{ display: 'flex', paddingInlineStart: '0px', ...props.style }}>
                                {props.data?.map((e, i) => (
                                    <li key={i} style={{ listStyle: 'none' }}>
                                        <FormControlLabel
                                            value={e.code}
                                            className="userGenderRadio"
                                            control={<Radio color="default" size={props?.size} />}
                                            label={e.code_eng_nm || e.codeEngNm}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </RadioGroup>
                    }
                    {...props}
                />
                {Object.keys(error).includes(props.id) && (
                    <Typography color="red" fontSize={12} position="">
                        {error[props.id]}
                    </Typography>
                )}
            </>
        )
    );
};

export const RadioButton = ({ loading, onChangeRadio, ...props }) => {
    const [defValue, setDefValue] = useState(props?.data?.code);

    useEffect(() => {
        setDefValue(props.defaultValue ? props.defaultValue : props.data?.[0]?.code);
    }, [props.data, props.defaultValue]);

    if (loading) return <Skeleton animation="wave" height={60} sx={{ borderRadius: '12px' }} />;

    return (
        props.data && (
            <FormControl disabled={props?.disabled}>
                <RadioGroup onChange={(e) => onChangeRadio && onChangeRadio(e)} defaultValue={defValue} {...props}>
                    <ul style={{ display: 'flex', paddingInlineStart: '0px', ...props.style }}>
                        {props.data?.map((e, i) => (
                            <li key={i} style={{ listStyle: 'none' }}>
                                <FormControlLabel
                                    value={e.code}
                                    control={<Radio color="default" size={props?.size} />}
                                    label={e.code_eng_nm || e.codeEngNm}
                                />
                            </li>
                        ))}
                    </ul>
                </RadioGroup>
            </FormControl>
        )
    );
};
//REACT HOOK FORM - RADIO BUTTON
export const FormRadioButtonUser = forwardRef(({ loading, error, helperText, ...props }, _) => {
    if (loading) return <Skeleton animation="wave" height={60} sx={{ borderRadius: '12px' }} />;

    return (
        <>
            <FormControl disabled={props?.disabled}>
                <RadioGroup {...props}>
                    <ul style={{ display: 'flex', paddingInlineStart: '0px' }}>
                        {props?.data?.map(({ code, code_eng_nm }) => (
                            <li key={code} style={{ listStyle: 'none' }}>
                                <FormControlLabel value={code} control={<Radio color="default" />} label={code_eng_nm} />
                            </li>
                        ))}
                    </ul>
                </RadioGroup>
            </FormControl>
            {error && helperText && (
                <Typography color="red" fontSize={12} position="">
                    {helperText}
                </Typography>
            )}
        </>
    );
});

//REACT HOOK FORM - RADIO BUTTON
export const FormRadioButton = forwardRef(({ loading, error, helperText, ...props }, _) => {
    if (loading) return <Skeleton animation="wave" height={60} sx={{ borderRadius: '12px' }} />;

    return (
        <>
            <FormControl disabled={props?.disabled}>
                <RadioGroup {...props}>
                    <ul style={{ display: 'flex', paddingInlineStart: '0px', margin: '0px' }}>
                        {props?.data?.map(({ code, code_eng_nm }) => (
                            <li key={code} style={{ listStyle: 'none' }}>
                                <FormControlLabel value={code} control={<Radio color="default" />} label={code_eng_nm} />
                            </li>
                        ))}
                    </ul>
                </RadioGroup>
            </FormControl>
            {error && helperText && (
                <Typography color="red" fontSize={12} position="">
                    {helperText}
                </Typography>
            )}
        </>
    );
});
