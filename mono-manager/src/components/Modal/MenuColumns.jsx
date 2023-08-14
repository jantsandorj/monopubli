import { useTranslation } from 'react-i18next';

const useMenuColumns = () => {
    const { t } = useTranslation();
    const getColumns = () => {
        return [
            {
                name: t('label_numbering'),
                selector: '1' //(row, index) => (+paginationInfo.size - 1) * +paginationInfo.page + index + 1
            },
            {
                name: t('label_name'),
                selector: (row) => row.menuName,
                sortable: true,
                sortField: 'menuName'
            },
            {
                name: t('menu_url'),
                selector: (row) => row.menuUrl,
                sortable: true,
                sortField: 'menuName'
            }
        ];
    };

    return { getColumns };
};

export default useMenuColumns;
