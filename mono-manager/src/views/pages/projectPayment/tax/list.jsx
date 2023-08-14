import React, {useCallback, useState} from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

// MUI
import {Grid } from '@mui/material';
import MainCard from 'components/cards/MainCard';
import Loader from 'components/Loader';
import { DataTable } from 'components';
// Api
import { useGetProjectTaxListPaymentsQuery} from 'api/project/projectPayment';

// COMPONENTS
import CustomFilter from 'components/filter/CustomFilter';
import { useGetCommonFilterCodeQuery } from 'store/commonCodeApi';
import { findCorName, addComma } from 'utils/functions/common';
import URL from 'api/url';

import ViewModal from "../viewModal";
import Stats from "../stats";

const formDefaultValues = {
    type2: 'ALL',
    paymentType: 'ALL',
    searchWrd: ''
};

const TaxList = () => {
    const { t, i18n } = useTranslation();
    const [options, setOptions] = useState({ page: 0, size: 10, searchWrd : '', startDate: '', endDate: '', paymentType: '' });
    const [modalOpen, setModalOpen] = useState(false);
    const { data: memberTypeData } = useGetCommonFilterCodeQuery('MEMBER_TYPE');
    const { data: vatTypeData } = useGetCommonFilterCodeQuery('VAT_TYPE');
    const { data: projectStatusData } = useGetCommonFilterCodeQuery('PROJECT_STATUS');
    const { data: projectPaymentTypeData } = useGetCommonFilterCodeQuery('PROJECT_PAYMENT_TYPE');
    const { data: projectPaymentStatusData } = useGetCommonFilterCodeQuery('PROJECT_PAYMENT_STATUS');

    const { data, isLoading, isFetching } = useGetProjectTaxListPaymentsQuery(new URLSearchParams({ ...options }).toString());

    const [paymentData, setPaymentData] = useState({});
    const [projectData, setProjectData] = useState({});

    const handlePageChange = (page) => setOptions((prevState) => ({ ...prevState, page: page - 1 }));
    const handlePerRowsChange = (newPerPage, page) => setOptions((prevState) => ({ ...prevState, page: page - 1, size: newPerPage }));

    const handleCellClick = (row) => {
        setPaymentData(handleRowData(row));
        setProjectData(row);
        setModalOpen(true);
    };

    const handleRowData = (row) => {
        let currentItem = null;
        let currentIdx = 0;

        for (let i = 0; i < row?.projectPayments.length; i++) {
            const item = row.projectPayments[i];
            if ((item.estimatedDate != '' && item.actualDate == '') || (item.estimatedDate != null && item.actualDate == null)) {
                currentItem = item;
                currentIdx = i;
                break;
            } else if((item.estimatedDate == '' && item.actualDate == '') || (item.estimatedDate == null && item.actualDate == null)) {
                currentItem = row?.projectPayments[i - 1];
                currentIdx = i - 1;
                break;
            }
            if(i + 1 == row.projectPayments.length){
                currentItem = item;
                currentIdx = i;
            }
        }
        if(currentItem != null){
            return currentItem;
        }
        return null;
    };

    const handleRowContent = (type, row) => {
        //console.log(row);
        let currentItem = handleRowData(row);

        if(currentItem != null){
            switch (type) {
                case 'type':
                    return findCorName(currentItem.paymentType, i18n.language === 'kr' ? 'codeNm' : 'codeEngNm', projectPaymentTypeData?.data);
                case 'price':
                    return (
                        <>
                            {addComma(currentItem.price)}{t('won')} <br />
                            {(currentItem.actualDate != null && currentItem.actualDate != '') ? currentItem.actualDate : currentItem.estimatedDate}
                        </>
                    );
                case 'status':
                    return findCorName(currentItem.paymentStatus, i18n.language === 'kr' ? 'codeNm' : 'codeEngNm', projectPaymentStatusData?.data);
                default:
                    return findCorName(currentItem.paymentType, i18n.language === 'kr' ? 'codeNm' : 'codeEngNm', projectPaymentTypeData?.data);
            }
        }

        return ' - ';
    };

    return (
        <MainCard title={t('project_payment_tax_list')}>
            {isLoading && <Loader />}
            <Stats type={"tax"}/>
            {/*FILTER*/}
            <CustomFilter
                formDefaultValues={formDefaultValues}
                setOptions={(e) => {
                    setOptions(e);
                }}
                isLoading={isLoading}
                isFetching={isFetching}
                filters={[
                    { label: 'label_country', type: 'dateRangePicker' },
                    { label: 'project_payment_user_type_search', type: 'select', name: 'type2', commonCode: 'SEARCH_TYPE2', value: 'All' },
                    { label: 'project_payment_type_search', type: 'select', name: 'paymentType', commonCode: 'PROJECT_PAYMENT_TYPE', value: 'All' }
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
                    columns={[
                        {
                            name: t('no'),
                            selector: (row, index) => (data?.totalElements - data?.size * data?.number - index).toString(),
                            center: true,
                            width: '5%'
                        },
                        {
                            name: t('project_user_id'),
                            selector: (row) => <Link to={URL.MEMBERSHIP_MODIFY + '/' + row.User?.seq}>{row.User?.username}</Link>,
                            center: true,
                            width: '20%'
                        },
                        {
                            name: t("project_name"),
                            cell: (row) => (
                                <div style={{color : '#03A9F4'}} onClick={() => handleCellClick(row)}>
                                    {row.name}
                                </div>
                            ),
                            center: true
                        },
                        {
                            name: t("project_payment_billing_type"),
                            selector: (row) => handleRowContent('type', row),
                            center: true,
                            width: '15%'
                        },
                        {
                            name: t("project_payment_billing_amount"),
                            selector: (row) => handleRowContent('price', row),
                            center: true,
                            width: '15%'
                        },
                        {
                            name: t('project_status1'),
                            selector: (row) => handleRowContent('status', row),
                            center: true,
                            width: '15%'
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
export default TaxList;
