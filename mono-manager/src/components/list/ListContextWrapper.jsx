import React from 'react';
import { createContext } from 'react';

let pageSize = 10;
let currentPageNo = 0;

export const ListContextWrapper = createContext({
    searchCondition: { searchWrd: '' },
    paginationInfo: { page: currentPageNo, size: pageSize },
    resultCnt: 0,
    setPaginationInfo: () => {},
    setSearchCondition: () => {},
    setResultCnt: () => {},
    totals: 0,
    setTotals: () => {}
});

/**
 * Context for List
 *
 * @param {ReactFragement} children
 * @returns {React.Context}
 */
const ListProvider = ({ children }) => {
    let [menu, setMenu] = React.useState('');
    let [totals, setTotals] = React.useState(0);
    let [resultCnt, setResultCnt] = React.useState(0);

    const [paginationInfo, setPaginationInfo] = React.useState({ page: currentPageNo, size: pageSize });
    const [searchCondition, setSearchCondition] = React.useState({ searchWrd: '' });

    return (
        <ListContextWrapper.Provider
            value={{
                searchCondition,
                paginationInfo,
                resultCnt,
                setPaginationInfo,
                setSearchCondition,
                setResultCnt,
                totals,
                setTotals,
                menu,
                setMenu
            }}
        >
            {children}
        </ListContextWrapper.Provider>
    );
};

export default ListProvider;
