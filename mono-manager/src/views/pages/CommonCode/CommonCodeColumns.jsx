import { Checkbox } from '@mui/material';
import { useTranslation } from 'react-i18next';

const useCommonCodeColumns = () => {
    const { t } = useTranslation();
    const getColumns = (data) => {
        return [
            {
                name: t('label_numbering'),
                selector: (row, index) => data?.totalElements - data?.pageable?.offset - index,
                center: true,
                width: '80px'
            },
            {
                name: t('code_class_id'),
                selector: (row) => row.codeGroup,
                center: true,
                width: '200px'
            },
            {
                name: t('code_class_name'),
                selector: (row) => row.codeGroupNm,
                center: true,
                width: '200px'
            },
            {
                name: t('label_code'),
                selector: (row) => row.code,
                center: true,
                width: '160px'
            },
            {
                name: t('code_name'),
                selector: (row) => row.codeEngNm,
                center: true,
                width: '200px'
            },
            {
                name: t('code_desc'),
                selector: (row) => row.codeDescript
            },
            {
                name: t('label_use_yn'),
                selector: (row) => <Checkbox disabled={true} checked={row.useYn === 'Y'} />,
                center: true,
                width: '100px'
            },
            {
                name: t('create_dt'),
                selector: (row) => row.createdDate,
                center: true,
                width: '200px'
            }
        ];
    };

    return { getColumns };
};

export default useCommonCodeColumns;
