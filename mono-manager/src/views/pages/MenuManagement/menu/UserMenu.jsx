import { t } from 'i18next';
import { useState, useEffect } from 'react';
import UserMenuEdit from './UserMenuEdit';
import { useCreateUserMenuMutation, useGetUserMenusQuery, useUpdateUserMenuMutation } from './UserMenuApi';
import { useGetCommonFilterCodeQuery } from 'store/commonCodeApi';

import CustomizedTreeView from 'components/Treeview';
import { UpdateButton } from 'components';
import { useDeleteUserMenuMutation } from './UserMenuApi';
import MainCard from 'components/cards/MainCard';
import { CustomModal } from 'components';
import { LoadingButton } from '@mui/lab';
import SubCard from 'components/cards/SubCard';
import Loading from 'components/Loading';
import { IconCheck } from '@tabler/icons';

const ExcelJS = require('exceljs');
const { Grid, Typography, Box } = require('@mui/material');
const { Button, DeleteButton } = require('components');

const MenuTree = () => {
    const [excelData, setExcelDate] = useState([]);
    const [expanded, setExpanded] = useState(['0']);
    const { data, isLoading } = useGetUserMenusQuery('?adminMenuYn=N');
    const [currentMenu, setCurrentMenu] = useState();
    const [open, setOpen] = useState(false);

    const { data: menu_type } = useGetCommonFilterCodeQuery('MENU_TYPE');
    const { data: content_type } = useGetCommonFilterCodeQuery('MN_PS');
    const { data: useYn } = useGetCommonFilterCodeQuery('USE_YN');
    const { data: exposure } = useGetCommonFilterCodeQuery('CD_EXPOSURE');

    const handleExpandClick = () => {
        let initialExpanded = data?.content.map((node) => node.seq + '');
        initialExpanded.push('0');
        setExpanded((oldExpanded) => (oldExpanded.length === 1 ? initialExpanded : ['0']));
    };

    /** EXCEL PREPARE START */

    function sortMenuArray(menuArray) {
        return menuArray.sort((a, b) => a.menuId.localeCompare(b.menuId));
    }

    useEffect(() => {
        if (data?.content && content_type && menu_type) {
            var newExcel = data?.content.map((row) => ({
                menuName: row?.menuName,
                menuNameKr: row?.menuNameKr,
                menuId: row?.menuId,
                menuUrl: row?.menuUrl,
                headerText: row?.headerText,
                positionType: content_type?.data.find((el) => el.code === row?.positionType)?.codeEngNm,
                menuType: menu_type?.data.find((el) => el.code === row?.menuType)?.codeEngNm,
                useYn: row?.useYn,
                showYn: row.showYn
            }));
            if (newExcel?.length > 0) {
                setExcelDate(sortMenuArray(newExcel));
            } else {
                setExcelDate([]);
            }
        }
    }, [data?.content, content_type, menu_type]);

    const exportExcelFile = () => {
        // Create new excel and sheet
        const workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet('Menu list');

        // set header text to sheet
        sheet.columns = [
            {
                header: 'Menu name',
                key: 'menuName',
                width: 30
            },
            {
                header: 'Menu name korean',
                key: 'menuNameKr',
                width: 30
            },
            {
                header: 'Menu Id',
                key: 'menuId',
                width: 15
            },
            {
                header: 'Menu URL',
                key: 'menuUrl',
                width: 50
            },
            {
                header: 'Header name',
                key: 'headerText',
                width: 30
            },
            {
                header: 'Menu location',
                key: 'positionType',
                width: 30
            },
            {
                header: 'Menu type',
                key: 'menuType',
                width: 20
            },
            {
                header: 'Use or not',
                key: 'useYn',
                width: 15
            },
            {
                header: 'Exposed or Not',
                key: 'showYn',
                width: 15
            }
        ];

        // set data to sheet
        excelData.map((menu) => {
            return sheet.addRow({
                menuName: menu?.menuName,
                menuNameKr: menu?.menuNameKr,
                menuId: menu?.menuId,
                menuUrl: menu?.menuUrl,
                headerText: menu?.headerText,
                positionType: menu?.positionType,
                menuType: menu?.menuType,
                useYn: menu?.useYn,
                showYn: menu?.showYn
            });
        });

        // set style to sheet
        sheet.eachRow({ includeEmpty: true }, function (row, rowNumber) {
            row.eachCell(function (cell, colNumber) {
                if (rowNumber === 1) {
                    row.height = 20;
                    row.alignment = { vertical: 'middle', horizontal: 'center' };
                    row.font = {
                        bold: true
                    };
                    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE3F2FD' } };
                    cell.border = {
                        top: { style: 'thin', color: { argb: '2196f3' } },
                        left: { style: 'thin', color: { argb: '2196f3' } },
                        bottom: { style: 'thin', color: { argb: '2196f3' } },
                        right: { style: 'thin', color: { argb: '2196f3' } }
                    };
                } else if (colNumber === 8 || colNumber === 9) {
                    cell.alignment = { vertical: 'middle', horizontal: 'center' };
                }
            });
        });

        workbook.xlsx.writeBuffer().then((data) => {
            const blob = new Blob([data], {
                type: 'application/vnd.openxmlformats-officedocument.spreedsheet.sheet'
            });
            const url = window.URL.createObjectURL(blob);
            const anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = 'user_menu.xlsx';
            anchor.click();
            window.URL.revokeObjectURL(url);
        });
    };
    /** EXCEL PREPARE END */

    return (
        <>
            <MainCard style={{ height: '100%' }}>
                <Typography variant="h5">{t('menu_list')}</Typography>
                <Grid container spacing={2} sx={{ mt: 5, display: 'flex' }}>
                    <Grid item xs={6} sx={{ display: 'flex', gap: '5px' }}>
                        <Button
                            variant="contained"
                            size="small"
                            onClick={() => {
                                setOpen(true);

                                setCurrentMenu((prevMenu) => {
                                    let parentMenuId = prevMenu?.menuId || 0;
                                    let menuUrl = prevMenu?.menuUrl || '';
                                    if (prevMenu.menuId.length !== 2) {
                                        menuUrl = ''; // set to new value
                                    }
                                    return {
                                        ...prevMenu,
                                        menuName: '',
                                        menuUrl: menuUrl,
                                        headerName: '',
                                        parentMenuId: parentMenuId,
                                        useYn: 'Y',
                                        showYn: 'Y'
                                    };
                                });
                            }}
                        >
                            {t('create_sub_menu')}
                        </Button>
                        <DeleteButton deleteFunc={useDeleteUserMenuMutation} code={currentMenu?.seq} />
                    </Grid>
                    <Grid item xs={6} sx={{ display: 'flex', gap: '5px' }}>
                        <Button variant="contained" color="success" size="small" onClick={exportExcelFile}>
                            <Typography variant="inherit" color="white">
                                {t('excel_download')}
                            </Typography>
                        </Button>

                        <Button variant="contained" color="info" size="small" onClick={handleExpandClick}>
                            {expanded.length === 1 ? `${t('open_all')}` : `${t('close_all')}`}
                        </Button>
                    </Grid>

                    <Grid item xs={6} sx={{ mt: 5 }}>
                        <SubCard
                            style={
                                isLoading
                                    ? { height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }
                                    : { height: '100%' }
                            }
                        >
                            {isLoading ? (
                                <>
                                    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Loading isLoading={isLoading} />
                                    </Box>
                                </>
                            ) : (
                                data?.content.length > 0 && (
                                    <CustomizedTreeView
                                        departmentList={data?.content}
                                        setCurrentMenu={setCurrentMenu}
                                        expanded={expanded}
                                        setExpanded={setExpanded}
                                        isLoading={isLoading}
                                    />
                                )
                            )}
                        </SubCard>
                    </Grid>
                    <Grid item xs={6} sx={{ mt: 5 }} style={{ display: 'flex', justifyContent: 'end' }}>
                        <SubCard>
                            <UserMenuEdit
                                mutation={useUpdateUserMenuMutation}
                                data={currentMenu}
                                edit={true}
                                common={[menu_type?.data, content_type?.data, useYn?.data, exposure?.data]}
                            >
                                {<UpdateButton />}
                            </UserMenuEdit>
                        </SubCard>
                    </Grid>
                    <CustomModal open={open} width={560}>
                        <UserMenuEdit
                            mutation={useCreateUserMenuMutation}
                            data={currentMenu}
                            edit={false}
                            onSuccess={() => setOpen(false)}
                            common={[menu_type?.data, content_type?.data, useYn?.data, exposure?.data]}
                        >
                            <LoadingButton
                                style={{ marginRight: 12 }}
                                startIcon={<IconCheck />}
                                loadingPosition="start"
                                variant="contained"
                                size="large"
                                type="submit"
                            >
                                {t('act_confirm')}
                            </LoadingButton>
                            <Button disableElevation size="large" variant="outlined" color="primary" onClick={() => setOpen(false)}>
                                {t('act_cancel')}
                            </Button>
                        </UserMenuEdit>
                    </CustomModal>
                </Grid>
            </MainCard>
        </>
    );
};

export default MenuTree;
