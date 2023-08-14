// REACT
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

// MUI
import { Grid } from '@mui/material';

// COMPONENTS
import Loader from 'components/Loader';
import CustomFilter from 'components/filter/CustomFilter';
import MainCard from 'components/cards/MainCard';
import { CreateButton, DataTable } from 'components';

// API
import CMN from 'utils/statics/code';
import URL from 'api/url';
import { useGetWorkersQuery } from 'api/worker';
import { useGetCommonFilterCodeQuery } from 'store/commonCodeApi';
import { findCorName, calcSeq } from 'utils/functions/common';

const formDefaultValues = {
    countryCd: 'ALL',
    levelCd: 'ALL',
    positionCd: 'ALL',
    searchWrd: ''
};

const WorkerListPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [options, setOptions] = useState({ page: 0, size: 10, searchWrd: '', adminType: 'worker' });
    const { data, isLoading, isFetching } = useGetWorkersQuery(new URLSearchParams({ ...options }).toString());

    const { data: countryData } = useGetCommonFilterCodeQuery(CMN.GROUP.COUNTRY);
    const { data: positionData } = useGetCommonFilterCodeQuery(CMN.GROUP.POSITION_TYPE);
    const { data: levelData } = useGetCommonFilterCodeQuery(CMN.GROUP.WORKER_LEVEL);

    //GRID EVENTS
    const handleRowClick = (row) => navigate(URL.WORKER_MODIFY + `/${row.seq}`);
    const handlePageChange = (page) => setOptions((prevState) => ({ ...prevState, page: page - 1 }));
    const handlePerRowsChange = (newPerPage, page) => setOptions((prevState) => ({ ...prevState, page: page - 1, size: newPerPage }));

    return (
        <MainCard title={t('menu_worker_manage')}>
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
                    { label: 'label_country', type: 'select', name: 'countryCd', commonCode: 'COUNTRY', value: 'All' },
                    { label: 'label_level', type: 'select', name: 'levelCd', commonCode: 'WORKER_LEVEL', value: 'All' },
                    { label: 'label_position', type: 'select', name: 'positionCd', commonCode: 'POSITION_TYPE', value: 'All' }
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
                    onRowClicked={handleRowClick}
                    columns={[
                        {
                            name: t('sequence_number'),
                            selector: (_, index) => calcSeq(data, index),
                            center: true,
                            width: '130px'
                        },
                        {
                            name: t('column_country'),
                            selector: (row) => findCorName(row.countryCd, 'codeNm', countryData?.data),
                            sortable: true,
                            center: true,
                            width: '200px'
                        },
                        {
                            name: t('column_position'),
                            selector: (row) => findCorName(row.positionCd, 'codeNm', positionData?.data),
                            sortField: 'media_type',
                            center: true,
                            width: '150px'
                        },
                        {
                            name: t('column_thumbnail'),
                            selector: (row) => row.imageAtch,
                            sortField: 'banner_nm'
                        },
                        {
                            name: t('column_email'),
                            selector: (row) => row.email,
                            sortField: 'start_date',
                            center: true,
                            width: '140px'
                        },
                        {
                            name: t('column_name'),
                            selector: (row) => row.fullname,
                            sortField: 'end_date',
                            center: true,
                            width: '140px'
                        },
                        {
                            name: t('column_level'),
                            selector: (row) => findCorName(row.levelCd, 'codeNm', levelData?.data),
                            sortField: 'seq',
                            center: true,
                            width: '140px'
                        },
                        {
                            name: t('column_ongoing'),
                            selector: (row) => row.taskInCharge,
                            sortField: 'seq',
                            center: true,
                            width: '140px'
                        },
                        {
                            name: t('column_done'),
                            selector: (row) => row.taskInCharge,
                            sortField: 'seq',
                            center: true,
                            width: '140px'
                        },
                        {
                            name: t('column_registration_date'),
                            selector: (row) => row.createdDate,
                            sortField: 'seq',
                            center: true,
                            width: '140px'
                        }
                    ]}
                />
            </Grid>
            <Grid style={{ textAlign: 'end' }}>
                <CreateButton to={URL.WORKER_CREATE} disabled={isLoading || isFetching} />
            </Grid>
        </MainCard>
    );
};
export default WorkerListPage;
