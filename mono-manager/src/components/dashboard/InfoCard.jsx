import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

// Base container
const StyledInfoCard = styled(Card)({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '15px 20px'
});

// Title
const TitleContainer = styled('div')({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
});

const Title = styled(Typography)({
    fontWeight: 'bold',
    fontSize: '20px'
});

const Icon = styled(Typography)({
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#9ED6FF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF'
});

// Stat
const StatContainer = styled('div')({
    display: 'flex',
    width: '100%',
    padding: '15px 0px 25px'
});

const Stat = styled(Typography)({
    fontWeight: 'bold',
    fontSize: '35px'
});

// Description
const DescriptionContainer = styled('div')({
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    height: 22
});

const Description = styled('div')({
    alignItems: 'center',
    paddingTop: 3
});

const DescriptionStat = styled('div')({
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 10
});

export const InfoCard = ({ title, stat, icon, description, countOfNew, ...props }) => {
    return (
        <StyledInfoCard {...props}>
            <TitleContainer>
                <Title>{title}</Title>
                <Icon>{icon}</Icon>
            </TitleContainer>
            <StatContainer>
                <Stat>{stat}</Stat>
            </StatContainer>
            <DescriptionContainer>
                <Description>{description}</Description>
                <DescriptionStat>{countOfNew}</DescriptionStat>
            </DescriptionContainer>
        </StyledInfoCard>
    );
};

export default InfoCard;
