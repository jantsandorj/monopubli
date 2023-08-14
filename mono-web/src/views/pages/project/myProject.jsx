// REACT
import React, {lazy} from "react";

// MUI
import { Box, Container, Grid, Typography } from "@mui/material";


// COMPONENT
import Subcard from "components/card/subcard";
import { DataTable } from "components/table";
// import CustomFilter from "component/filter/CustomFilter";
// STYLE
import { MyPageStyle } from "./style";
import DateFilter from "components/filter/dateFilter";
import Loadable from "components/Loadable";
import SubTitle from "components/subTitle";
const SubMenu = Loadable(lazy(() => import('views/layout/subMenu')));

function MyProject() {

    const data2 = [
        {
            "title": "tiiiitttlleee",
            "rate": "100%",
            "dPayment": "500,000",
            "mPayment": "-",
            "balance": "500,000",
            "date": "2023-05-05",
            "statusCd": "E",
        },
        {
            "title": "456456 454 65 fsdf sdkf klsdf dn dsjnf sdn fksdn kj dnjn jndjf",
            "rate": "100%",
            "dPayment": "500,000",
            "mPayment": "-",
            "balance": "500,000",
            "date": "2023-05-05",
            "statusCd": "R",
        },
        {
            "title": "456456 454 65 fsdf sdkf klsdf dn dsjnf sdn fksdn kj dnjn jndjf",
            "rate": "100%",
            "dPayment": "500,000",
            "mPayment": "300,300",
            "balance": "500,000",
            "date": "2023-05-05",
            "statusCd": "C",
        },
        {
            "title": "456456 454 65 fsdf sdkf klsdf dn dsjnf sdn fksdn kj dnjn jndjf",
            "rate": "100%",
            "dPayment": "500,000",
            "mPayment": "-",
            "balance": "500,000",
            "date": "2023-05-05",
            "statusCd": "I",
        },
        {
            "title": "456456 454 65 fsdf sdkf klsdf dn dsjnf sdn fksdn kj dnjn jndjf",
            "rate": "100%",
            "dPayment": "500,000",
            "mPayment": "-",
            "balance": "500,000",
            "date": "2023-05-05",
            "statusCd": "D",
        }
    ]

    // statusCD Color Function
    const getStatusClassName = (statusCd) => {
        const statusClasses = {
            R: "status_reg",
            E: "status_esti",
            C: "status_cont",
            I: "status_inpro",
            D: "status_dev",
            P: "status_paym",
        };

        return statusClasses[statusCd] ? `${statusClasses[statusCd]} statuscd` : "";
    };

    return (
        <Container>
            <Grid container direction="row" justifyContent="flex-end">
                <Grid item xs={2}>
                    <SubMenu />
                </Grid>
                <Grid item xs={10}>
                    <Grid container direction="column" alignItems="center" sx={{minHeight: '85vh'}}>
                        <SubTitle text={"마이페이지"}/>
                        <Box sx={MyPageStyle.search_calendar} textAlign='center'>
                            <DateFilter />
                        </Box>
                        <Grid sx={MyPageStyle.custom_filter}>
                            {/*<CustomFilter
                            // formDefaultValues={formDefaultValues}
                            // setOptions={(e) => {
                            //     setOptions(e);
                            // }}
                            // isLoading={isLoading}
                            // isFetching={isFetching}
                            // filters={[{ label: 'member_type', type: 'select', name: 'memberTypeCd', commonCode: 'MEMBER_TYPE', value: 'All' }]}
                            />*/}
                        </Grid>

                    <DataTable
                        // disabled={isLoading}
                        data={data2}
                        // progressPending={isLoading}
                        // paginationTotalRows={data?.totalElements}
                        // onChangeRowsPerPage={handlePerRowsChange}
                        // onChangePage={handlePageChange}
                        // onRowClicked={handleRowClick}
                        columns={[
                            {
                                name: 'project_title',
                                selector: (row) => row.title,
                                sortField: 'name',
                                width: '200px',
                            },
                            {
                                name: "progress_rate",
                                selector: (row) => row.rate,
                                width: '70px',
                                center: 'true',
                            },
                            {
                                name: 'down_payment',
                                selector: (row) =>
                                    <Box sx={MyPageStyle.payment_status}>
                                        <Typography sx={MyPageStyle.payment_status_pay}>{row.dPayment}</Typography>
                                        <Typography sx={MyPageStyle.payment_status_date}>2023-05-03</Typography>
                                    </Box>,
                                center: 'true',
                            },
                            {
                                name: 'middle_payment',
                                selector: (row) =>
                                    <Box sx={MyPageStyle.payment_status}>
                                        <Typography sx={MyPageStyle.payment_status_pay}>{row.mPayment}</Typography>
                                        <Typography sx={MyPageStyle.payment_status_date}>2023-05-03</Typography>
                                    </Box>,
                                center: 'true',
                            },
                            {
                                name: 'balance',
                                selector: (row) =>
                                    <Box sx={MyPageStyle.payment_status}>
                                        <Typography sx={MyPageStyle.payment_status_pay}>{row.balance}</Typography>
                                        <Typography sx={MyPageStyle.payment_status_date}>2023-05-03</Typography>
                                    </Box>,
                                center: 'true',
                            },
                            {
                                name: 'label_register_dt',
                                selector: (row) => row.date,
                                center: 'true',
                            },
                            {
                                name: 'label_status',
                                selector: (row) =>
                                    <Box sx={MyPageStyle.label_status}>
                                        <Typography className={getStatusClassName(row.statusCd)}>
                                            {row.statusCd}
                                        </Typography>
                                    </Box>,
                                width: '100px',
                                center: 'true',
                            }
                        ]}
                    />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
export default MyProject;