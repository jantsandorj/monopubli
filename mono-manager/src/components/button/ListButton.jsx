import { styled } from '@mui/system';
import Button from './Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React from 'react';

const BaseButton = styled(Button)({
    height: 41,
    minWidth: 150
});

const ListButton = ({ to, ...props }) => {
    const { t } = useTranslation();

    return (
        <>
            <Link to={to} style={{ textDecoration: 'none' }}>
                <BaseButton type="button" variant="outlined" {...props}>
                    {t('act_goto_list')}
                </BaseButton>
            </Link>
        </>
    );
};
export default ListButton;
