import React, {useCallback, useState} from 'react';
import { useTranslation } from 'react-i18next';

// MUI
import {Grid } from '@mui/material';
import MainCard from 'components/cards/MainCard';
import Loader from 'components/Loader';
import { DataTable } from 'components';

// Api
import { useGetProjectPaymentsQuery , useUpdateProjectPaymentSituationMutation} from 'api/project/projectPayment';

// COMPONENTS
import CustomFilter from 'components/filter/CustomFilter';
import { useGetCommonFilterCodeQuery } from 'store/commonCodeApi';
import { findCorName } from 'utils/functions/common';

import ListCell from './listCell';
import ViewModal from "../viewModal";

const formDefaultValues = {
    type1: 'ALL',
    searchWrd: ''
};

const TransactionList = () => {
    const { t, i18n } = useTranslation();
    const [options, setOptions] = useState({ page: 0, size: 10, searchWrd : '' });
    const [modalOpen, setModalOpen] = useState(false);
    const { data: memberTypeData } = useGetCommonFilterCodeQuery('MEMBER_TYPE');
    const { data: vatTypeData } = useGetCommonFilterCodeQuery('VAT_TYPE');
    const { data: projectStatusData } = useGetCommonFilterCodeQuery('PROJECT_STATUS');
    const { data: projectPaymentTypeData } = useGetCommonFilterCodeQuery('PROJECT_PAYMENT_TYPE');
    const { data: projectPaymentStatusData } = useGetCommonFilterCodeQuery('PROJECT_PAYMENT_STATUS');

    const { data, isLoading, isFetching } = useGetProjectPaymentsQuery(new URLSearchParams({ ...options }).toString());
    const [onUpdateAction] = useUpdateProjectPaymentSituationMutation();

    // paymentData, projectData
    const [paymentData, setPaymentData] = useState({});
    const [projectData, setProjectData] = useState({});

    const handlePageChange = (page) => setOptions((prevState) => ({ ...prevState, page: page - 1 }));
    const handlePerRowsChange = (newPerPage, page) => setOptions((prevState) => ({ ...prevState, page: page - 1, size: newPerPage }));

    const handleCellClick = (cell, row) => {
        setPaymentData(cell);
        setProjectData(row);
        setModalOpen(true);
    };

    const customCellStyles = {
        rows: {
            style: {
                minHeight: '60px', // override the row height
                borderLeft: '1px solid #dee2e6'
            }
        },
        cells: {
            style: {
                borderRight: '1px solid #dee2e6',
                padding: "0",
                whiteSpace: "pre-wrap"
            },
            'cell-7': {
                style: {
                    padding: "0px !important"
                }
            }
        },
        head: {
            style: {
                borderTop: '2px solid #1e88e5',
                borderLeft: '1px solid #dee2e6'
            }
        },
        headRow: {
            style: {
                backgroundColor: '#e3f2fd',
                fontSize: '15px',
                color: '#212529',
                minHeight: 'auto'
            }
        },
        headCells: {
            style: {
                borderRight: '1px solid #dee2e6',
                padding: '8px',
                fontWeight: 600
            }
        }
    };

    const updateSituation = useCallback(
        (formData) => {
            onUpdateAction(formData)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => console.log('useUpdateProjectPaymentSituationMutation ERROR => ', err));
        },
        [onUpdateAction]
    );

    return (
        <MainCard title={t('project_payment_transaction_list')}>
            {isLoading && <Loader />}

            {/*FILTER*/}
            <CustomFilter
                formDefaultValues={formDefaultValues}
                setOptions={(e) => {
                    setOptions(e);
                }}
                isLoading={isLoading}
                isFetching={isFetching}
                filters={[
                    { label: 'project_payment_user_type_search', type: 'select', name: 'type1', commonCode: 'SEARCH_TYPE1', value: 'All' }
                ]}
            />

            {/*TABLE*/}
            <Grid marginTop={2}>
                <DataTable
                    disabled={isLoading}
                    data={data?.content}
                    progressPending={isLoading}
                    paginationTotalRows={data?.totalElements}
                    onChangeRowsPerPage={handlePerRowsChange}
                    onChangePage={handlePageChange}
                    customStyles={customCellStyles}
                    columns={[
                        {
                            name: t('no'),
                            selector: (row, index) => (data?.totalElements - data?.size * data?.number - index).toString(),
                            center: true,
                            width: '5%'
                        },
                        {
                            name: t('project_user_id'),
                            selector: (row) => row.User?.username,
                            center: true,
                            width: '10%'
                        },
                        {
                            name: t("project_name"),
                            selector: (row) => row.name,
                            center: true
                        },
                        {
                            name: t("business_name"),
                            selector: (row) => (
                                <div style={{whiteSpace: "wrap", padding: "0px 10px"}}>
                                    {(row.User?.Company != null && row.User?.Company != undefined) ? row.User.Company.name : '-'}
                                </div>
                            ),
                            center: true,
                            width: '10%'
                        },
                        {
                            name: t('project_vat_type'),
                            selector: (row) => (
                                <div style={{whiteSpace: "wrap", padding: "0px 10px"}}>
                                    {findCorName(row.vatTypeCd, i18n.language == 'kr' ? 'codeNm' : 'codeEngNm', vatTypeData?.data)}
                                </div>
                            ),
                            center: true,
                            width: '15%'
                        },
                        {
                            name: t("project_payment_billing_type"),
                            cell: (row) => projectPaymentTypeData?.data && <ListCell data={row} type={'type'} codeList={projectPaymentTypeData?.data} handleCellClick={handleCellClick}/>,
                            center: true,
                            flexDirection: "column",
                            width: '10%'
                        },
                        {
                            name: t("project_payment_billing_amount"),
                            cell: (row) => <ListCell data={row} type={'price'} codeList={null} handleCellClick={handleCellClick}/>,
                            center: true,
                            flexDirection: "column",
                            width: '14%'
                        },
                        {
                            name: t('project_status1'),
                            cell: (row) => projectPaymentStatusData?.data && <ListCell data={row} type={'status'} codeList={projectPaymentStatusData?.data} handleCellClick={handleCellClick}/>,
                            center: true,
                            width: '8%'
                        },
                        {
                            name: t('column_manage'),
                            cell: (row) => <ListCell data={row} type={'manage'} codeList={null} onUpdateAction={updateSituation} handleCellClick={null}/>,
                            center: true,
                            width: '12%'
                        }
                    ]}
                />
            </Grid>
            {modalOpen && <ViewModal
                    open={modalOpen}
                    setOpen={setModalOpen}
                    paymentData={paymentData}
                    projectData={projectData}
                    memberTypeData={memberTypeData}
                    projectStatusData={projectStatusData}
                    vatTypeData={vatTypeData}
                    projectPaymentTypeData={projectPaymentTypeData}
                    projectPaymentStatusData={projectPaymentStatusData}
                />
            }
        </MainCard>
    );
};
export default TransactionList;
