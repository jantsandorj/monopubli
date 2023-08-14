import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Controller, useForm } from 'react-hook-form';

import { Button, Grid, Typography } from '@mui/material';

import Loader from 'components/Loader';
import FilterBox from 'components/FilterBox';
import MainCard from 'components/cards/MainCard';
import { DataTable, FormCmmCodeSelect, SearchInput, Button as SendEmailBtn } from 'components';

import { useGetMailGroupDetailQuery, useGetMailGroupListQuery } from 'api/content/mailSendGroup';
import { useGetMailsQuery } from 'api/content/mailTemplate';
import { TableModal } from 'components/Modal/TableModal';
import { useGetCommonFilterCodeQuery } from 'store/commonCodeApi';
import { useNavigate, useSearchParams } from 'react-router-dom';
import URL from 'api/url';

//CONSTANTS
const formDefaultValues = {
    targetGroup: 'ALL',
    mailTemplateSeq: 'ALL',
    status: 'ALL',
    searchKeyword: ''
};

const SendGroupMailListPage = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const mailSeq = searchParams.get('mailTemplateSeq');
    const { control, handleSubmit, setValue } = useForm({
        defaultValues: formDefaultValues
    });

    const [groupItem, setGroupItem] = useState();
    const [options, setOptions] = useState({ page: 0, size: 10, searchWrd: '', mailTemplateSeq: mailSeq ?? '' });

    //SEARCH QUERY
    const { data: targetData, isLoading: targetLoading } = useGetCommonFilterCodeQuery('MAIL_TARGET');
    const { data: statusData, isLoading: statusLoading } = useGetCommonFilterCodeQuery('MAIL_STATUS');
    const { data: templates, isLoading: tempLoading } = useGetMailsQuery(new URLSearchParams({ page: 0, size: 10 }).toString());

    // Main query
    const { data, isLoading, isFetching } = useGetMailGroupListQuery(new URLSearchParams({ ...options }).toString());
    const { data: detailTemplates, isLoading: detailLoading } = useGetMailGroupDetailQuery(
        new URLSearchParams({ groupId: groupItem?.seq }).toString()
    );

    //SEARCH EVENT
    const submit = (values) => {
        let conditions = {};
        Object.keys(values).forEach((key) => (conditions[key] = values[key] !== t('ALL') ? values[key] : ''));
        setOptions((prevState) => ({ ...prevState, ...conditions }));
    };

    //GRID EVENTS
    const handlePageChange = (page) => setOptions((prevState) => ({ ...prevState, page: page - 1 }));
    const handlePerRowsChange = (newPerPage, page) => setOptions((prevState) => ({ ...prevState, page: page - 1, size: newPerPage }));

    //Initializing
    useEffect(() => {
        if (templates && mailSeq) setValue('mailTemplateSeq', mailSeq);
    }, [mailSeq, templates, setValue]);

    return (
        <MainCard
            title={t('menu_mail_template')}
            secondary={<SendEmailBtn onClick={() => navigate(URL.COMMON_SEND_MAIL_CREATE)}>{t('send_mail')}</SendEmailBtn>}
        >
            {isLoading && <Loader />}
            {/*FILTER*/}
            <FilterBox>
                <form onSubmit={handleSubmit(submit)}>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item xs={1}>
                            <Typography variant="h4" textAlign="center">
                                {t('condition')}
                            </Typography>
                        </Grid>

                        {/*targetGroup*/}
                        <Grid item xs={11 / 3}>
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

                        {/*Mail template*/}
                        <Grid item xs={11 / 3}>
                            <Controller
                                control={control}
                                name="mailTemplateSeq"
                                render={({ field }) => (
                                    <FormCmmCodeSelect
                                        all
                                        fullWidth
                                        loading={tempLoading}
                                        customData={templates?.content.map((a) => ({ code: a.seq, codeEngNm: a.name, codeNm: a.name }))}
                                        label={t('menu_mail_template')}
                                        disabled={isLoading || isFetching || tempLoading}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>

                        {/*useYn*/}
                        <Grid item xs={11 / 3}>
                            <Controller
                                control={control}
                                name="status"
                                render={({ field }) => (
                                    <FormCmmCodeSelect
                                        all
                                        fullWidth
                                        groupName="MAIL_STATUS"
                                        label={t('status')}
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
                    disabled={isLoading || isFetching}
                    data={data?.content}
                    progressPending={statusLoading || targetLoading}
                    paginationTotalRows={data?.totalElements}
                    onChangeRowsPerPage={handlePerRowsChange}
                    onChangePage={handlePageChange}
                    columns={[
                        {
                            name: t('sequence_number'),
                            selector: (_, index) => (+options.size - 1) * +options.page + index + 1,
                            center: true,
                            width: '130px'
                        },
                        {
                            name: t('mail_template_name'),
                            selector: (row) => row.name,
                            sortable: true,
                            center: true
                        },
                        {
                            name: t('mail_subject'),
                            selector: (row) => row.subject,
                            sortable: true,
                            center: true
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
                            name: t('receiver'),
                            selector: (row) => (
                                <Button type="button" size="small" variant="contained" color="warning" onClick={() => setGroupItem(row)}>
                                    {t('view')}
                                </Button>
                            ),
                            sortField: 'banner_nm',
                            width: '200px'
                        },
                        {
                            name: t('sender'),
                            selector: (row) => row?.senderFullname,
                            center: true,
                            width: '130px'
                        },
                        {
                            name: t('status'),
                            selector: (row) =>
                                statusData?.data?.find((a) => a.code === row?.status)?.[i18n.language === 'kr' ? 'codeNm' : 'codeEngNm'],
                            center: true,
                            width: '130px'
                        },
                        {
                            name: t('send_date'),
                            selector: (row) => row.sendDate,
                            sortField: 'sendDate',
                            center: true,
                            width: '140px'
                        }
                    ]}
                />
            </Grid>

            {/* MODAL GROUP DETAIL LIIST */}
            <TableModal
                title={groupItem?.name ?? 'Mails'}
                sendDate={groupItem?.sendDate}
                open={!!groupItem}
                close={() => setGroupItem(undefined)}
                tableData={detailTemplates?.content ?? []}
                tableLoading={detailLoading}
                tableColumns={[
                    {
                        name: t('sequence_number'),
                        selector: (_, index) => index + 1,
                        center: true,
                        width: '130px'
                    },
                    {
                        name: t('id'),
                        selector: (row) => row.receiverUsername,
                        center: true
                    },
                    {
                        name: t('label_name'),
                        selector: (row) => row.receiverFullname,
                        center: true
                    },
                    {
                        name: t('send_date'),
                        selector: (row) => row.sendDate,
                        center: true
                    },
                    {
                        name: t('status'),
                        selector: (row) => row.status,
                        center: true
                    }
                ]}
            />
        </MainCard>
    );
};

export default SendGroupMailListPage;
