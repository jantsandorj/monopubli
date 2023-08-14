import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Controller, useForm } from 'react-hook-form';

import { Button, Grid, Typography } from '@mui/material';

import Loader from 'components/Loader';
import FilterBox from 'components/FilterBox';
import MainCard from 'components/cards/MainCard';
import { CreateButton, DataTable, FormCmmCodeSelect, SearchInput } from 'components';

import URL from 'api/url';
import { useGetMailsQuery } from 'api/content/mailTemplate';
import { useGetCommonFilterCodeQuery } from 'store/commonCodeApi';

//CONSTANTS
const formDefaultValues = {
    useYn: 'ALL',
    targetGroup: 'ALL',
    searchKeyword: ''
};

const MailTemplateList = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const { data: targetData, isLoading: targetLoading } = useGetCommonFilterCodeQuery('MAIL_TARGET');

    const [options, setOptions] = useState({ page: 0, size: 10, searchKeyword: '' });
    const { data, isLoading, isFetching } = useGetMailsQuery(new URLSearchParams({ ...options }).toString());
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
    const handleRowClick = (row) => navigate(URL.COMMON_MAIL_TEMPLATE_EDIT + `/${row.seq}`);
    const handlePageChange = (page) => setOptions((prevState) => ({ ...prevState, page: page - 1 }));
    const handlePerRowsChange = (newPerPage, page) => setOptions((prevState) => ({ ...prevState, page: page - 1, size: newPerPage }));

    return (
        <MainCard
            title={t('menu_mail_template')}
            secondary={<CreateButton to={URL.COMMON_MAIL_TEMPLATE_CREATE} disabled={isLoading || isFetching} />}
        >
            {isLoading && <Loader />}
            {/*FILTER*/}
            <FilterBox>
                <form onSubmit={handleSubmit(submit)}>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item xs={1}>
                            <Typography variant="h4" align="center">
                                {t('condition')}
                            </Typography>
                        </Grid>

                        {/*targetGroup*/}
                        <Grid item xs={5.5}>
                            <Controller
                                control={control}
                                name="targetGroup"
                                render={({ field }) => (
                                    <FormCmmCodeSelect
                                        fullWidth
                                        groupName="MAIL_TARGET"
                                        label={t('target_category')}
                                        disabled={isLoading || isFetching}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>

                        {/*useYn*/}
                        <Grid item xs={5.5}>
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

                        {/*searchKeyword*/}
                        <Grid item xs={1}>
                            <Typography variant="h4" align="center">
                                {t('search')}
                            </Typography>
                        </Grid>
                        <Grid item xs={11}>
                            <Controller
                                control={control}
                                name="searchKeyword"
                                render={({ field }) => <SearchInput disabled={isLoading || isFetching} {...field} />}
                            />
                        </Grid>
                    </Grid>
                </form>
            </FilterBox>

            {/*TABLE*/}
            <Grid marginTop={2}>
                <DataTable
                    disabled={isLoading || isFetching || targetLoading}
                    data={data?.content}
                    paginationTotalRows={data?.totalElements}
                    onChangeRowsPerPage={handlePerRowsChange}
                    onChangePage={handlePageChange}
                    onRowClicked={handleRowClick}
                    columns={[
                        {
                            name: t('sequence_number'),
                            selector: (_, index) => (+options.size - 1) * +options.page + index + 1,
                            center: true,
                            width: '130px'
                        },
                        {
                            name: t('mail_template_name'),
                            selector: (row) => row.name
                        },
                        {
                            name: t('target_category'),
                            selector: (row) =>
                                targetData?.data?.find((a) => a.code === row?.targetGroup)?.[
                                    i18n.language === 'kr' ? 'codeNm' : 'codeEngNm'
                                ],
                            center: true
                        },
                        {
                            name: t('label_use_yn'),
                            selector: (row) =>
                                row.useYn === 'Y' ? <Typography>{t('use')}</Typography> : <Typography>{t('unused')}</Typography>,
                            center: true,
                            width: '130px'
                        },
                        {
                            name: t('send'),
                            selector: (row) => (
                                <Button
                                    type="button"
                                    size="small"
                                    variant="contained"
                                    color="warning"
                                    onClick={() => navigate(URL.COMMON_SEND_MAIL_CREATE + '?mailTemplateSeq=' + row.seq)}
                                >
                                    {t('send')}
                                </Button>
                            ),
                            sortField: 'banner_nm',
                            width: '200px',
                            center: true
                        },
                        {
                            name: t('create_dt'),
                            selector: (row) => row.formattedCreateDate,
                            sortField: 'start_date',
                            center: true,
                            width: '130px'
                        }
                    ]}
                />
            </Grid>
        </MainCard>
    );
};

export default MailTemplateList;
