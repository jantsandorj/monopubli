import React from 'react';
import URL from 'api/url';
import DataTable from 'components/table/DataTable';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { CreateButton } from 'components';
import FaqFilter from './FaqFilter';
import useFaqColumns from './FaqColumns';
import { useContext } from 'react';
import { ListContextWrapper } from 'components/list/ListContextWrapper';
import { useNavigate } from 'react-router';
import { useGetFaqsQuery } from './FaqApi';
import { useEffect } from 'react';

const FaqListTable = () => {
    const { getColumns } = useFaqColumns();
    const navigate = useNavigate();
    const { searchCondition, paginationInfo, setPaginationInfo, setSearchCondition, setTotals } = useContext(ListContextWrapper);

    const { data, isLoading } = useGetFaqsQuery(new URLSearchParams({ ...paginationInfo, ...searchCondition }).toString());

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
        navigate(URL.COMMUNITY_FAQ_DETAIL + '/' + row.seq);
    };
    useEffect(() => {
        setTotals(data?.totalElements || 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return (
        <>
            <Box sx={{ mt: 2 }}>
                <FaqFilter />
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
                <CreateButton to={URL.COMMUNITY_FAQ_CREATE} />
            </Grid>
        </>
    );
};

export default FaqListTable;
