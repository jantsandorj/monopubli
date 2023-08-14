import React, { useState } from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

function DynamicRadioButtonsGroup({ options }) {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        options?.length > 0 && (
            <RadioGroup aria-label="options" name="options" value={value} onChange={handleChange}>
                {options.map((option, index) => (
                    <FormControlLabel key={index} value={option.value} control={<Radio />} label={option.label} />
                ))}
            </RadioGroup>
        )
    );
}

export default DynamicRadioButtonsGroup;
