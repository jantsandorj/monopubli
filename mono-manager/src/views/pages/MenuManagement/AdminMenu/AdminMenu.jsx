import { t } from 'i18next';
import { useState, useEffect } from 'react';
import AdminMenuEdit from './AdminMenuEdit';
import { useGetAdminMenusQuery, useCreateAdminMenuMutation, useUpdateAdminMenuMutation, useDeleteAdminMenuMutation } from './AdminMenuApi';
import CustomizedTreeView from 'components/Treeview';
import { UpdateButton } from 'components';
import MainCard from 'components/cards/MainCard';
import { CustomModal } from 'components';
import { LoadingButton } from '@mui/lab';
import SubCard from 'components/cards/SubCard';
import Loading from 'components/Loading';
import { useGetCommonFilterCodeQuery } from 'store/commonCodeApi';
import { IconCheck } from '@tabler/icons';

const ExcelJS = require('exceljs');

const { Grid, Typography, Box } = require('@mui/material');
const { Button, DeleteButton } = require('components');

const MenuTree = () => {
    const [excelData, setExcelDate] = useState([]);
    const [expanded, setExpanded] = useState(['0']);
    const { isLoading } = useGetAdminMenusQuery('?adminMenuYn=Y');

    const { data: admin } = useGetAdminMenusQuery('?adminMenuYn=Y');
    const { data: menu_type } = useGetCommonFilterCodeQuery('MENU_TYPE');
    const { data: content_type } = useGetCommonFilterCodeQuery('MN_PS');
    const { data: useYn } = useGetCommonFilterCodeQuery('USE_YN');
    const { data: exposure } = useGetCommonFilterCodeQuery('CD_EXPOSURE');
    const [currentMenu, setCurrentMenu] = useState();
    const [open, setOpen] = useState(false);

    const handleExpandClick = () => {
        let initialExpanded = admin?.content.map((node) => node.seq + '');
        initialExpanded.push('0');
        setExpanded((oldExpanded) => (oldExpanded.length === 1 ? initialExpanded : ['0']));
    };

    /** EXCEL PREPARE START */

    function sortMenuArray(menuArray) {
        return menuArray.sort((a, b) => a.menuId.localeCompare(b.menuId));
    }

    useEffect(() => {
        var newExcel = admin?.content.map((row) => ({
            menuName: row?.menuName,
            menuNameKr: row?.menuNameKr,
            menuId: row?.menuId,
            menuUrl: row?.menuUrl,
            headerText: row?.headerText,
            menuType: menu_type?.data.find((el) => el.code === row?.menuType)?.codeEngNm,
            useYn: row?.useYn,
            showYn: row.showYn
        }));
        if (newExcel?.length > 0) {
            setExcelDate(sortMenuArray(newExcel));
        } else {
            setExcelDate([]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [admin?.content]);

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
                } else if (colNumber === 7 || colNumber === 8) {
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
            anchor.download = 'admin_menu.xlsx';
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
                                setCurrentMenu({
                                    ...currentMenu,
                                    menuName: '',
                                    menuUrl: '',
                                    headerName: '',
                                    parentMenuId: currentMenu?.menuId || 0,
                                    useYn: 'Y',
                                    showYn: 'Y',
                                    adminMenuYn: 'Y'
                                });
                            }}
                        >
                            {t('create_sub_menu')}
                        </Button>
                        <DeleteButton deleteFunc={useDeleteAdminMenuMutation} code={currentMenu?.seq} />
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
                                admin?.content.length > 0 && (
                                    <CustomizedTreeView
                                        departmentList={admin?.content}
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
                            <AdminMenuEdit
                                mutation={useUpdateAdminMenuMutation}
                                data={currentMenu}
                                edit={true}
                                common={[menu_type?.data, content_type?.data, useYn?.data, exposure?.data]}
                            >
                                {<UpdateButton />}
                            </AdminMenuEdit>
                        </SubCard>
                    </Grid>
                    <CustomModal open={open} width={560}>
                        <AdminMenuEdit
                            mutation={useCreateAdminMenuMutation}
                            data={currentMenu}
                            edit={false}
                            common={[menu_type?.data, content_type?.data, useYn?.data, exposure?.data]}
                            onSuccess={() => setOpen(false)}
                        >
                            <LoadingButton
                                style={{ marginRight: 12 }}
                                loadingPosition="start"
                                startIcon={<IconCheck />}
                                variant="contained"
                                size="large"
                                type="submit"
                            >
                                {t('act_confirm')}
                            </LoadingButton>
                            <Button disableElevation size="large" variant="outlined" color="primary" onClick={() => setOpen(false)}>
                                {t('act_cancel')}
                            </Button>
                        </AdminMenuEdit>
                    </CustomModal>
                </Grid>
            </MainCard>
        </>
    );
};

export default MenuTree;
