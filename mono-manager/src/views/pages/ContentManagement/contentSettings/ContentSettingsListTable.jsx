import React from 'react';
import URL from 'api/url';
import DataTable from 'components/table/DataTable';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { CreateButton } from 'components';
import ContentSettingsFilter from './ContentSettingsFilter';
import useContentSettingsColumns from './ContentSettingsColumns';
import { useContext } from 'react';
import { ListContextWrapper } from 'components/list/ListContextWrapper';
import { useNavigate } from 'react-router';
import { useGetContentSettingsQuery } from './ContentSettingsApi';

const ContentSettingsListTable = () => {
    const { getColumns } = useContentSettingsColumns();
    const navigate = useNavigate();
    const { searchCondition, paginationInfo, setPaginationInfo, setSearchCondition } = useContext(ListContextWrapper);
    const { data, isLoading } = useGetContentSettingsQuery(new URLSearchParams({ ...paginationInfo, ...searchCondition }).toString());

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
        navigate(URL.CONTENT_SETTINGS_DETAIL + `/${row.code}`);
    };
    return (
        <>
            <Box sx={{ mt: 2 }}>
                <ContentSettingsFilter />
                <DataTable
                    columns={getColumns()}
                    data={data?.content}
                    progressPending={isLoading}
                    paginationTotalRows={paginationInfo.totalRecordCount}
                    onChangeRowsPerPage={handlePerRowsChange}
                    onChangePage={handlePageChange}
                    onSort={handleSort}
                    onRowClicked={handleClick}
                />
            </Box>
            <Grid style={{ textAlign: 'end' }}>
                <CreateButton to={URL.CONTENT_SETTINGS_CREATE} />
            </Grid>
        </>
    );
};
export default ContentSettingsListTable;
