import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useTranslation } from 'react-i18next';
import URL from 'api/url';
import { Link, useNavigate } from 'react-router-dom';
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
    justifyContent: 'space-between',
    padding: '10px 0px'
});

const Title = styled(Typography)({
    fontWeight: 'bold',
    fontSize: '20px'
});

const Icon = styled(Typography)({
    width: '25px',
    height: '25px',
    borderRadius: '50%',
    backgroundColor: '#1E88E5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
    fontSize: '15px'
});

// Table
const TitleCell = styled(TableCell)({
    color: '#1E88E5',
    textDecoration: 'underline'
});

const StyledTableCell = styled(TableCell)({
    fontWeight: 'bold'
});

export const NoticeBoard = ({ data }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <StyledInfoCard>
            <TitleContainer>
                <Title>{t('menu_notice_board')}</Title>
                <Icon
                    onClick={() => {
                        navigate(URL.COMMUNITY_NOTICE);
                    }}
                    style={{ cursor: 'pointer' }}
                >
                    <KeyboardArrowRightIcon />
                </Icon>
            </TitleContainer>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>{t('category')}</StyledTableCell>
                            <StyledTableCell align="center">{t('label_subject')}</StyledTableCell>
                            <StyledTableCell align="center">{t('label_use_yn')}</StyledTableCell>
                            <StyledTableCell align="center">{t('view_cnt')}</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data &&
                            data.map((row, index) => (
                                <TableRow key={`board_${index}`} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        {row.divisionYn}
                                    </TableCell>
                                    <TitleCell align="left">
                                        <Link
                                            to={{
                                                pathname: URL.COMMUNITY_NOTICE_DETAIL + '/' + row.seq
                                            }}
                                        >
                                            {row.title}
                                        </Link>
                                    </TitleCell>
                                    <TableCell align="center">{row.exposureYn === 'Y' ? t('use') : t('unused')}</TableCell>
                                    <TableCell align="center">{row.viewCnt}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </StyledInfoCard>
    );
};

export default NoticeBoard;
