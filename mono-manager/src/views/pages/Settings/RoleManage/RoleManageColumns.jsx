import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';

const useRoleColumns = () => {
    const { t } = useTranslation();
    const getColumns = (showSelectRow, onSelectMenu, data) => {
        return [
            {
                name: t('label_numbering'),
                selector: (row, index) => data?.totalElements - data?.pageable?.offset - index,
                center: true,
                width: '80px'
            },
            {
                name: t('role_group_code'),
                center: true,
                width: '300px',
                selector: (row) => {
                    return <p onClick={() => showSelectRow(row)}>{row?.authorCd}</p>;
                }
            },
            {
                name: t('role_group_name'),
                selector: (row) => row?.authorNm,
                center: true
            },
            {
                name: t('label_use_yn'),
                selector: (row) => row.useYn,
                center: true
            },
            {
                name: t('content_desc'),
                selector: (row) => row.authorDesc,
                center: true
            },

            {
                name: t('menu_role'),
                selector: (row) => {
                    return (
                        <>
                            <Button
                                disableElevation
                                variant="contained"
                                style={{
                                    minWidth: '80px',
                                    borderRadius: '10px',
                                    padding: '2px'
                                }}
                                onClick={() => onSelectMenu(row)}
                            >
                                {t('select')}
                            </Button>
                        </>
                    );
                },
                center: true
            },

            {
                name: t('label_created_date'),
                selector: (row) => row.createdDate,
                center: true,
                width: '150px'
            }
        ];
    };

    return { getColumns };
};

export default useRoleColumns;
