import React from 'react';
import InfoCard from './InfoCard';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

export const InfoCardOnlineAdmin = ({ title, stat, icon, ...props }) => {
    return <InfoCard title={title} stat={stat} icon={<AdminPanelSettingsIcon />} {...props} />;
};

export default InfoCardOnlineAdmin;
