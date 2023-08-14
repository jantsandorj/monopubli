import React, { useEffect } from 'react';
import {useTranslation} from "react-i18next";
import { addComma } from 'utils/functions/common';
import {Box, Grid, Typography} from "@mui/material";
import { FormLabelStyle } from 'components/button/style';
import { useGetProjectPaymentStatsReceivableQuery , useGetProjectPaymentStatsTaxQuery} from 'api/project/projectPayment';

const TaxComponent = () => {
    const { t } = useTranslation();
    const { data, isLoading } = useGetProjectPaymentStatsTaxQuery();
    // Do something with data and isLoading...
    let totalCounts = data && (data?.content?.down_project_counts + data?.content?.middle_project_counts + data?.content?.balance_project_counts);
    let totals = data && (data?.content?.down_tax + data?.content?.middle_tax + data?.content?.balance_tax);
    return (
        <Box border="1px solid" borderColor={'#454545'} textAlign={'center'} borderRadius={0} sx={{ mb: 2 }}>
            <Grid container >
                <Grid item xs={3} height={'100%'} textAlign="center">
                    <Typography sx={{...FormLabelStyle?.grayCustomLabel, display: 'block',borderRight: '1px solid #dee2e6'}}>{t('project_payment_stats_total_contract_amount')}</Typography>
                </Grid>
                <Grid item xs={3} height={'100%'}>
                    <Typography sx={{...FormLabelStyle?.grayCustomLabel, display: 'block',borderRight: '1px solid #dee2e6'}}>{t('project_payment_stats_total_middle_contract_amount')}</Typography>
                </Grid>
                <Grid item xs={3} height={'100%'}>
                    <Typography sx={{...FormLabelStyle?.grayCustomLabel, display: 'block',borderRight: '1px solid #dee2e6'}}>{t('project_payment_stats_total_balance_contract_amount')}</Typography>
                </Grid>
                <Grid item xs={3} height={'100%'}>
                    <Typography sx={{...FormLabelStyle?.grayCustomLabel, display: 'block'}}>{t('project_payment_stats_totals')}</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={3} height={'100%'}>
                    <Typography sx={FormLabelStyle?.grayColWithPadding}>{data?.content?.down_project_counts} {t('cases')} <br/> {addComma(data?.content?.down_tax)}</Typography>
                </Grid>
                <Grid item xs={3} height={'100%'}>
                    <Typography sx={FormLabelStyle?.grayColWithPadding}>{data?.content?.middle_project_counts} {t('cases')} <br/> {addComma(data?.content?.middle_tax)}</Typography>
                </Grid>
                <Grid item xs={3} height={'100%'}>
                    <Typography sx={FormLabelStyle?.grayColWithPadding}>{data?.content?.balance_project_counts} {t('cases')} <br/> {addComma(data?.content?.balance_tax)}</Typography>
                </Grid>
                <Grid item xs={3} height={'100%'}>
                    <Typography sx={FormLabelStyle?.grayColWithPadding}>{totalCounts} {t('cases')} <br/> {addComma(totals)}</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

const ReceivableComponent = () => {
    const { t } = useTranslation();
    const { data, isLoading } = useGetProjectPaymentStatsReceivableQuery();
    // Do something with data and isLoading...
    let totalCounts = data && (data?.content?.down_project_counts + data?.content?.middle_project_counts + data?.content?.balance_project_counts);
    let totals = data && (data?.content?.down_receivable + data?.content?.middle_receivable + data?.content?.balance_receivable);
    return (
        <Box border="1px solid" borderColor={'#454545'} textAlign={'center'} borderRadius={0} sx={{ mb: 2 }}>
            <Grid container >
                <Grid item xs={3} height={'100%'} textAlign="center">
                    <Typography sx={{...FormLabelStyle?.grayCustomLabel, display: 'block',borderRight: '1px solid #dee2e6'}}>{t('project_payment_stats_total_down_payment')}</Typography>
                </Grid>
                <Grid item xs={3} height={'100%'}>
                    <Typography sx={{...FormLabelStyle?.grayCustomLabel, display: 'block',borderRight: '1px solid #dee2e6'}}>{t('project_payment_stats_total_receivable_middle_amount')}</Typography>
                </Grid>
                <Grid item xs={3} height={'100%'}>
                    <Typography sx={{...FormLabelStyle?.grayCustomLabel, display: 'block',borderRight: '1px solid #dee2e6'}}>{t('project_payment_stats_total_receivable_balance_amount')}</Typography>
                </Grid>
                <Grid item xs={3} height={'100%'}>
                    <Typography sx={{...FormLabelStyle?.grayCustomLabel, display: 'block'}}>{t('project_payment_stats_total_receivable')}</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={3} height={'100%'}>
                    <Typography sx={FormLabelStyle?.grayColWithPadding}>{data?.content?.down_project_counts} {t('cases')} <br/> {addComma(data?.content?.down_receivable)}</Typography>
                </Grid>
                <Grid item xs={3} height={'100%'}>
                    <Typography sx={FormLabelStyle?.grayColWithPadding}>{data?.content?.middle_project_counts} {t('cases')} <br/> {addComma(data?.content?.middle_receivable)}</Typography>
                </Grid>
                <Grid item xs={3} height={'100%'}>
                    <Typography sx={FormLabelStyle?.grayColWithPadding}>{data?.content?.balance_project_counts} {t('cases')} <br/> {addComma(data?.content?.balance_receivable)}</Typography>
                </Grid>
                <Grid item xs={3} height={'100%'}>
                    <Typography sx={FormLabelStyle?.grayColWithPadding}>{totalCounts} {t('cases')} <br/> {addComma(totals)}</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

const Stats = ({type}) => {
    const { t } = useTranslation();
    return (
        <div>
            {type && type == 'tax' ? <TaxComponent /> : <ReceivableComponent />}
        </div>
    );
};

export default Stats;
