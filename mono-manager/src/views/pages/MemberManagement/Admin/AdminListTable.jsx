import React, { useState, useEffect } from 'react';
import URL from 'api/url';
import DataTable from 'components/table/DataTable';
import { Grid, MenuItem, Divider, Typography, Menu, Modal } from '@mui/material';
import { Box } from '@mui/system';
import { CreateButton, Form, FormInput, UpdateButton } from 'components';
import AdminFilter from './AdminFilter';
import useAdminColumns from './AdminColumns';
import { useContext } from 'react';
import { ListContextWrapper } from 'components/list/ListContextWrapper';
import { useNavigate } from 'react-router';
import { useGetAdminsQuery, useAdminPasswordChangeMutation } from './AdminApi';
import { useTranslation } from 'react-i18next';
import ClearIcon from '@mui/icons-material/Clear';
import { AdminValidate } from './AdminPasswordValidate';
import { useDeleteAdminMutation } from 'views/pages/MemberManagement/Admin/AdminApi';
import { DeleteConfirm } from 'components/index';
import Snackbar from 'components/Snackbar';
import LockResetIcon from '@mui/icons-material/LockReset';

const AdminListTable = () => {
    const [code, setCode] = useState('');

    const { t } = useTranslation();
    const { getColumns } = useAdminColumns();
    const navigate = useNavigate();
    const { searchCondition, paginationInfo, setPaginationInfo, setSearchCondition } = useContext(ListContextWrapper);
    const { data, isLoading } = useGetAdminsQuery(new URLSearchParams({ ...paginationInfo, ...searchCondition }).toString());

    const handlePageChange = (page) => {
        setPaginationInfo({ ...paginationInfo, page: page - 1 });
        setSearchCondition({ ...searchCondition });
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setPaginationInfo({ ...paginationInfo, page: page - 1, size: newPerPage });
        setSearchCondition({ ...searchCondition });
    };

    const handleSort = async (column, sortDirection) => {
        setSearchCondition({ ...searchCondition, sort: column.sortField + ',' + sortDirection });
    };

    const handleClick = (row) => {
        navigate(URL.MEMBER_ADMIN_DETAIL + `/${row.seq}`);
    };
    const [id, setId] = useState('');
    const [show, setShow] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const openFieldMenu = Boolean(anchorEl2);

    const showFieldMenu = (event, row) => {
        setAnchorEl2(event.currentTarget);
        setId(row.username);
        setCode(row.seq);
    };

    const hideFieldMenu = () => {
        setAnchorEl2(null);
    };

    const ask2change = async () => {
        hideFieldMenu();
        setShow(true);
    };
    const ask2Delete = async () => {
        hideFieldMenu();
        setShowDelete(true);
    };
    const showModalHide = async () => {
        setShow(false);
    };
    const showModalDelete = async () => {
        setShowDelete(false);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: '10px',
        outline: 'none'
    };
    const [onDelete, deleteResult] = useDeleteAdminMutation();

    useEffect(() => {
        if (deleteResult.data) {
            Snackbar.success(t(deleteResult.data.message));
            if (deleteResult.data.status === 'success' || deleteResult.data.status === 200) {
                setShow(false);
                setShowDelete(false);
                URL.MEMBER_ADMIN && navigate(URL.MEMBER_ADMIN);
            }
        }
    }, [deleteResult, navigate, t]);
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    return (
        <>
            <Box sx={{ mt: 2 }}>
                <AdminFilter />
                <DataTable
                    columns={getColumns(openFieldMenu, showFieldMenu, data)}
                    data={data?.content}
                    progressPending={isLoading}
                    paginationTotalRows={data?.totalElements}
                    onChangeRowsPerPage={handlePerRowsChange}
                    onChangePage={handlePageChange}
                    onSort={handleSort}
                    onRowClicked={handleClick}
                />
                <Menu
                    id="long-menu"
                    MenuListProps={{
                        'aria-labelledby': 'long-button'
                    }}
                    anchorEl={anchorEl2}
                    open={openFieldMenu}
                    onClose={hideFieldMenu}
                >
                    <Divider sx={{ flexGrow: 1 }} orientation="horizontal" style={{ marginTop: '5px' }} />
                    <MenuItem
                        key={2}
                        onClick={() => {
                            ask2change();
                        }}
                    >
                        <Typography variant="inherit" color="primary" style={{ marginTop: '10px', paddingLeft: '15px' }}>
                            <LockResetIcon />
                        </Typography>
                        <Typography
                            variant="inherit"
                            color="primary"
                            style={{ marginTop: '10px', paddingLeft: '10px', paddingRight: '20px' }}
                        >
                            {t('password_change')}
                        </Typography>
                    </MenuItem>
                    <MenuItem
                        key={2}
                        onClick={() => {
                            ask2Delete();
                        }}
                    >
                        <Typography variant="inherit" color="primary" style={{ marginTop: '10px', paddingLeft: '15px', color: 'red' }}>
                            <ClearIcon color="red" />
                        </Typography>
                        <Typography
                            variant="inherit"
                            color="primary"
                            style={{ marginTop: '10px', paddingLeft: '10px', paddingRight: '20px', color: 'red' }}
                        >
                            {t('act_delete')}
                        </Typography>
                    </MenuItem>
                    <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                </Menu>
            </Box>
            <Grid style={{ textAlign: 'end' }}>
                <CreateButton to={URL.MEMBER_ADMIN_CREATE} />
            </Grid>
            <Modal open={show} onClose={showModalHide} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={{ ...style, width: 800 }}>
                    <Form validateSchema={AdminValidate} setOpen={setShow} mutation={useAdminPasswordChangeMutation}>
                        <input type="hidden" name="username" value={id} />
                        <Grid item xs={2} style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="h3">{t('password_change')} </Typography>
                            <ClearIcon style={{ color: 'red' }} onClick={() => setShow(false)} />
                        </Grid>

                        <Grid item xs={2}>
                            <Typography variant="subtitle1" style={{ paddingBottom: '10px', paddingTop: '80px' }}>
                                {t('password_new')} *
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <FormInput
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                eye="true"
                                showpassword={setShowPassword}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="subtitle1" style={{ paddingBottom: '10px', paddingTop: '30px' }}>
                                {t('password_confirm')} *
                            </Typography>
                        </Grid>
                        <Grid item xs={4} style={{ paddingBottom: '100px' }}>
                            <FormInput
                                id="verify_password"
                                name="verify_password"
                                type={showPassword2 ? 'text' : 'password'}
                                eye="true"
                                showpassword={setShowPassword2}
                            />
                        </Grid>
                        <Grid item xs={6} textAlign="right">
                            <UpdateButton />
                        </Grid>
                    </Form>
                </Box>
            </Modal>
            <DeleteConfirm show={showDelete} setShow={showModalDelete} onDelete={onDelete} to={URL.MEMBER_ADMIN} code={code} />
        </>
    );
};
export default AdminListTable;
