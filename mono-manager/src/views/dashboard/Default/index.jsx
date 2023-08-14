import { InfoCardUser, InfoCardAdmin, InfoCardBoard, InfoCardOnlineAdmin, NoticeBoard, QABoard } from '../../../components';
import { useGetDashboardInfoQuery, useGetDashboardNoticeBoardsQuery, useGetDashboardQnaBoardsQuery } from './DashboardApi';

// material-ui
import { Grid, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import ApexChartPie from './ApecChartsPie';
import LineRealtimeChart from './loneRealtimeChart';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const { data: dashboardData } = useGetDashboardInfoQuery();
    const { data: dashboardNoticeData, isLoading: noticeLoading } = useGetDashboardNoticeBoardsQuery();
    const { data: dashboardQnaData, isLoading: qnaLoading } = useGetDashboardQnaBoardsQuery();
    const { t } = useTranslation();

    return (
        <Box>
            <Grid container spacing={2} mb="15px">
                <Grid item xl={3} md={6} xs={12}>
                    <InfoCardUser
                        title={t('user')}
                        description={t('members_this_month')}
                        stat={dashboardData?.content?.users || 0}
                        countOfNew={dashboardData?.content?.lastMonthUsers || 0}
                    />
                </Grid>
                <Grid item xl={3} md={6} xs={12}>
                    <InfoCardAdmin title={t('admins')} stat={dashboardData?.content?.admins || 0}></InfoCardAdmin>
                </Grid>
                <Grid item xl={3} md={6} xs={12}>
                    <InfoCardBoard
                        title={t('boards')}
                        description={t('posts_this_month')}
                        stat={dashboardData?.content?.boards || 0}
                        countOfNew={dashboardData?.content?.lastMonthBoards || 0}
                    ></InfoCardBoard>
                </Grid>
                <Grid item xl={3} md={6} xs={12}>
                    <InfoCardOnlineAdmin
                        title={t('online_admin_now')}
                        stat={dashboardData?.content?.onlineAdmins || 0}
                    ></InfoCardOnlineAdmin>
                </Grid>
            </Grid>
            <Grid container spacing={2} mb="15px">
                <Grid item xl={4} lg={6} xs={12}>
                    <LineRealtimeChart />
                </Grid>
                <Grid item xl={4} lg={6} xs={12}>
                    <TotalGrowthBarChart />
                </Grid>
                <Grid item xl={4} lg={6} xs={12}>
                    <ApexChartPie />
                </Grid>
            </Grid>
            <Grid container spacing={2} mb="15px">
                <Grid item xl={6} lg={12} xs={12}>
                    <NoticeBoard data={dashboardNoticeData?.content} isLoading={noticeLoading} />
                </Grid>
                <Grid item xl={6} lg={12} xs={12}>
                    <QABoard data={dashboardQnaData?.content} isLoading={qnaLoading} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
