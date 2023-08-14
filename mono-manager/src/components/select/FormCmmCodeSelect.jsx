import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Select as BaseSelect, FormControl, MenuItem, Skeleton, Typography } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';

import { useGetCommonFilterCodeQuery } from 'store/commonCodeApi';

//REACT HOOK FORM - COMMON CODE SELECT
const FormCmmCodeSelect = forwardRef(
    ({ seq, groupName, loading, disabled, label, fullWidth, all, helperText, customData, ...props }, _) => {
        const { data, isLoading } = useGetCommonFilterCodeQuery(groupName);
        const { t, i18n } = useTranslation();

        if (isLoading || loading) return <Skeleton animation="wave" height={60} sx={{ borderRadius: '12px' }} />;

        return (
            <FormControl size="medium" sx={{ minWidth: 200 }} disabled={disabled} fullWidth={fullWidth}>
                <BaseSelect size="small" variant="outlined" input={<OutlinedInput />} {...props} label={props.placeholder ?? ''}>
                    {all && <MenuItem value="ALL">{t('All')}</MenuItem>}
                    {(customData ?? data?.data)?.map((value, i) => (
                        <MenuItem key={i} value={seq ? value.seq : value.code}>
                            {i18n.language === 'kr' ? value.codeNm : value.codeEngNm}
                        </MenuItem>
                    ))}
                </BaseSelect>
                {props.error && helperText && (
                    <Typography color="red" fontSize={12} margin="3px 14px 0" position="">
                        {helperText}
                    </Typography>
                )}
            </FormControl>
        );
    }
);
export default FormCmmCodeSelect;
