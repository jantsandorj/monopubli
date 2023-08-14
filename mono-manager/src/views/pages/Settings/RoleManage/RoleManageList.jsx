import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { IconPlus } from '@tabler/icons';
import MainCard from 'components/cards/MainCard';
import { List, DataTable, Button, FormCmmCodeSelect, SearchInput } from 'components';
import FilterBox from 'components/FilterBox';
import { ListContextWrapper } from 'components/list/ListContextWrapper';
import useRoleManageColumns from './RoleManageColumns';
import { useGetRoleManageListQuery } from './RoleManageApi';
import TreeManage from './TreeManage';
import MenuTreeManage from './MenuTreeManage';
import { useForm, Controller } from 'react-hook-form';

const BaseButton = styled(Button)({});
const defaultValues = {
    useYn: '',
    searchWrd: ''
};

function RoleManageList() {
    const { t } = useTranslation();
    const [rowData, getRowData] = useState({});
    const [rowAuthorCd, setRowAuthorCd] = useState({});
    const { getColumns } = useRoleManageColumns();
    const { searchCondition, paginationInfo, setPaginationInfo, setSearchCondition } = useContext(ListContextWrapper);
    const [options, setOptions] = useState({ useYn: '', searchWrd: '' });

    const { data, isLoading } = useGetRoleManageListQuery(
        new URLSearchParams({ ...paginationInfo, ...searchCondition, ...options }).toString()
    );

    const [modalShow, setModalShow] = useState(false);
    const [treeMenuModalShow, setTreeMenuModalShow] = useState(false);
    const { control, handleSubmit } = useForm({ defaultValues: defaultValues });

    const handlePageChange = (page) => {
        setOptions((prevState) => ({ ...prevState, page: page - 1 }));
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setPaginationInfo({ ...paginationInfo, page: page - 1, size: newPerPage });
        setSearchCondition({ ...searchCondition });
    };

    const handleSort = async (column, sortDirection) => {
        setSearchCondition({ ...searchCondition, sort: column.sortField + ',' + sortDirection });
    };

    const onClickBtn = () => {
        getRowData({});
        setModalShow(true);
    };

    const showSelectRow = (row) => {
        if (row?.authorCd) getRowData(row);
        setModalShow(true);
    };

    const onSelectMenu = (row) => {
        setRowAuthorCd(row?.authorCd);
        setTreeMenuModalShow(true);
    };

    // Filter section
    const submit = (data) => {
        setOptions(data);
    };

    return (
        <>
            <MainCard title={t('role_manage')}>
                <FilterBox>
                    <form onSubmit={handleSubmit(submit)}>
                        <Grid container alignItems="center" spacing={2}>
                            <Grid item xs={1}>
                                <Typography variant="h4" textAlign="center">
                                    {t('condition')}
                                </Typography>
                            </Grid>

                            {/*useYn*/}
                            <Grid item xs={3}>
                                <Controller
                                    control={control}
                                    name="useYn"
                                    render={({ field }) => (
                                        <FormCmmCodeSelect all fullWidth groupName="USE_YN" label={t('Use yn')} {...field} />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={8}></Grid>

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
                                    render={({ field }) => <SearchInput disabled={isLoading} {...field} />}
                                />
                            </Grid>
                        </Grid>
                    </form>
                </FilterBox>
                <List>
                    <DataTable
                        columns={getColumns(showSelectRow, onSelectMenu, data)}
                        data={data?.content}
                        progressPending={isLoading}
                        paginationTotalRows={data?.totalElements}
                        onChangeRowsPerPage={handlePerRowsChange}
                        onChangePage={handlePageChange}
                        onSort={handleSort}
                    />
                    <Grid item xs={12} textAlign="right">
                        <BaseButton type="button" startIcon={<IconPlus />} onClick={() => onClickBtn()}>
                            {t('act_create')}
                        </BaseButton>
                    </Grid>
                </List>
            </MainCard>
            {modalShow && <TreeManage rowData={rowData} open={modalShow} setOpen={setModalShow} />}
            {treeMenuModalShow && <MenuTreeManage rowData={rowAuthorCd} open={treeMenuModalShow} setOpen={setTreeMenuModalShow} />}
        </>
    );
}

export default RoleManageList;
