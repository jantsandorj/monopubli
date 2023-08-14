import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Grid, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

import Loader from 'components/Loader';
import FilterBox from 'components/FilterBox';
import MainCard from 'components/cards/MainCard';
import { CreateButton, DataTable, FormCmmCodeSelect, SearchInput } from 'components';
import CMN from 'utils/statics/code';

import URL from 'api/url';
import { useGetProjectsQuery } from 'api/project';
import { useGetCommonFilterCodeQuery } from 'store/commonCodeApi';
import { findCorName, calcSeq } from 'utils/functions/common';
import { FormLabelStyle } from 'components/button/style';

const formDefaultValues = {
    vatTypeCd: 'ALL',
    statusCd: 'ALL',
    searchWrd: ''
};

const ProjectListPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [options, setOptions] = useState({ page: 0, size: 10, searchWrd: '', adminType: 'worker' });
    const { data, isLoading, isFetching } = useGetProjectsQuery(new URLSearchParams({ ...options }).toString());

    const { data: vatTypeData, isCountryLoading, isCountryFetching } = useGetCommonFilterCodeQuery(CMN.GROUP.VAT_TYPE);
    const { data: statusData, isStatusLoading, isStatusFetching } = useGetCommonFilterCodeQuery(CMN.GROUP.STATUS);
    const { data: positionData, isPositionLoading, isPositionFetching } = useGetCommonFilterCodeQuery(CMN.GROUP.POSITION_TYPE);
    const { data: levelData, isLevelLoading, isLevelFetching } = useGetCommonFilterCodeQuery(CMN.GROUP.WORKER_LEVEL);

    const { control, handleSubmit } = useForm({
        defaultValues: formDefaultValues
    });

    //SEARCH EVENT
    const submit = (values) => {
        let conditions = {};
        Object.keys(values).forEach((key) => (conditions[key] = values[key] !== t('ALL') ? values[key] : ''));
        setOptions((prevState) => ({ ...prevState, ...conditions }));
    };

    //GRID EVENTS
    const handleRowClick = (row) => navigate(URL.PROJECT_MODIFY + `/${row.seq}`);
    const handlePageChange = (page) => setOptions((prevState) => ({ ...prevState, page: page - 1 }));
    const handlePerRowsChange = (newPerPage, page) => setOptions((prevState) => ({ ...prevState, page: page - 1, size: newPerPage }));

    return (
        <MainCard title={t('project_manage')}>
            {(isLoading || isFetching) && <Loader />}
            {/*FILTER*/}
            <FilterBox>
                <form onSubmit={handleSubmit(submit)}>
                    <Grid container sx={FormLabelStyle?.grayCol}>
                        <Grid item container display={'flex'} alignItems={'center'}>
                            <Grid item xs={3} height={'100%'}>
                                <Typography sx={FormLabelStyle?.grayLabel}>{t('condition')}</Typography>
                            </Grid>

                            {/*vatTypeCd*/}
                            <Grid item xs={4.5} sx={{ p: 1 }}>
                                <Controller
                                    control={control}
                                    name="vatTypeCd"
                                    render={({ field }) => (
                                        <FormCmmCodeSelect
                                            seq
                                            all
                                            fullWidth
                                            groupName="VAT_TYPE"
                                            label={t('label_country')}
                                            disabled={isLoading || isFetching}
                                            {...field}
                                        />
                                    )}
                                />
                            </Grid>

                            {/*statusCd*/}
                            <Grid item xs={4.5} sx={{ p: 1 }}>
                                <Controller
                                    name="statusCd"
                                    control={control}
                                    render={({ field }) => (
                                        <FormCmmCodeSelect
                                            all
                                            fullWidth
                                            loading={isLoading}
                                            customData={CMN.STATUS.PROJECT.LIST.map((a) => ({
                                                code: a.VALUE,
                                                codeEngNm: a.EN,
                                                codeNm: a.KR
                                            }))}
                                            {...field}
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    {/*searchWrd*/}
                    <Grid container sx={FormLabelStyle?.grayCol}>
                        <Grid item xs={3}>
                            <Typography sx={FormLabelStyle?.grayLabel} align="center">
                                {t('search')}
                            </Typography>
                        </Grid>
                        <Grid item xs={9} sx={{ p: 1 }}>
                            <Controller
                                control={control}
                                name="searchWrd"
                                render={({ field }) => <SearchInput disabled={isLoading || isFetching} {...field} />}
                            />
                        </Grid>
                    </Grid>
                </form>
            </FilterBox>

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
                            name: t('project_name'),
                            selector: (row) => row.name,
                            sortField: 'name'
                        },
                        {
                            name: t('project_user_name'),
                            selector: (row) => row.username,
                            sortField: 'username',
                            center: true,
                            width: '140px'
                        },
                        {
                            name: t('project_estimation'),
                            selector: (row) => row.userEstimatedEndDate,
                            sortField: 'userEstimatedEndDate',
                            center: true,
                            width: '140px'
                        },
                        {
                            name: t('project_transaction_status'),
                            selector: (row) => findCorName(row.vatTypeCd, 'codeEngNm', vatTypeData?.data, 'seq'),
                            sortable: true,
                            center: true,
                            width: '200px'
                        },
                        {
                            name: t('project_status'),
                            selector: (row) =>
                                findCorName(
                                    row.statusCd,
                                    'codeEngNm',
                                    CMN.STATUS.PROJECT.LIST.map((a) => ({
                                        code: a.VALUE,
                                        codeEngNm: a.EN,
                                        codeNm: a.KR
                                    }))
                                ),
                            sortField: 'statusCd',
                            center: true,
                            width: '140px'
                        }
                    ]}
                />
            </Grid>
            <Grid style={{ textAlign: 'end' }}>
                <CreateButton to={URL.PROJECT_CREATE} disabled={isLoading || isFetching} />
            </Grid>
        </MainCard>
    );
};
export default ProjectListPage;
