import React from 'react';
import DataTable from 'react-data-table-component';
// import Loading from 'components/Loading';

const ListDataTable = ({ ...props }) => {
    const customStyles = {
        rows: {
            style: {
                minHeight: '67px', // override the row height
            }
        },
        cells: {
            style: {
                fontSize: '14px',
            }
        },
        head: {
            style: {
                borderTop: '1px solid #333',
            }
        },
        headRow: {
            style: {
                backgroundColor: '#eff0f0',
                fontSize: '14px',
                color: '#212529',
                minHeight: 'auto'
            }
        },
        headCells: {
            style: {
                padding: '19px 5px',
                fontWeight: 300,
                color: '#222',
                justifyContent: "center",
            }
        }
    };

    return (
        <DataTable
            // progressComponent={<Loading />}
            customStyles={customStyles}
            highlightOnHover
            pointerOnHover
            pagination
            paginationServer
            sortServer
            cus
            expandableRowDisabled={props.disabled}
            selectableRowDisabled={props.disabled}
            noDataComponent={<p className="mt20">{'There_are_no_records_to_display'}</p>}
            paginationComponentOptions={{
                rowsPerPageText: 'rows_per_page',
                rangeSeparatorText: 'of'
            }}
            {...props}
        />
    );
};

export default ListDataTable;
