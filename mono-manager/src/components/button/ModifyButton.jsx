import { styled } from '@mui/system';
import Button from './Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { CircularProgress } from '@mui/material';
import { Edit } from '@mui/icons-material';

const BaseButton = styled(Button)({});

const ModifyButton = ({ to, loading, ...props }) => {
    const { t } = useTranslation();

    return (
        <>
            <Link to={to} state={props?.state} style={{ textDecoration: 'none', marginLeft: '10px' }}>
                <BaseButton type="button" startIcon={loading ? <CircularProgress size={20} color="light" /> : <Edit />} {...props}>
                    {t('act_modify')}
                </BaseButton>
            </Link>
        </>
    );
};

export default ModifyButton;
