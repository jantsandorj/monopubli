import { useState } from 'react';
import { styled } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { Select as BaseSelect, FormControl, InputLabel, MenuItem, Skeleton } from '@mui/material';

import { useGetCommonFilterCodeQuery } from 'store/commonCodeApi';

const StyledSelect = styled(BaseSelect)({});

const CommonCodeSelect = ({ all, defaultValue, groupName, name, searchCondition, label, loading, disabled, fullWidth, ...props }) => {
    const { data, isLoading } = useGetCommonFilterCodeQuery(groupName);
    const [select, setSelect] = useState();
    const { t, i18n } = useTranslation();

    if (isLoading || loading) return <Skeleton animation="wave" height={60} sx={{ borderRadius: '12px' }} />;

    return (
        <FormControl size="small" sx={{ minWidth: 120 }} disabled={disabled} fullWidth={fullWidth}>
            <InputLabel>{label}</InputLabel>
            {
                <StyledSelect
                    onChange={(e) => setSelect(e.target.value)}
                    defaultValue={defaultValue ? defaultValue : all ? '' : data?.data?.[0]?.code}
                    name={name}
                    label={select?.name || label}
                    {...props}
                >
                    {all && <MenuItem value="">{t('All')}</MenuItem>}
                    {data?.data?.length > 0
                        ? data.data.map((value, i) => (
                              <MenuItem key={i} value={value.code}>
                                  {i18n.language === 'kr' ? value.codeNm : value.codeEngNm}
                              </MenuItem>
                          ))
                        : props.children}
                </StyledSelect>
            }
        </FormControl>
    );
};

export default CommonCodeSelect;
