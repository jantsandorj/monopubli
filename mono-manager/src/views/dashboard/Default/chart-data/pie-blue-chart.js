export const chartData = {
    series: [25, 15, 44, 55, 41, 17],
    options: {
        chart: {
            width: '100%',
            type: 'pie'
        },
        theme: {
            monochrome: {
                enabled: true
            }
        },
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        legend: {
            show: true,
            fontSize: '14px',
            fontFamily: `'Roboto', sans-serif`,
            position: 'bottom',
            offsetX: 20,
            labels: {
                useSeriesColors: false
            },
            markers: {
                width: 16,
                height: 16,
                radius: 5
            },
            itemMargin: {
                horizontal: 15,
                vertical: 8
            }
        }
    },
    type: 'pie',
    width: '100%'
};
