import React from 'react';
import DataTable from 'react-data-table-component';
import Loading from 'components/Loading';
import { useTranslation } from 'react-i18next';

const ListDataTable = ({ ...props }) => {
    const { t } = useTranslation();
    const customStyles = {
        rows: {
            style: {
                minHeight: '60px', // override the row height
                borderLeft: '1px solid #dee2e6'
            }
        },
        cells: {
            style: {
                borderRight: '1px solid #dee2e6'
            }
        },
        head: {
            style: {
                borderTop: '2px solid #1e88e5',
                borderLeft: '1px solid #dee2e6'
            }
        },
        headRow: {
            style: {
                backgroundColor: '#e3f2fd',
                fontSize: '15px',
                color: '#212529',
                minHeight: 'auto'
            }
        },
        headCells: {
            style: {
                borderRight: '1px solid #dee2e6',
                padding: '8px',
                fontWeight: 600
            }
        }
    };

    return (
        <DataTable
            progressComponent={<Loading />}
            customStyles={customStyles}
            highlightOnHover
            pointerOnHover
            pagination
            paginationServer
            sortServer
            cus
            expandableRowDisabled={props.disabled}
            selectableRowDisabled={props.disabled}
            noDataComponent={<p className="mt20">{t('There_are_no_records_to_display')}</p>}
            paginationComponentOptions={{
                rowsPerPageText: t('rows_per_page'),
                rangeSeparatorText: t('of')
            }}
            {...props}
        />
    );
};

export default ListDataTable;
