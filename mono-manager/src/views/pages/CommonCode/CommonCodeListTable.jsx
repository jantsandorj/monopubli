import React from 'react';
import DataTable from 'components/table/DataTable';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { CreateButton } from 'components';
import CommonCodeFilter from './CommonCodeFilter';
import useCommonCodeColumns from './CommonCodeColumns';
import { useContext } from 'react';
import { ListContextWrapper } from 'components/list/ListContextWrapper';
import { useGetCommonCodesQuery } from './CommonCodeApi';
import { useState } from 'react';
import CommonCodeDetail from './CommonCodeDetail';
import CommonCodeUpdate from './CommonCodeUpdate';
import CommonCodeCreate from './CommonCodeCreate';

const CommonCodeListTable = () => {
    const { getColumns } = useCommonCodeColumns();
    const [detailShow, setDetailShow] = useState('');
    const [detailData, setDetailData] = useState();
    const [updateShow, setUpdateShow] = useState('');
    const [createShow, setCreateShow] = useState(false);
    const { searchCondition, paginationInfo, setPaginationInfo, setSearchCondition } = useContext(ListContextWrapper);

    const { data, isLoading } = useGetCommonCodesQuery(new URLSearchParams({ ...paginationInfo, ...searchCondition }).toString());
    console.log(data);

    const handlePageChange = (page) => {
        setPaginationInfo({ ...paginationInfo, page: page - 1 });
        setSearchCondition({ ...searchCondition });
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setPaginationInfo({ ...paginationInfo, page: page - 1, size: newPerPage });
        setSearchCondition({ ...searchCondition });
    };

    const handleSort = async (column, sortDirection) => {
        setSearchCondition({ ...searchCondition, sort: column.sortField + ',' + sortDirection });
    };

    const handleClick = (row) => {
        setDetailShow(row.seq);
    };

    return (
        <>
            <Box sx={{ mt: 2 }}>
                <CommonCodeFilter />
                <DataTable
                    columns={getColumns(data)}
                    data={data?.content}
                    progressPending={isLoading}
                    paginationTotalRows={data?.totalElements}
                    onChangeRowsPerPage={handlePerRowsChange}
                    onChangePage={handlePageChange}
                    onSort={handleSort}
                    onRowClicked={handleClick}
                />
            </Box>
            <Grid style={{ textAlign: 'end' }}>
                <CreateButton onClick={() => setCreateShow(true)} />
            </Grid>
            <CommonCodeDetail open={detailShow} setDetailData={setDetailData} setOpen={setDetailShow} setUpdateShow={setUpdateShow} />
            <CommonCodeUpdate data={detailData} open={updateShow} setOpen={setUpdateShow} />
            <CommonCodeCreate open={createShow} setOpen={setCreateShow} />
        </>
    );
};

export default CommonCodeListTable;
