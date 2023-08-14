import { styled } from '@mui/system';
import Button from './Button';
import { useTranslation } from 'react-i18next';
import { CircularProgress } from '@mui/material';
import { SaveAsOutlined } from '@mui/icons-material';
import React from 'react';

const BaseButton = styled(Button)({});

const SaveButton = ({ loading, ...props }) => {
    const { t } = useTranslation();

    return (
        <>
            <BaseButton
                type="submit"
                disabled={loading}
                startIcon={loading ? <CircularProgress size={20} color="light" /> : <SaveAsOutlined />}
                {...props}
            >
                {t('act_save')}
            </BaseButton>
        </>
    );
};
export default SaveButton;
