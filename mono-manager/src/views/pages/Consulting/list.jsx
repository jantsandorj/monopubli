// REACT
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// MUI
import { Grid } from '@mui/material';

// COMPONENTS
import Loader from 'components/Loader';
import CustomFilter from 'components/filter/CustomFilter';
import MainCard from 'components/cards/MainCard';
import { DataTable } from 'components';

// API
import URL from 'api/url';
import { useGetProjectsQuery } from 'api/project';
import { calcSeq } from 'utils/functions/common';
import CMN from 'utils/statics/code';

const formDefaultValues = {
    paymentType: 'ALL',
    startDate: '' || null,
    endDate: '' || null,
    statusCd: 'new',
    searchCondition: 'ALL',
    searchWrd: ''
};

const ConsultListPage = () => {
    const { t } = useTranslation();

    const [options, setOptions] = useState({ page: 0, size: 10, searchWrd: '' });
    const { data, isLoading, isFetching } = useGetProjectsQuery(new URLSearchParams({ ...options }).toString());

    //GRID EVENTS
    const handlePageChange = (page) => setOptions((prevState) => ({ ...prevState, page: page - 1 }));
    const handlePerRowsChange = (newPerPage, page) => setOptions((prevState) => ({ ...prevState, page: page - 1, size: newPerPage }));

    return (
        <MainCard title={t('Consulting_and_estimate')}>
            {(isLoading || isFetching) && <Loader />}

            {/*FILTER*/}
            <CustomFilter
                formDefaultValues={formDefaultValues}
                setOptions={(e) => {
                    setOptions(e);
                }}
                isLoading={isLoading}
                isFetching={isFetching}
                filters={[
                    {
                        label: 'Payment type',
                        type: 'select',
                        name: 'paymentType',
                        value: 'All',
                        customData: CMN.STATUS.PROJECT.PAYMENTTYPE.map((a) => ({
                            code: a.VALUE,
                            codeEngNm: a.EN,
                            codeNm: a.KR
                        }))
                    },
                    { label: 'Date', type: 'dateRangePicker' },
                    {
                        label: 'Status',
                        type: 'select',
                        name: 'statusCd',
                        customData: CMN.STATUS.PROJECT.LIST.map((a) => ({
                            code: a.VALUE,
                            codeEngNm: a.EN,
                            codeNm: a.KR
                        }))
                    },
                    {
                        label: 'Condition',
                        type: 'select',
                        name: 'searchCondition',
                        value: 'All',
                        customData: CMN.STATUS.PROJECT.CONDITION.map((a) => ({
                            code: a.VALUE,
                            codeEngNm: a.EN,
                            codeNm: a.KR
                        }))
                    }
                ]}
            />

            {/*TABLE*/}
            <Grid marginTop={2}>
                <DataTable
                    disabled={isLoading || isFetching}
                    data={data?.content}
                    progressPending={isLoading}
                    paginationTotalRows={data?.totalElements}
                    onChangeRowsPerPage={handlePerRowsChange}
                    onChangePage={handlePageChange}
                    columns={[
                        {
                            name: t('sequence_number'),
                            selector: (_, index) => calcSeq(data, index),
                            center: true,
                            width: '130px'
                        },
                        {
                            name: t('id'),
                            selector: (row) => <Link to={URL.CONSULTING_MODIFY + `/${row.seq}`}> {row?.username || ''}</Link>,
                            sortable: true,
                            center: true,
                            width: '200px'
                        },
                        {
                            name: t('name'),
                            selector: (row) => row?.name || '',
                            sortField: 'media_type',
                            center: true,
                            width: '150px'
                        },
                        {
                            name: t('status'),
                            selector: (row) => row?.statusCd || '',
                            sortField: 'banner_nm'
                        },
                        {
                            name: t('company_name'),
                            selector: (row) => row?.companyName,
                            sortField: 'start_date',
                            center: true,
                            width: '140px'
                        },
                        {
                            name: t('Down payment'),
                            selector: (row) => row?.downPayment,
                            sortField: 'end_date',
                            center: true,
                            width: '140px'
                        },
                        {
                            name: t('Middle payment'),
                            selector: (row) => row?.middlePayment,
                            sortField: 'seq',
                            center: true,
                            width: '140px'
                        },
                        {
                            name: t('Balance'),
                            selector: (row) => row?.balancePayment,
                            sortField: 'seq',
                            center: true,
                            width: '140px'
                        },
                        {
                            name: t('Finish date'),
                            selector: (row) => row?.userEstimatedEndDate,
                            sortField: 'seq',
                            center: true,
                            width: '140px'
                        }
                    ]}
                />
            </Grid>
        </MainCard>
    );
};
export default ConsultListPage;
