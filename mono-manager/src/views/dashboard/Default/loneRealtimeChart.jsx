import React from 'react';
import Chart from 'react-apexcharts';
import MainCard from 'components/cards/MainCard';
import { Grid, Typography } from '@mui/material';

const LoneRealtimeChart = () => {
    const options = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        }
    };

    const series = [{ data: [10, 41, 35, 51, 49, 62, 69, 91, 148] }];

    return (
        <MainCard sx={{ height: '100%' }}>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Grid container direction="column" spacing={1}>
                                <Grid item>
                                    <Typography variant="subtitle2">Total Growth</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h3">Dynamic Updating Chart</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} mt={5}>
                    <div id="chart">
                        <Chart options={options} series={series} type="line" height={440} />
                    </div>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default LoneRealtimeChart;
