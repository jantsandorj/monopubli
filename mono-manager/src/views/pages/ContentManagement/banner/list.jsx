import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Grid, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

import Loader from 'components/Loader';
import FilterBox from 'components/FilterBox';
import MainCard from 'components/cards/MainCard';
import { CreateButton, DataTable, FormCmmCodeSelect, SearchInput } from 'components';

import URL from 'api/url';
import { useGetBannersQuery } from 'api/content/banner';

const formDefaultValues = {
    useYn: 'ALL',
    type: 'ALL',
    mediaType: 'ALL',
    searchWrd: ''
};

const BannerListPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [options, setOptions] = useState({ page: 0, size: 10, searchWrd: '' });
    const { data, isLoading, isFetching } = useGetBannersQuery(new URLSearchParams({ ...options }).toString());

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
    const handleRowClick = (row) => navigate(URL.BANNER_MODIFY + `/${row.seq}`);
    const handlePageChange = (page) => setOptions((prevState) => ({ ...prevState, page: page - 1 }));
    const handlePerRowsChange = (newPerPage, page) => setOptions((prevState) => ({ ...prevState, page: page - 1, size: newPerPage }));

    return (
        <MainCard title={t('menu_banner_manage')}>
            {(isLoading || isFetching) && <Loader />}
            {/*FILTER*/}
            <FilterBox>
                <form onSubmit={handleSubmit(submit)}>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item xs={1}>
                            <Typography variant="h4" align="center">
                                {t('condition')}
                            </Typography>
                        </Grid>

                        {/*useYn*/}
                        <Grid item xs={3.66}>
                            <Controller
                                control={control}
                                name="useYn"
                                render={({ field }) => (
                                    <FormCmmCodeSelect
                                        all
                                        fullWidth
                                        groupName="USE_YN"
                                        label={t('Use yn')}
                                        disabled={isLoading || isFetching}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>

                        {/*type*/}
                        <Grid item xs={3.66}>
                            <Controller
                                control={control}
                                name="type"
                                render={({ field }) => (
                                    <FormCmmCodeSelect
                                        all
                                        fullWidth
                                        groupName="BANNER_TYPE"
                                        label={t('label_banner_type')}
                                        disabled={isLoading || isFetching}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>

                        {/*mediaType*/}
                        <Grid item xs={3.66}>
                            <Controller
                                control={control}
                                name="mediaType"
                                render={({ field }) => (
                                    <FormCmmCodeSelect
                                        all
                                        fullWidth
                                        groupName="MEDIA_TYPE"
                                        label={t('media_type')}
                                        disabled={isLoading || isFetching}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>

                        {/*searchWrd*/}
                        <Grid item xs={1}>
                            <Typography variant="h4" align="center">
                                {t('search')}
                            </Typography>
                        </Grid>
                        <Grid item xs={11}>
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
                            selector: (_, index) => +data?.totalElements - +data?.number - index,
                            center: true,
                            width: '130px'
                        },
                        {
                            name: t('type'),
                            selector: (row) => row.bannerTypeNm,
                            sortable: true,
                            center: true,
                            width: '200px'
                        },
                        {
                            name: t('media_type'),
                            selector: (row) => row.mediaTypeNm,
                            sortField: 'media_type',
                            center: true,
                            width: '150px'
                        },
                        {
                            name: t('banner_name'),
                            selector: (row) => row.bannerNm,
                            sortField: 'banner_nm'
                        },
                        {
                            name: t('ref_start_dt'),
                            selector: (row) => row.startDate,
                            sortField: 'start_date',
                            center: true,
                            width: '140px'
                        },
                        {
                            name: t('ref_end_dt'),
                            selector: (row) => row.endDate,
                            sortField: 'end_date',
                            center: true,
                            width: '140px'
                        },
                        {
                            name: t('exposure_seq'),
                            selector: (row) => row.sortNo,
                            sortField: 'seq',
                            center: true,
                            width: '140px'
                        },
                        {
                            name: t('label_use_yn'),
                            selector: (row) =>
                                row.useYn === 'Y' ? <Typography>{t('use')}</Typography> : <Typography>{t('unused')}</Typography>,
                            center: true,
                            width: '100px'
                        }
                    ]}
                />
            </Grid>
            <Grid style={{ textAlign: 'end' }}>
                <CreateButton to={URL.CONTENT_BANNER_CREATE} disabled={isLoading || isFetching} />
            </Grid>
        </MainCard>
    );
};
export default BannerListPage;
