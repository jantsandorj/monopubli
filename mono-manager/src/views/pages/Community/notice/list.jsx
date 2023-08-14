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
import { useGetNoticeBoardQuery } from 'api/community/NoticeBoardApi';
import CMN from 'utils/statics/code';
import dayjs from 'dayjs';

const formDefaultValues = {
    exposureYn: '',
    searchWrd: '',
    divisionYn: 'ALL'
};

const NoticeBoardList = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [options, setOptions] = useState({ page: 0, size: 10, searchWrd: '', exposureYn: '' });
    const { data, isLoading, isFetching } = useGetNoticeBoardQuery(new URLSearchParams({ ...options }).toString());

    //GRID EVENTS
    const handleRowClick = (row) => navigate(URL.COMMUNITY_NOTICE_MODIFY + `/${row.seq}`);
    const handlePageChange = (page) => setOptions((prevState) => ({ ...prevState, page: page - 1 }));
    const handlePerRowsChange = (newPerPage, page) => setOptions((prevState) => ({ ...prevState, page: page - 1, size: newPerPage }));

    return (
        <MainCard title={t('menu_notice_board')}>
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
                        name: 'exposureYn',
                        commonCode: 'USE_YN'
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
                            selector: (row) => row.divisionYn,
                            sortable: true,
                            sortField: 'divisionYn',
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
                            name: t('label_use_yn'),
                            selector: (row) =>
                                row.exposureYn === 'Y' ? <Typography>{t('use')}</Typography> : <Typography>{t('unused')}</Typography>,
                            center: true,
                            width: '120px'
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
                <CreateButton to={URL.COMMUNITY_NOTICE_CREATE} disabled={isLoading || isFetching} />
            </Grid>
        </MainCard>
    );
};
export default NoticeBoardList;
