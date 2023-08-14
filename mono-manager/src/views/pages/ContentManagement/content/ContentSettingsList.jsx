import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import URL from 'api/url';
import * as Api from 'api/requestApi';
import DataTable from 'components/table/DataTable';
import { Button, ButtonBase, Checkbox, InputAdornment, MenuItem, OutlinedInput, TextField, Typography } from '@mui/material';
import MainCard from 'components/cards/MainCard';
import * as cmn from 'utils/functions/common';
import { useTranslation } from 'react-i18next';
import Paper from '@mui/material/Paper';
import { Box, useTheme } from '@mui/system';
import { IconSearch } from '@tabler/icons';
import SubCard from 'components/cards/SubCard';

function ContentSettingsList(props) {
    let resultCnt = 0;
    let currentPageNo = 0;
    let contentType = '';
    let pageSize = 10;
    const navigate = useNavigate();
    const location = useLocation;
    const theme = useTheme();

    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const [searchType, setSearchType] = useState('1');
    const [searchCondition, setSearchCondition] = useState(
        location.state?.searchCondition || {
            contentType: contentType,
            start: 0,
            page: 0,
            sort: 'created_date,desc',
            size: pageSize,
            searchCnd: '0',
            searchWrd: ''
        }
    );
    const [paginationInfo, setPaginationInfo] = useState({
        currentPageNo: 1,
        pageSize: pageSize,
        totalRecordCount: 0,
        recordCountPerPage: 0
    });
    const [responseData, setResponseData] = useState([]);

    const retrieveList = async (searchCondition) => {
        console.groupCollapsed('ContentSettingsList.retrieveList()');

        const retrieveListURL = '/api/content/settings';
        const formData = new FormData();
        for (let key in searchCondition) {
            formData.append(key, searchCondition[key]);
            console.log('searchCondition [%s] ', key, searchCondition[key]);
        }

        let queryString = new URLSearchParams(formData).toString();

        const requestOptions = {
            method: 'GET',
            headers: {}
        };

        setIsLoading(true);
        let response = await Api.requestAPI(retrieveListURL + (queryString !== '' ? '?' + queryString : ''), requestOptions);
        setResponseData(response.content ?? []);
        setIsLoading(false);

        await setPaginationInfo({
            currentPageNo: searchCondition.page + 1,
            pageSize: pageSize,
            totalRecordCount: response.totalElements,
            recordCountPerPage: pageSize
        });

        resultCnt = response.totalElements;
        currentPageNo = paginationInfo.currentPageNo;

        let mutListTag = [];
        mutListTag.push(<p className="no_data">검색된 결과가 없습니다.</p>); // 게시판 목록 초기값

        response.content.forEach(function (item, index) {
            if (index === 0) mutListTag = []; // 목록 초기화
            let listIdx = resultCnt + 1 - ((currentPageNo - 1) * pageSize + index + 1);

            mutListTag.push(
                <Link
                    to={URL.CONTENT_FORM_DETAIL}
                    state={{
                        contentType: item.contentType,
                        code: item.code,
                        searchCondition: searchCondition
                    }}
                    key={listIdx}
                    className="list_item"
                >
                    <div>{listIdx}</div>
                    <div>{item.code}</div>
                    <div>{item.title}</div>
                    <div>
                        <label className={'f_chk ' + (item.useYn === 'Y' ? 'on' : '')} htmlFor="saveid">
                            <input type="checkbox" name="" id="saveid" checked={item.useYn === 'Y'} readOnly />
                        </label>
                    </div>
                </Link>
            );
        });

        console.groupEnd('ContentSettingsList.retrieveList()');
    };

    useEffect(() => {
        retrieveList(searchCondition);
        return () => {};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchCondition]);

    const columns = [
        {
            name: t('label_numbering'),
            selector: (row, index) => resultCnt + 1 - ((currentPageNo - 1) * pageSize + index + 1)
        },
        {
            name: t('label_type'),
            selector: (row) => row.contentType,
            sortable: true,
            sortField: 'content_type'
        },
        {
            name: t('label_code'),
            selector: (row) => row.code,
            sortable: true,
            sortField: 'code'
        },
        {
            name: t('label_title'),
            selector: (row) => row.title,
            sortable: true,
            sortField: 'title'
        },
        {
            name: t('label_use_yn'),
            selector: (row) => <Checkbox disabled={true} checked={row.useYn === 'Y'} />,
            sortable: true,
            sortField: 'use_yn',
            center: true,
            width: '100px'
        }
    ];

    const handlePageChange = (page) => {
        setPaginationInfo({ ...paginationInfo, currentPageNo: page });
        setPaginationInfo({ ...paginationInfo, currentPageNo: page });
        setSearchCondition({ ...searchCondition });
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setPaginationInfo({ ...paginationInfo, currentPageNo: page, pageSize: newPerPage, recordCountPerPage: newPerPage });
        setSearchCondition({ ...searchCondition });
    };

    const handleSort = async (column, sortDirection) => {
        setSearchCondition({ ...searchCondition, sort: column.sortField + ',' + sortDirection });
    };

    const handleClick = (row) => {
        navigate(URL.CONTENT_FORM_DETAIL + '?code=' + row.code);
    };

    return (
        <MainCard title={cmn.getTranslatedText('menu_content_manage')}>
            {/* <List> */}
            <Typography variant="body2" component={Paper}>
                {/* <Filter> */}
                <SubCard style={{ textAlign: 'center' }}>
                    <TextField style={{ marginRight: '20px' }} select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                        <MenuItem key="1" value="1">
                            Type 1
                        </MenuItem>
                        <MenuItem key="2" value="2">
                            Type 2
                        </MenuItem>
                        <MenuItem key="3" value="3">
                            Type 3
                        </MenuItem>
                    </TextField>

                    <OutlinedInput
                        style={{ marginRight: '20px' }}
                        type="text"
                        name=""
                        defaultValue={searchCondition.searchWrd}
                        endAdornment={
                            <InputAdornment position="end">
                                <Box sx={{ ml: 2 }}>
                                    <ButtonBase sx={{ borderRadius: '12px' }}>
                                        <Button
                                            variant="rounded"
                                            sx={{
                                                width: '36px',
                                                height: '36px',
                                                borderRadius: '12px',
                                                transition: 'all .2s ease-in-out',
                                                background: theme.palette.primary.light,
                                                color: theme.palette.primary.dark,
                                                '&[aria-controls="menu-list-grow"],&:hover': {
                                                    background: theme.palette.primary.dark,
                                                    color: theme.palette.primary.light
                                                }
                                            }}
                                            onClick={(e) => {
                                                // onClickSearch
                                                //setSearchCondition({ ...searchCondition, searchCnd: searchCnd, searchWrd: searchWrd });
                                            }}
                                            color="inherit"
                                        >
                                            <IconSearch size="1.3rem" />
                                        </Button>
                                    </ButtonBase>
                                </Box>
                            </InputAdornment>
                        }
                    />

                    <Link to={URL.CONTENT_FORM_CREATE} style={{ textDecoration: 'none' }}>
                        <Button disableElevation style={{ height: '50px' }} size="large" type="submit" variant="contained" color="primary">
                            {t('act_create')}
                        </Button>
                    </Link>
                </SubCard>
                {/* </Filter> */}
                <Box sx={{ mt: 2 }}>
                    <DataTable
                        columns={columns}
                        data={responseData}
                        progressPending={isLoading}
                        paginationTotalRows={paginationInfo.totalRecordCount}
                        onChangeRowsPerPage={handlePerRowsChange}
                        onChangePage={handlePageChange}
                        onSort={handleSort}
                        onRowClicked={handleClick}
                    />
                </Box>
            </Typography>
            {/* </List> */}
        </MainCard>
    );
}

export default ContentSettingsList;
