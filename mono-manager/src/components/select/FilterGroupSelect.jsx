import { styled } from '@mui/system';
import { Select as BaseSelect, FormControl, InputLabel, MenuItem } from '@mui/material';
import React, { useId } from 'react';

const StyledSelect = styled(BaseSelect)({});

const FilterGroupSelect = ({ label, id, options, ...props }) => {
    const generatedId = useId();

    return (
        <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel id={id ? id : generatedId}>{label}</InputLabel>
            <StyledSelect labelId={id ? id : generatedId} label={label} {...props}>
                <MenuItem value="DIVISION">직접 입력</MenuItem>
                {options?.length > 0
                    ? options.map((value, i) => (
                          <MenuItem key={i + 1} value={`${value.code}-${value.codeEngNm}`}>
                              {value.codeEngNm}
                          </MenuItem>
                      ))
                    : props.children}
            </StyledSelect>
        </FormControl>
    );
};

export default FilterGroupSelect;
