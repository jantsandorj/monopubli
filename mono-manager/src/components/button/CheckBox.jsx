import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel, FormGroup, Skeleton } from '@mui/material';

/**
 * Multi checkbox component
 *
 * @param {string} defValue // default values
 * @param {Array} data
 * @returns
 */
export const CheckBoxs = ({ defValue, loading, name, data, ...props }) => {
    const [value, setvalue] = React.useState(defValue ? defValue.split(',') : []);

    if (loading) return <Skeleton animation="wave" height={60} sx={{ borderRadius: '12px' }} />;

    return (
        <>
            <input type="hidden" name={name} value={value?.toString() || 'off'} />
            <FormControl disabled={props?.disabled}>
                <FormGroup>
                    <ul style={{ display: 'flex', paddingInlineStart: '0px' }}>
                        {data.map((e, i) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        defaultValue={defValue}
                                        name={props.name}
                                        color="default"
                                        defaultChecked={value.find((i) => i === e.code)}
                                    />
                                }
                                label={e.code_eng_nm}
                                value={e.code}
                                name={name}
                                key={i}
                                onChange={(e) => {
                                    let val = value;
                                    if (e.target.checked) {
                                        val.push(e.target.value);
                                    } else {
                                        val.splice(val.indexOf(e.target.value), 1);
                                    }
                                    setvalue(val);
                                }}
                            />
                        ))}
                    </ul>
                </FormGroup>
            </FormControl>
        </>
    );
};
