import React from 'react';
import URL from 'api/url';
import DataTable from 'components/table/DataTable';
import { Box } from '@mui/system';
import ContentMenuFilter from './ContentMenuFilter';
import useContentMenuColumns from './ContentMenuColumns';
import { useContext } from 'react';
import { ListContextWrapper } from 'components/list/ListContextWrapper';
import { useNavigate } from 'react-router';
import { useGetContentMenusQuery } from './ContentMenuApi';
import { setValue } from 'store/commonSlice';
import { useDispatch } from 'react-redux';

const ContentMenuListTable = () => {
    const { getColumns } = useContentMenuColumns();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { searchCondition, paginationInfo, setPaginationInfo, setSearchCondition } = useContext(ListContextWrapper);
    const { data, isLoading } = useGetContentMenusQuery(new URLSearchParams({ ...paginationInfo, ...searchCondition }).toString());
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
        const seqData = { seq: row.seq };
        dispatch(setValue(seqData));
        navigate(URL.CONTENT_MENU_DETAIL + `/${row.seq}`);
    };
    return (
        <>
            <Box sx={{ mt: 2 }}>
                <ContentMenuFilter />
                <DataTable
                    columns={getColumns()}
                    data={data?.content?.content}
                    progressPending={isLoading}
                    paginationTotalRows={data?.content?.totalElements}
                    onChangeRowsPerPage={handlePerRowsChange}
                    onChangePage={handlePageChange}
                    onSort={handleSort}
                    onRowClicked={handleClick}
                />
            </Box>
        </>
    );
};
export default ContentMenuListTable;
