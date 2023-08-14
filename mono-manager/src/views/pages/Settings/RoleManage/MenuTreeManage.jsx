import { CustomModal } from 'components';
import { useTranslation } from 'react-i18next';
import MenuRoleManageEdit from './MenuRoleManageEdit';

import { useGetMenuRoleQuery } from './RoleManageApi';

const MenuTreeManage = ({ open, setOpen, rowData }) => {
    const { t } = useTranslation();
    const { data, isLoading } = useGetMenuRoleQuery(rowData);

    return (
        <CustomModal maxHeight={'800px'} width={'700px'} open={open} onClose={setOpen} title={t('role_manage_update')}>
            <MenuRoleManageEdit
                onSuccess={() => setOpen(false)}
                setOpen={setOpen}
                rowData={rowData}
                data={data}
                isLoading={isLoading}
            ></MenuRoleManageEdit>
        </CustomModal>
    );
};

export default MenuTreeManage;
