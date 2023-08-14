import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

import { FormInput, FormNumberInput, Item, RadioButton } from 'components';
import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const SystemSettingRow = ({ title, radioData, radioName, inputData, inputName, inputSubName, inputType, isLoading, placeholder }) => {
    const { t } = useTranslation();
    const [disableInput, setDisableInput] = useState(false);
    const [numberInput, setNumberInput] = useState();

    useEffect(() => {
        if (radioData === 'N') setDisableInput(true);
    }, [inputData, radioData]);

    useEffect(() => {
        setNumberInput(inputData);
    }, [inputData]);

    return (
        <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
            <Grid item xs={2}>
                <Item>
                    <Typography variant="subtitle1">{title ?? ''} </Typography>
                </Item>
            </Grid>

            <Grid item xs={2}>
                <RadioButton
                    checked={true}
                    size="small"
                    onChangeRadio={(value) => {
                        value.target.value === 'N' ? setDisableInput(true) : setDisableInput(false);
                    }}
                    defaultValue={radioData || 'N'}
                    name={radioName}
                    data={[
                        { code: 'Y', code_eng_nm: t('use') },
                        { code: 'N', code_eng_nm: t('unused') }
                    ]}
                />
            </Grid>

            {inputType === 'number' ? (
                <Grid item xs={1}>
                    {!disableInput ? (
                        <FormNumberInput name={inputName} placeholder={placeholder} defaultValue={inputData} loading={isLoading} />
                    ) : (
                        <>
                            <FormNumberInput disabled name={inputName} placeholder={placeholder} value={numberInput} loading={isLoading} />
                            <TextField style={{ opacity: 0 }} type="hidden" name={inputName} value={numberInput} />
                        </>
                    )}
                </Grid>
            ) : inputType === 'ip' ? (
                <Grid item xs={7}>
                    <FormInput
                        disabled={disableInput}
                        id={inputName}
                        name={inputName}
                        placeholder={placeholder}
                        type="text"
                        defaultValue={inputData}
                        loading={isLoading}
                    />
                </Grid>
            ) : inputType === 'text' ? (
                <Grid item xs={7}>
                    {!disableInput ? (
                        <FormInput
                            disabled={disableInput}
                            id={inputName}
                            name={inputName}
                            placeholder={placeholder}
                            type="text"
                            defaultValue={inputData}
                            loading={isLoading}
                        />
                    ) : (
                        <FormInput
                            disabled
                            name={inputName}
                            placeholder={placeholder}
                            type="text"
                            value={numberInput}
                            loading={isLoading}
                        />
                    )}
                </Grid>
            ) : (
                ''
            )}

            <p>{inputSubName ?? ''}</p>
        </Grid>
    );
};

export default SystemSettingRow;
