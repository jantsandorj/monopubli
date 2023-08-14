import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ListContextWrapper } from 'components/list/ListContextWrapper';
import { AVAIL_LANG } from 'config';

const useContentColumns = () => {
    const { paginationInfo } = useContext(ListContextWrapper);
    const { t } = useTranslation();
    const getColumns = () => {
        return [
            {
                name: t('label_numbering'),
                selector: (row, index) => (+paginationInfo.size - 1) * +paginationInfo.page + index + 1,
                width: '100px'
            },
            {
                name: t('label_code'),
                selector: (row) => row.csCode,
                width: '400px'
            },
            {
                name: t('label_title'),
                selector: (row) => JSON.parse(row.title)[AVAIL_LANG[0].code],
                sortable: true,
                sortField: 'title'
            },
            {
                name: t('label_view_cnt'),
                selector: (row) => row.viewCnt,
                sortable: true,
                sortField: 'view_cnt',
                center: true,
                width: '150px'
            }
        ];
    };
    return { getColumns };
};
export default useContentColumns;
