import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import URL from 'api/url';
import * as Api from 'api/requestApi';
import Loading from 'components/Loading';
import DataTable from 'react-data-table-component';
import {
    Button,
    ButtonBase,
    FormControl,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    Tab,
    Tabs,
    Typography
} from '@mui/material';
import MainCard from 'components/cards/MainCard';
import * as cmn from 'utils/functions/common';
import { useTranslation } from 'react-i18next';
import Paper from '@mui/material/Paper';
import { Box, useTheme } from '@mui/system';
import { IconSearch } from '@tabler/icons';
import SubCard from 'components/cards/SubCard';
import { AVAIL_LANG } from 'config';

function ContentList(props) {
    let resultCnt = 0;
    let currentPageNo = 0;
    let searchCnd = '0';
    let searchWrd = '';
    let pageSize = 10;
    const navigate = useNavigate();
    const theme = useTheme();

    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const [activeCS, setActiveCS] = useState(''); //  selected content settings code
    const [searchCondition, setSearchCondition] = useState({
        csCode: '',
        start: 0,
        page: 0,
        sort: 'created_date,desc',
        size: pageSize,
        searchCnd: '0',
        searchWrd: ''
    }); // 기존 조회에서 접근 했을 시 || 신규로 접근 했을 시
    const [searchConditionCS, setSearchConditionCS] = useState({ type: '', start: 0, page: 0, size: 100, sort: 'code,asc' });
    const [paginationInfo, setPaginationInfo] = useState({
        currentPageNo: 1,
        pageSize: pageSize,
        totalRecordCount: 0,
        recordCountPerPage: 0
    });
    const [responseData, setResponseData] = useState([]);
    const [contentSettingsData, setContentSettingsData] = useState([]);

    const [tabLang, setTabLang] = React.useState(AVAIL_LANG[0].code); //  tab changer, language tab
    const handleTabChange = (event, newValue) => {
        setTabLang(newValue);
    };

    //  getting content settings by code
    const getCSByCode = (code) => {
        let foundCS = null;
        //  looping through content settings
        for (let i = 0; i < contentSettingsData.length; i++) {
            let cs = contentSettingsData[i];
            if (cs.code === code) {
                foundCS = cs;
                break;
            }
        }

        return foundCS;
    };

    const retrieveContentSettingsList = async (searchCondition) => {
        const retrieveListURL = '/api/content/forms';
        const formData = new FormData();
        for (let key in searchCondition) {
            formData.append(key, searchCondition[key]);
        }

        let queryString = new URLSearchParams(formData).toString();

        const requestOptions = {
            method: 'GET',
            headers: {}
        };

        setIsLoading(true);
        let response = await Api.requestAPI(retrieveListURL + (queryString !== '' ? '?' + queryString : ''), requestOptions);
        setContentSettingsData(response.content ?? []);
        setIsLoading(false);
    };

    const retrieveList = async (searchCondition) => {
        console.groupCollapsed('ContentList.retrieveList()');

        const retrieveListURL = '/api/content';
        const formData = new FormData();
        for (let key in searchCondition) {
            formData.append(key, searchCondition[key]);
        }

        let queryString = new URLSearchParams(formData).toString();

        const requestOptions = {
            method: 'GET',
            headers: {}
        };

        setIsLoading(true);
        let response = await Api.requestAPI(retrieveListURL + (queryString != '' ? '?' + queryString : ''), requestOptions);
        setResponseData(response.content ?? []);
        setIsLoading(false);

        //  setting pagination info for paging
        await setPaginationInfo({
            currentPageNo: searchCondition.page + 1,
            pageSize: pageSize,
            totalRecordCount: response.totalElements,
            recordCountPerPage: pageSize
        });

        resultCnt = response.totalElements;
        currentPageNo = paginationInfo.currentPageNo;

        console.groupEnd('ContentList.retrieveList()');
    };

    useEffect(() => {
        retrieveContentSettingsList(searchConditionCS);
        return () => {};
    }, [searchConditionCS]);

    useEffect(() => {
        retrieveList(searchCondition);
        return () => {};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchCondition]);

    /**
     *  begin of DataTable
     **/
    const columns = [
        {
            name: t('label_numbering'),
            selector: (row, index) => resultCnt + 1 - ((currentPageNo - 1) * pageSize + index + 1),
            width: '100px'
        },
        {
            name: t('label_code'),
            selector: (row) => row.csCode,
            sortable: true,
            sortField: 'cs_code',
            width: '400px'
        },
        {
            name: t('label_title'),
            selector: (row) => JSON.parse(row.title)[tabLang],
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

    const handlePageChange = (page) => {
        setPaginationInfo({ ...paginationInfo, currentPageNo: page });
        setPaginationInfo({ ...paginationInfo, currentPageNo: page });
        setSearchCondition({ ...searchCondition, start: page - 1, page: page - 1 });
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setPaginationInfo({ ...paginationInfo, currentPageNo: page, pageSize: newPerPage, recordCountPerPage: newPerPage });
        setSearchCondition({ ...searchCondition, start: 0, page: 0, size: newPerPage });
    };

    const handleSort = async (column, sortDirection) => {
        setSearchCondition({ ...searchCondition, sort: column.sortField + ',' + sortDirection });
    };

    const handleClick = (row) => {
        navigate(URL.CONTENT_DATA_DETAIL + '?seq=' + row.seq);
    };
    /**
     *  end of DataTable
     **/

    // A super simple expandable component.

    return (
        <MainCard title={cmn.getTranslatedText('menu_content_manage')}>
            <Typography variant="body2" component={Paper}>
                <SubCard style={{ textAlign: 'center' }}>
                    <FormControl>
                        <InputLabel id="select-content-setting-label">{t('label_content_settings')}</InputLabel>
                        <Select
                            style={{ width: '200px', marginRight: '20px' }}
                            id="select-content-setting"
                            label={t('label_content_settings')}
                            value={activeCS}
                            onChange={(e) => {
                                setActiveCS(e.target.value);
                                setSearchCondition({ ...searchCondition, csCode: e.target.value });
                            }}
                        >
                            <MenuItem key={-1} name="show_all" value="">
                                {t('label_show_all')}
                            </MenuItem>
                            {contentSettingsData.map((contentSettings, index) => (
                                <MenuItem key={index} name={index} value={contentSettings.code}>
                                    {contentSettings.title}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <OutlinedInput
                        style={{ marginRight: '20px' }}
                        type="text"
                        name=""
                        defaultValue={searchCondition.searchWrd}
                        onChange={(e) => {
                            searchWrd = e.target.value;
                        }}
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
                                                background: theme.palette.secondary.light,
                                                color: theme.palette.secondary.dark,
                                                '&[aria-controls="menu-list-grow"],&:hover': {
                                                    background: theme.palette.secondary.dark,
                                                    color: theme.palette.secondary.light
                                                }
                                            }}
                                            onClick={(e) => {
                                                setSearchCondition({ ...searchCondition, searchCnd: searchCnd, searchWrd: searchWrd });
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

                    <Link
                        to={URL.CONTENT_DATA_CREATE}
                        state={{ csCode: activeCS, fieldsJson: getCSByCode(activeCS)?.fieldsJson }}
                        style={{ textDecoration: 'none' }}
                    >
                        <Button
                            disableElevation
                            style={{ height: '50px' }}
                            size="large"
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={activeCS === ''}
                        >
                            {t('act_create')}
                        </Button>
                    </Link>
                </SubCard>
                <Box sx={{ mt: 2 }}>
                    <Tabs value={tabLang} onChange={handleTabChange} centered>
                        {AVAIL_LANG.map((lang, index) => (
                            <Tab key={index} value={lang.code} label={lang.name + ' /' + lang.code + '/'} />
                        ))}
                    </Tabs>
                    <DataTable
                        columns={columns}
                        data={responseData}
                        progressPending={isLoading}
                        progressComponent={<Loading />}
                        highlightOnHover
                        pointerOnHover
                        pagination
                        paginationServer
                        paginationTotalRows={paginationInfo.totalRecordCount}
                        onChangeRowsPerPage={handlePerRowsChange}
                        onChangePage={handlePageChange}
                        onSort={handleSort}
                        sortServer
                        onRowClicked={handleClick}
                    />
                </Box>
            </Typography>
        </MainCard>
    );
}

export default ContentList;
