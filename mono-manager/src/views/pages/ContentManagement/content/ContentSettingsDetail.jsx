import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import * as Api from 'api/requestApi';
import URL from 'api/url';
import { setModalOptionsOpen } from 'store/modalSlice';

import MainCard from 'components/cards/MainCard';
import { styled } from '@mui/material/styles';
import {
    Button,
    Checkbox,
    Divider,
    Fab,
    FormControlLabel,
    Grid,
    ListItemIcon,
    Menu,
    MenuItem,
    Modal,
    Paper,
    Select,
    TextField,
    Typography
} from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@mui/lab';
import IconButton from '@mui/material/IconButton';
import { IconCheck, IconEdit, IconPlus, IconTrash } from '@tabler/icons';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClearIcon from '@mui/icons-material/Clear';
import SubCard from 'components/cards/SubCard';
import { Box, useTheme } from '@mui/system';
import DataTable from 'components/table/DataTable';
import { useRef } from 'react';
import * as cmn from 'utils/functions/common';
import { AVAIL_LANG } from 'config';
import { ListButton, SaveButton, List } from 'components';
import { Filter } from 'components/list';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.primary
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24
};

function ContentSettingsDetail(props) {
    console.group('ContentSettingsDetail');
    console.log('------------------------------');
    console.log('ContentSettingsDetail [props] : ', props);

    const dispatch = useDispatch();
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();

    const [isLoading, setIsLoading] = useState(false);
    const contentType = location.state?.contentType;
    const code = location.search.toString().split('code=')[1].toString().split('&')[0];

    const [boardDetail, setBoardDetail] = useState({});
    const [customFields, setCustomFields] = useState([]); //  body for language tab
    const [activeField, setActiveField] = useState({}); //  setting selected field
    const [activeIndex, setActiveIndex] = useState(-1); //  setting index of selected field
    const [refresher, setRefresher] = useState(1);
    const refreshNow = () => {
        setRefresher(refresher + 1);
    };

    const [show, setShow] = useState(false);
    const [showSave, setShowSave] = useState(false);
    const showConfirmation2delete = () => setShow(true);
    const hideConfirmation2delete = () => setShow(false);
    const showConfirmation2save = () => setShowSave(true);
    const hideConfirmation2save = () => setShowSave(false);

    const [tabLang, setTabLang] = React.useState(AVAIL_LANG[0].code); //  tab changer, language tab
    const handleTabChange = (event, newValue) => {
        setTabLang(newValue);
        console.log('fields:', customFields);
    };

    const showTypeMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const hideTypeMenu = () => {
        setAnchorEl(null);
    };

    const showFieldMenu = (event, row) => {
        setActiveField(row);
        //  setting active index
        setActiveIndex(customFields.indexOf(row));

        //  showing menu
        setAnchorEl2(event.currentTarget);
    };
    const hideFieldMenu = () => {
        setAnchorEl2(null);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const openTypeMenu = Boolean(anchorEl);
    const openFieldMenu = Boolean(anchorEl2);

    //  custom field related
    let fieldsRef = useRef({});
    const fieldTypes = [
        {
            type: 'text',
            typeNm: t('field_type_text')
        },
        {
            type: 'text_area',
            typeNm: t('field_type_text_area')
        },
        {
            type: 'email',
            typeNm: t('field_type_number')
        },
        {
            type: 'number',
            typeNm: t('field_type_email')
        },
        {
            type: 'regex',
            typeNm: t('field_type_regex')
        }
    ];

    const retrieveDetail = async () => {
        const retrieveDetailURL = '/api/content/settings/' + code;
        const formData = new FormData();
        formData.append('code', code);

        let queryString = new URLSearchParams(formData).toString();

        const requestOptions = {
            method: 'GET',
            headers: {}
        };

        setIsLoading(true);
        let response = await Api.requestAPI(retrieveDetailURL + (queryString !== '' ? '?' + queryString : ''), requestOptions);
        setIsLoading(false);

        if (!response.data) {
            dispatch(
                setModalOptionsOpen({
                    type: 'error',
                    onOpen: true,
                    description: t(response.message)
                })
            );
            return;
        }

        //  setting detail from result
        setBoardDetail(response.data);
        //  setting fields
        try {
            //  setting full body of fieldJson
            setCustomFields(JSON.parse(response.data.fieldsJson) ?? []);
        } catch (error) {
            setCustomFields([]);
        }
    };

    const ask2delete = async () => {
        showConfirmation2delete();
    };

    const ask2save = async () => {
        let isOk = true;
        //  looping through all langs
        for (let l = 0; l < AVAIL_LANG.length; l++) {
            let lang = AVAIL_LANG[l].code;
            //  looping through all custom fields and checking
            for (let i = 0; i < customFields.length; i++) {
                let field = customFields[i];

                if (cmn.RequireValueNow(fieldsRef.current[lang + '_' + field.fieldId], t('label_title'), 'text', true)) {
                    isOk = false;
                    //  focus input again if tab is not active
                    if (lang !== tabLang) {
                        handleTabChange(null, lang);
                        setTimeout(() => {
                            fieldsRef.current[lang + '_' + field.fieldId].focus();
                        }, 100);
                    }

                    break;
                }
            }
            if (!isOk) {
                break;
            }
        }

        if (!isOk) {
            return;
        }

        showConfirmation2save();
    };

    const deleteContentSettings = async () => {
        const deleteBoardURL = '/api/content/settings/delete';
        const token = JSON.parse(localStorage.getItem('user')).token;

        const requestOptions = {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${token}`
            }
        };

        setIsLoading(true);
        let response = await Api.requestAPI(deleteBoardURL + (code !== '' ? '/' + code : ''), requestOptions);
        setIsLoading(false);

        if (response.status === 'success') {
            dispatch(
                setModalOptionsOpen({
                    type: 'success',
                    onOpen: true,
                    description: t(response.message)
                })
            );
            hideConfirmation2delete();
            console.log('response: ', response);
            navigate(URL.CONTENT_FORM);
        } else {
            dispatch(
                setModalOptionsOpen({
                    type: 'error',
                    onOpen: true,
                    description: t(response.message)
                })
            );
        }
    };

    const updateContentSettings = async () => {
        const updateBoardURL = '/api/content/settings/fields';
        const formData = new FormData();
        formData.append('code', code);
        formData.append('fieldsJson', JSON.stringify(customFields));

        const requestOptions = {
            method: 'POST',
            data: formData,
            headers: {}
        };

        setIsLoading(true);
        let response = await Api.requestAPI(updateBoardURL, requestOptions);
        setIsLoading(false);

        if (response.status === 'success') {
            dispatch(
                setModalOptionsOpen({
                    type: 'success',
                    onOpen: true,
                    description: t(response.message)
                })
            );
            console.log('response: ', response);
            navigate(URL.CONTENT_FORM);
        } else {
            dispatch(
                setModalOptionsOpen({
                    type: 'error',
                    onOpen: true,
                    description: t(response.message)
                })
            );
        }
    };

    //  adding new custome field to customFields
    const addNewField = (fieldType) => {
        let fieldId = 'field_' + (customFields.length + 1);
        let newField = { ...fieldType, fieldId: fieldId, title: {}, required: false, size: 255 };
        //  adding lang variable
        for (let i = 0; i < AVAIL_LANG.length; i++) {
            let lang = AVAIL_LANG[i].code;
            newField['title'][lang] = '';
        }

        customFields.push(newField);
        setCustomFields(customFields);

        hideTypeMenu();
    };

    //  moving field by index
    const moveFieldUp = () => {
        hideFieldMenu();

        if (activeIndex < 1) {
            return;
        }

        let newIndex = activeIndex - 1;

        customFields.splice(newIndex, 0, customFields.splice(activeIndex, 1)[0]);
        setCustomFields(customFields);
        refreshNow();
    };

    //  moving field by index
    const moveFieldDown = () => {
        hideFieldMenu();

        if (activeIndex > customFields.length - 2) {
            return;
        }

        let newIndex = activeIndex + 1;

        customFields.splice(newIndex, 0, customFields.splice(activeIndex, 1)[0]);
        setCustomFields(customFields);
    };

    //  removing field by index
    const removeField = () => {
        customFields.splice(activeIndex, 1);
        setCustomFields(customFields);

        hideFieldMenu();
    };

    useEffect(function () {
        retrieveDetail();
        return function () {};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /**
     *  begin of DataTable
     **/
    const columns = [
        {
            name: t('label_field_title'),
            selector: (row) => (
                <div>
                    {AVAIL_LANG.map((lang) => (
                        <TextField
                            inputRef={(input) => {
                                fieldsRef.current[lang.code + '_' + row.fieldId] = input;
                            }}
                            error={cmn.RequireValueNow(fieldsRef.current[lang.code + '_' + row.fieldId], t('label_field_title'), 'text')}
                            id={'title_' + lang.code + '_' + row.fieldId}
                            name={'title_' + lang.code + '_' + row.fieldId}
                            type="text"
                            fullWidth
                            style={{ width: '380px', display: tabLang !== lang.code ? 'none' : 'inherit' }}
                            required
                            size="small"
                            value={row.title[lang.code]}
                            onChange={(e) => {
                                row.title[lang.code] = e.target.value;
                                refreshNow();
                            }}
                            maxLength="255"
                        />
                    ))}
                </div>
            ),
            width: '420px'
        },
        {
            name: t('label_field_type') + ' / ' + t('label_field_size'),
            selector: (row) => (
                <Grid container>
                    <Grid item xs={8}>
                        <Select
                            id={'type_' + row.fieldId}
                            value={row.type}
                            fullWidth
                            size="small"
                            onChange={(e) => {
                                row.type = e.target.value;
                                refreshNow();
                            }}
                        >
                            {fieldTypes.map((fieldType, index) => (
                                <MenuItem key={index} value={fieldType.type}>
                                    {fieldType.typeNm}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            type="number"
                            style={{ paddingLeft: '10px' }}
                            fullWidth
                            required
                            size="small"
                            value={row.size}
                            onChange={(e) => {
                                row.size = e.target.value;
                                refreshNow();
                            }}
                            maxLength="255"
                        />
                    </Grid>
                </Grid>
            ),
            width: '300px'
        },
        {
            name: t('label_field_required'),
            selector: (row) => (
                <Checkbox
                    checked={row.required}
                    onChange={(el, checked) => {
                        row.required = checked;
                        refreshNow();
                        console.log('row: ', row);
                    }}
                />
            ),
            center: true
        },
        {
            name: t('label_action'),
            selector: (row) => (
                <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={openFieldMenu ? 'long-menu' : undefined}
                    aria-expanded={openFieldMenu ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={(e) => showFieldMenu(e, row)}
                >
                    <MoreVertIcon />
                </IconButton>
            ),
            center: true,
            width: '100px'
        }
    ];

    const conditionalRowStyles = [
        {
            when: (row) => row === activeField,
            style: {
                backgroundColor: theme.palette.primary.light,
                color: 'white',
                '&:hover': {
                    cursor: 'pointer'
                }
            }
        }
    ];

    return (
        <MainCard title={t('act_detail')}>
            <List>
                <Typography variant="body2" component={Paper}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Filter title={t('title_content_settings')}>
                                <Grid container>
                                    <Grid item xs={4}>
                                        <Item>
                                            <Typography variant="subtitle1">{t('label_created_by')}</Typography>
                                            {boardDetail.createdBy}
                                        </Item>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Item>
                                            <Typography variant="subtitle1">{t('label_created_date')}</Typography>
                                            {boardDetail.formattedCreateDate}
                                        </Item>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Item>
                                            <Typography variant="subtitle1">{t('label_use_yn')}</Typography>
                                            <FormControlLabel
                                                label={t('label_use')}
                                                control={
                                                    <Checkbox
                                                        id="saveid"
                                                        disabled
                                                        checked={boardDetail.useYn === 'Y'}
                                                        onChange={(e) =>
                                                            setBoardDetail({ ...boardDetail, useYn: boardDetail.useYn === 'Y' ? 'N' : 'Y' })
                                                        }
                                                    />
                                                }
                                            ></FormControlLabel>
                                        </Item>
                                    </Grid>
                                    {/* Row Divider */}
                                    <Grid item xs={12}>
                                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                                    </Grid>
                                    {/* Row 1 */}
                                    <Grid item xs={2}>
                                        <Item>
                                            <Typography variant="subtitle1">{t('label_code')}</Typography>
                                        </Item>
                                    </Grid>

                                    <Grid item xs={4}>
                                        <Item>{boardDetail.code}</Item>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Item>
                                            <Typography variant="subtitle1">{t('label_name')}</Typography>
                                        </Item>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Item>{boardDetail.name}</Item>
                                    </Grid>
                                    {/* Row 2 */}
                                    <Grid item xs={2}>
                                        <Item>
                                            <Typography variant="subtitle1">{t('label_title')}</Typography>
                                        </Item>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Item>{boardDetail.title}</Item>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Item>
                                            <Typography variant="subtitle1">{t('label_url')}</Typography>
                                        </Item>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Item>{boardDetail.url}</Item>
                                    </Grid>
                                    {/* Row Divider and Buttons */}
                                    <Grid item xs={12} marginBottom={2}>
                                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                                    </Grid>

                                    <Grid item xs={6} textAlign="left">
                                        <ListButton to={URL.CONTENT_FORM} />
                                    </Grid>
                                    <Grid item xs={6} textAlign="right">
                                        <LoadingButton
                                            style={{ marginRight: 12 }}
                                            loading={isLoading}
                                            loadingPosition="start"
                                            startIcon={<IconTrash />}
                                            variant="contained"
                                            color="error"
                                            size="large"
                                            onClick={() => {
                                                ask2delete();
                                            }}
                                            {...props}
                                        >
                                            {t('act_delete')}
                                        </LoadingButton>
                                        <Link
                                            to={URL.CONTENT_FORM_MODIFY}
                                            state={{
                                                contentType: contentType,
                                                code: boardDetail?.code
                                            }}
                                        >
                                            <LoadingButton loading={isLoading} startIcon={<IconEdit />} size="large" variant="contained">
                                                {t('act_modify')}
                                            </LoadingButton>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Filter>
                        </Grid>
                        <Grid item xs={12} marginTop={2}>
                            <SubCard title={t('title_custom_fields')}>
                                <Grid item xs={12} textAlign="right" paddingRight={7}>
                                    <Fab
                                        color="primary"
                                        aria-label="add"
                                        style={{ position: 'absolute' }}
                                        id="add-field-button"
                                        aria-controls={openTypeMenu ? 'content-field-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={openTypeMenu ? 'true' : undefined}
                                        onClick={showTypeMenu}
                                    >
                                        <IconPlus />
                                    </Fab>
                                    <Menu
                                        id="content-field-menu"
                                        anchorEl={anchorEl}
                                        open={openTypeMenu}
                                        onClose={hideTypeMenu}
                                        MenuListProps={{
                                            'aria-labelledby': 'add-field-button'
                                        }}
                                    >
                                        {fieldTypes.map((fieldType) => (
                                            <MenuItem
                                                onClick={() => {
                                                    addNewField(fieldType);
                                                }}
                                            >
                                                {fieldType.typeNm}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Grid>

                                <Box sx={{ mt: 2 }}>
                                    <Tabs value={tabLang} onChange={handleTabChange} centered>
                                        {AVAIL_LANG.map((lang, index) => (
                                            <Tab key={index} value={lang.code} label={lang.name + ' /' + lang.code + '/'} />
                                        ))}
                                    </Tabs>

                                    <DataTable
                                        columns={columns}
                                        data={customFields}
                                        conditionalRowStyles={conditionalRowStyles}
                                        highlightOnHover
                                        pointerOnHover
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
                                        <MenuItem key={1} onClick={moveFieldUp} disabled={activeIndex < 1}>
                                            <ListItemIcon>
                                                <KeyboardArrowUpIcon fontSize="small" />
                                            </ListItemIcon>
                                            <Typography variant="inherit">{t('act_move_up')}</Typography>
                                        </MenuItem>
                                        <MenuItem key={2} onClick={moveFieldDown} disabled={activeIndex > customFields?.length - 2}>
                                            <ListItemIcon>
                                                <KeyboardArrowDownIcon fontSize="small" />
                                            </ListItemIcon>
                                            <Typography variant="inherit">{t('act_move_down')}</Typography>
                                        </MenuItem>
                                        <MenuItem key={3} onClick={removeField}>
                                            <ListItemIcon>
                                                <ClearIcon fontSize="small" color="error" />
                                            </ListItemIcon>
                                            <Typography variant="inherit" color="error">
                                                {t('act_delete')}
                                            </Typography>
                                        </MenuItem>
                                    </Menu>
                                </Box>
                                <Grid item xs={12} textAlign="right">
                                    <SaveButton
                                        onClick={() => {
                                            ask2save();
                                        }}
                                        loading={isLoading}
                                    />
                                </Grid>
                            </SubCard>
                        </Grid>
                    </Grid>
                    <Modal
                        open={show}
                        onClose={hideConfirmation2delete}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description"
                    >
                        <Filter sx={{ ...style, width: 400 }} title={t('act_delete')}>
                            <p id="parent-modal-description">{t('ask_to_delete')}</p>
                            <Grid textAlign="right" marginTop={4}>
                                <LoadingButton
                                    style={{ marginRight: 12 }}
                                    loading={isLoading}
                                    loadingPosition="start"
                                    startIcon={<IconCheck />}
                                    variant="contained"
                                    size="large"
                                    onClick={(e) => {
                                        deleteContentSettings();
                                    }}
                                >
                                    {' '}
                                    {t('act_confirm')}
                                </LoadingButton>
                                <Button
                                    disableElevation
                                    size="large"
                                    variant="outlined"
                                    color="primary"
                                    onClick={(e) => {
                                        hideConfirmation2delete();
                                    }}
                                >
                                    {t('act_cancel')}
                                </Button>
                            </Grid>
                        </Filter>
                    </Modal>
                    {/* Confirmation modal for save fields */}
                    <Modal
                        open={showSave}
                        onClose={hideConfirmation2save}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description"
                    >
                        <Filter sx={{ ...style, width: 400 }} title={t('act_save')}>
                            <p id="parent-modal-description">{t('ask_to_save')}</p>
                            <Grid textAlign="right" marginTop={4}>
                                <LoadingButton
                                    style={{ marginRight: 12 }}
                                    loading={isLoading}
                                    loadingPosition="start"
                                    startIcon={<IconCheck />}
                                    variant="contained"
                                    size="large"
                                    onClick={() => {
                                        //  first, need to hide confirmation
                                        hideConfirmation2save();
                                        setTimeout(() => {
                                            updateContentSettings();
                                        }, 200);
                                    }}
                                >
                                    {t('act_confirm')}
                                </LoadingButton>
                                <Button
                                    disableElevation
                                    size="large"
                                    variant="outlined"
                                    color="primary"
                                    onClick={(e) => {
                                        hideConfirmation2save();
                                    }}
                                >
                                    {t('act_cancel')}
                                </Button>
                            </Grid>
                        </Filter>
                    </Modal>
                </Typography>
            </List>
        </MainCard>
    );
}

export default ContentSettingsDetail;
