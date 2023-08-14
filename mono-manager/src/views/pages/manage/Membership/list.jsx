// REACT
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

// MUI
import { Grid } from '@mui/material';

// COMPONENTS
import Loader from 'components/Loader';
import CustomFilter from 'components/filter/CustomFilter';
import MainCard from 'components/cards/MainCard';
import { CreateButton, DataTable } from 'components';

// OTHER
import URL from 'api/url';
import { useGetMembershipQuery } from 'api/manage/membership';

const formDefaultValues = {
    memberTypeCd: 'ALL',
    searchWrd: ''
};

const MembershipList = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [options, setOptions] = useState({ page: 0, size: 10, searchWrd: '' });
    const { data, isLoading, isFetching } = useGetMembershipQuery(new URLSearchParams({ ...options }).toString());

    //GRID EVENTS
    const handleRowClick = (row) => navigate(URL.MEMBERSHIP_MODIFY + `/${row.seq}`);
    const handlePageChange = (page) => setOptions((prevState) => ({ ...prevState, page: page - 1 }));
    const handlePerRowsChange = (newPerPage, page) => setOptions((prevState) => ({ ...prevState, page: page - 1, size: newPerPage }));

    return (
        <MainCard title={t('membership_management')}>
            {(isLoading || isFetching) && <Loader />}

            {/*FILTER*/}
            <CustomFilter
                formDefaultValues={formDefaultValues}
                setOptions={(e) => {
                    setOptions(e);
                }}
                isLoading={isLoading}
                isFetching={isFetching}
                filters={[{ label: 'member_type', type: 'select', name: 'memberTypeCd', commonCode: 'MEMBER_TYPE', value: 'All' }]}
            />

            {/*TABLE*/}
            <Grid marginTop={2}>
                <DataTable
                    disabled={isLoading || isFetching}
                    data={isLoading ? [] : data?.content}
                    progressPending={isLoading}
                    paginationTotalRows={data?.totalElements}
                    onChangeRowsPerPage={handlePerRowsChange}
                    onChangePage={handlePageChange}
                    onRowClicked={handleRowClick}
                    columns={[
                        {
                            name: t('sequence_number'),
                            selector: (row, index) => (data?.totalElements - data?.size * data?.number - index).toString(),
                            center: true,
                            width: '130px'
                        },
                        {
                            name: t('membership_classifications'),
                            selector: (row) => row.memberTypeCd,
                            sortable: true,
                            center: true,
                            width: '200px'
                        },
                        {
                            name: t('id'),
                            selector: (row) => row.username,
                            sortField: 'id',
                            center: true,
                            width: '150px'
                        },
                        {
                            name: t('label_name'),
                            selector: (row) => row.fullname,
                            sortField: 'username',
                            width: '150px'
                        },
                        {
                            name: t('project_status'),
                            sortField: 'fullname'
                        },
                        {
                            name: t('label_numbering'),
                            selector: (row) => row.phone,
                            sortField: 'phone',
                            center: true,
                            width: '140px'
                        },
                        {
                            name: t('label_email'),
                            selector: (row) => row.email,
                            sortField: 'email',
                            center: true,
                            width: '140px'
                        },
                        {
                            name: t('business_name'),
                            selector: (row) => row.fullname,
                            sortField: 'fullname',
                            center: true,
                            width: '140px'
                        },
                        {
                            name: t('label_created_date'),
                            selector: (row) => row.createDate,
                            sortField: 'createDate',
                            center: true,
                            width: '140px'
                        }
                    ]}
                />
            </Grid>
            <Grid style={{ textAlign: 'end' }}>
                <CreateButton to={URL.MEMBERSHIP_CREATE} disabled={isLoading || isFetching} />
            </Grid>
        </MainCard>
    );
};
export default MembershipList;
