import React from 'react';
import URL from 'api/url';
import DataTable from 'components/table/DataTable';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { CreateButton } from 'components';
import PopupFilter from './PopupFilter';
import usePopupColumns from './PopupColumns';
import { useContext } from 'react';
import { ListContextWrapper } from 'components/list/ListContextWrapper';
import { useNavigate } from 'react-router';
import { useGetPopupsQuery } from './PopupApi';

const PopupListTable = () => {
    const { getColumns } = usePopupColumns();
    const navigate = useNavigate();
    const { searchCondition, paginationInfo, setPaginationInfo, setSearchCondition } = useContext(ListContextWrapper);

    const { data, isLoading } = useGetPopupsQuery(new URLSearchParams({ ...paginationInfo, ...searchCondition }).toString());

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
        navigate(URL.CONTENT_POPUP_DETAIL + `/${row.seq}`);
    };
    return (
        <>
            <Box sx={{ mt: 2 }}>
                <PopupFilter />
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
                <CreateButton to={URL.CONTENT_POPUP_CREATE} />
            </Grid>
        </>
    );
};
export default PopupListTable;
