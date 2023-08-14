import React from 'react';
import InfoCard from './InfoCard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

export const InfoCardAdmin = ({ title, stat, icon, ...props }) => {
    return <InfoCard title={title} stat={stat} icon={<ManageAccountsIcon />} {...props} />;
};

export default InfoCardAdmin;
