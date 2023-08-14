import React from 'react';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IconPlus } from '@tabler/icons';

import Button from './Button';

const BaseButton = styled(Button)({});

const CreateButton = ({ to, state, ...props }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <BaseButton type="button" startIcon={<IconPlus />} onClick={() => navigate(to)} {...props}>
            {t('act_create')}
        </BaseButton>
    );
};

export default CreateButton;
