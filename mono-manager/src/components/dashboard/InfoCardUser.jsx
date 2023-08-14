import React from 'react';
import InfoCard from './InfoCard';
import PeopleIcon from '@mui/icons-material/People';

export const InfoCardUser = ({ title, stat, icon, description, countOfNew, ...props }) => {
    return <InfoCard title={title} stat={stat} icon={<PeopleIcon />} description={description} countOfNew={countOfNew} {...props} />;
};

export default InfoCardUser;
