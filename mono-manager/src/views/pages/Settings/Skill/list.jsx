// REACT
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// MUI
import { Grid } from '@mui/material';

// COMPONENTS
import MainCard from 'components/cards/MainCard';
import CustomFilter from 'components/filter/CustomFilter';
import Loader from 'components/Loader';
import { CreateButton, DataTable, ListDeleteButton } from 'components';

import EditModal from './editModal';
import { useGetSkillsQuery, useDeleteSkillMutation } from 'api/settings/skill';
import { addComma } from 'utils/functions/common';

const SkillList = () => {
    const { t } = useTranslation();
    const [options, setOptions] = useState({ page: 0, size: 10, searchWrd: '' });
    const { data, isLoading, isFetching } = useGetSkillsQuery(new URLSearchParams({ ...options }).toString());
    const [modalOpen, setModalOpen] = useState(false);

    const [skill, setSkill] = useState(null);

    const showCreateModal = () => {
        setSkill(null);
        setModalOpen(true);
    };

    const showEditModal = (data) => {
        setSkill(data);
        setModalOpen(true);
    };

    const handleRowClick = (row) => {
        showEditModal(row);
    };
    const handlePageChange = (page) => setOptions((prevState) => ({ ...prevState, page: page - 1 }));
    const handlePerRowsChange = (newPerPage, page) => setOptions((prevState) => ({ ...prevState, page: page - 1, size: newPerPage }));

    return (
        <MainCard title={t('skill_manage')}>
            {isLoading && <Loader />}

            {/*FILTER*/}
            <CustomFilter
                setOptions={(e) => {
                    setOptions(e);
                }}
                isLoading={isLoading}
                isFetching={isFetching}
            />

            {/*TABLE*/}
            <Grid marginTop={2}>
                <DataTable
                    disabled={isLoading}
                    data={data?.content}
                    progressPending={isLoading}
                    paginationTotalRows={data?.totalElements}
                    onChangeRowsPerPage={handlePerRowsChange}
                    onChangePage={handlePageChange}
                    onRowClicked={handleRowClick}
                    columns={[
                        {
                            name: t('no'),
                            selector: (row, index) => (data?.totalElements - data?.size * data?.number - index).toString(),
                            center: true,
                            width: '100px'
                        },
                        {
                            name: t('code_name'),
                            selector: (row) => row.name,
                            sortField: 'name',
                            center: true
                        },
                        {
                            name: t('unit_price'),
                            selector: (row) => addComma(row.price) + t('won'),
                            sortField: 'price',
                            width: '150px'
                        },
                        {
                            name: t('label_use_yn'),
                            selector: (row) => (row.useYn == 'Y' ? t('label_use') : t('label_not_use')),
                            center: true,
                            width: '140px'
                        },
                        {
                            name: t('column_manage'),
                            selector: (row) => (
                                <ListDeleteButton
                                    loading={isLoading}
                                    deleteFunc={useDeleteSkillMutation}
                                    code={{ seq: row.seq }}
                                    size={'small'}
                                />
                            ),
                            center: true,
                            width: '20%'
                        }
                    ]}
                />
            </Grid>
            <Grid style={{ textAlign: 'end' }}>
                <CreateButton onClick={showCreateModal} disabled={isLoading} />
            </Grid>
            {modalOpen && <EditModal open={modalOpen} setOpen={setModalOpen} data={skill} />}
        </MainCard>
    );
};
export default SkillList;
