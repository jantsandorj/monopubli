import { CustomModal } from 'components';
import { useTranslation } from 'react-i18next';
import RoleManageEdit from './RoleManageEdit';
import { LoadingButton } from '@mui/lab';
import { IconCheck } from '@tabler/icons';

import { useCreateRoleManageMutation, useUpdateRoleManageMutation } from './RoleManageApi';
import { useEffect, useState } from 'react';
const { Button } = require('components');

const TreeManage = ({ open, setOpen, rowData }) => {
    const { t } = useTranslation();
    const [isUpdate, getIsUpdate] = useState(false);

    useEffect(() => {
        if (rowData?.authorCd) getIsUpdate(true);
    }, [rowData]);

    return (
        <CustomModal width={'800'} open={open} onClose={setOpen} title={isUpdate ? t('role_manage_update') : t('role_manage_create')}>
            <RoleManageEdit
                mutation={isUpdate ? useUpdateRoleManageMutation : useCreateRoleManageMutation}
                onSuccess={() => setOpen(false)}
                data={rowData}
            >
                <LoadingButton
                    style={{ marginRight: 12 }}
                    startIcon={<IconCheck />}
                    loadingPosition="start"
                    variant="contained"
                    size="large"
                    type="submit"
                >
                    {isUpdate ? t('act_update') : t('act_create')}
                </LoadingButton>
                <Button disableElevation size="large" variant="outlined" color="primary" onClick={() => setOpen(false)}>
                    {t('act_cancel')}
                </Button>
            </RoleManageEdit>
        </CustomModal>
    );
};

export default TreeManage;
