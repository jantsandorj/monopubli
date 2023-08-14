import { styled } from '@mui/system';
import { Select as BaseSelect, FormControl, InputLabel, MenuItem } from '@mui/material';
import React, { useId } from 'react';

const StyledSelect = styled(BaseSelect)({});

const Select = ({ label, id, options, ...props }) => {
    const generatedId = useId();
    return (
        <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel id={id ? id : generatedId}>{label}</InputLabel>
            <StyledSelect labelId={id ? id : generatedId} {...props} label={label} defaultValue="%">
                {options?.length > 0
                    ? options.map((value, i) => (
                          <MenuItem key={i} value={value.code}>
                              {value.code_eng_nm}
                          </MenuItem>
                      ))
                    : props.children}
            </StyledSelect>
        </FormControl>
    );
};

export default Select;
