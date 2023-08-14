// REACT
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

// MUI
import { Grid, Typography } from '@mui/material';

// COMPONENTS
import Loader from 'components/Loader';
import CustomFilter from 'components/filter/CustomFilter';
import MainCard from 'components/cards/MainCard';
import { CreateButton, DataTable } from 'components';

// OTHER
import URL from 'api/url';
import { useGetFreeBoardQuery } from 'api/community/FreeBoardApi';
import CMN from 'utils/statics/code';
import dayjs from 'dayjs';
import { useGetCommonFilterCodeQuery } from 'store/commonCodeApi';
import { findCorName, calcSeq } from 'utils/functions/common';

const formDefaultValues = {
    exposureYn: '',
    searchWrd: '',
    divisionCd: ''
};

const FreeBoardList = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [options, setOptions] = useState({ page: 0, size: 10, searchWrd: '', exposureYn: '' });
    const { data, isLoading, isFetching } = useGetFreeBoardQuery(new URLSearchParams({ ...options }).toString());

    const { data: freeBoardData } = useGetCommonFilterCodeQuery(CMN.GROUP.FREE_BOARD);

    //GRID EVENTS
    const handleRowClick = (row) => navigate(URL.COMMUNITY_FREE_MODIFY + `/${row.seq}`);
    const handlePageChange = (page) => setOptions((prevState) => ({ ...prevState, page: page - 1 }));
    const handlePerRowsChange = (newPerPage, page) => setOptions((prevState) => ({ ...prevState, page: page - 1, size: newPerPage }));

    return (
        <MainCard title={t('menu_free_board')}>
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
                        label: 'category',
                        value: 'All',
                        type: 'select',
                        name: 'divisionCd',
                        commonCode: 'FREE_BOARD'
                    }
                ]}
            />

            {/*TABLE*/}
            <Grid marginTop={2}>
                <DataTable
                    disabled={isLoading || isFetching}
                    data={isLoading ? [] : data?.content}
                    progressPending={isLoading}
                    paginationTotalRows={data?.totalElements}
                    onChangeRowsPerPage={handlePerRowsChange}
                    onChangePage={handlePageChange}
                    onRowClicked={handleRowClick}
                    columns={[
                        {
                            name: t('sequence_number'),
                            selector: (row, index) => (data?.totalElements - data?.size * data?.number - index).toString(),
                            center: true,
                            width: '120px'
                        },
                        {
                            name: t('category'),
                            selector: (row) => findCorName(row.divisionCd, 'codeNm', freeBoardData?.data),
                            sortField: 'seq',
                            center: true,
                            width: '200px'
                        },
                        {
                            name: t('label_title'),
                            selector: (row) => row.title,
                            sortable: true,
                            sortField: 'title'
                        },
                        {
                            name: t('label_created_by'),
                            selector: (row) => row.fullname,
                            sortable: true,
                            sortField: 'fullname',
                            center: true,
                            width: '250px'
                        },
                        {
                            name: t('label_view_count'),
                            selector: (row) => row.viewCnt,
                            center: true,
                            width: '120px'
                        },
                        {
                            name: t('create_dt'),
                            selector: (row) => dayjs(row.createdDate).format('YYYY-MM-DD HH:MM'),
                            sortable: true,
                            sortField: 'created_date',
                            center: true,
                            width: '200px'
                        }
                    ]}
                />
            </Grid>
            <Grid style={{ textAlign: 'end' }}>
                <CreateButton to={URL.COMMUNITY_FREE_CREATE} disabled={isLoading || isFetching} />
            </Grid>
        </MainCard>
    );
};
export default FreeBoardList;
