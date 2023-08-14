import React from 'react';
import InfoCard from './InfoCard';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const InfoCardBoard = ({ title, stat, icon, description, countOfNew, ...props }) => {
    return <InfoCard title={title} stat={stat} icon={<AssignmentIcon />} description={description} countOfNew={countOfNew} {...props} />;
};

export default InfoCardBoard;
