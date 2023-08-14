import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as Api from 'api/requestApi';
import URL from 'api/url';
import CODE from 'utils/statics/code';
import { useDispatch } from 'react-redux';
import { setModalOptionsOpen } from 'store/modalSlice';

// assets
import { IconArrowLeft } from '@tabler/icons';
import * as cmn from 'utils/functions/common';
import MainCard from 'components/cards/MainCard';
import { styled } from '@mui/material/styles';
import { Button, Divider, Grid, Paper, Tab, Tabs, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';
import { AVAIL_LANG } from 'config';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary
}));

function ContentEdit(props) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const seq = location.state?.seq;
    const [customFields, setCustomFields] = useState([]); //  clonning fieldsJson from contentSettings

    const [isLoading, setIsLoading] = useState(false);
    const [modeInfo, setModeInfo] = useState({ mode: props.mode });
    const [boardDetail, setBoardDetail] = useState({ csCode: '', title: '', subject: '', contentJson: [], statusCd: 'DRAFT' });

    let fieldsRef = useRef({});
    const [refresher, setRefresher] = useState(1);
    const refreshNow = () => {
        setRefresher(refresher + 1);
    };

    const [tabLang, setTabLang] = React.useState(AVAIL_LANG[0].code); //  tab changer, language tab
    const handleTabChange = (event, newValue) => {
        setTabLang(newValue);
    };

    const intMode = () => {
        switch (props.mode) {
            case CODE.MODE_CREATE:
                setModeInfo({
                    ...modeInfo,
                    modeTitle: 'act_create',
                    editURL: '/api/content/create'
                });
                break;
            case CODE.MODE_MODIFY:
                setModeInfo({
                    ...modeInfo,
                    modeTitle: 'act_modify',
                    editURL: '/api/content/update'
                });
                retrieveDetail();
                break;
            // no default
        }
    };

    const retrieveDetail = async () => {
        const retrieveDetailURL = '/api/content/' + seq;

        const requestOptions = {
            method: 'GET',
            headers: {}
        };

        setIsLoading(true);
        let response = await Api.requestAPI(retrieveDetailURL, requestOptions);
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

        try {
            //  setting json datas
            response.data.title = JSON.parse(response.data.title ?? {});
            response.data.subject = JSON.parse(response.data.subject ?? {});
            //  setting contentJson
            setCustomFields(JSON.parse(response.data.contentJson) ?? []);
        } catch (error) {
            dispatch(
                setModalOptionsOpen({
                    type: 'error',
                    onOpen: true,
                    description: t('error.failed')
                })
            );
        }

        //  setting detail from result
        setBoardDetail(response.data);

        setTimeout(() => {
            refreshNow();
        }, 10);
    };

    const updateBoard = async () => {
        let isOk = true;
        let tab2open = tabLang; //  error on tab
        let input2focus = null;
        //  looping through all langs to check fields
        for (let l = 0; l < AVAIL_LANG.length; l++) {
            let lang = AVAIL_LANG[l].code;

            //  checking title
            if (cmn.RequireValueNow(fieldsRef.current[lang + '_title'], t('label_title'), 'text', true)) {
                isOk = false;
                //  focus input again if tab is not active
                if (lang !== tabLang) {
                    tab2open = lang;
                    input2focus = fieldsRef.current[lang + '_title'];
                }
                break;
            }
            //  checking subject
            if (cmn.RequireValueNow(fieldsRef.current[lang + '_subject'], t('label_subject'), 'text', true)) {
                isOk = false;
                //  focus input again if tab is not active
                if (lang !== tabLang) {
                    tab2open = lang;
                    input2focus = fieldsRef.current[lang + '_subject'];
                }
                break;
            }

            //  looping through all custom fields and checking
            for (let i = 0; i < customFields.length; i++) {
                let field = customFields[i];

                //  ignore if not required
                if (!field.required) {
                    continue;
                }

                if (cmn.RequireValueNow(fieldsRef.current[lang + '_' + field.fieldId], field.title[lang], 'text', true)) {
                    isOk = false;
                    //  focus input again if tab is not active
                    if (lang !== tabLang) {
                        tab2open = lang;
                        input2focus = fieldsRef.current[lang + '_' + field.fieldId];
                    }

                    break;
                }
            }
            if (!isOk) {
                break;
            }
        }

        if (!isOk) {
            if (tab2open !== tabLang) {
                handleTabChange(null, tab2open);
                setTimeout(() => {
                    input2focus.focus();
                }, 100);
            }

            return;
        }

        // require here

        const formData = new FormData();
        for (let key in boardDetail) {
            let keyValue = boardDetail[key];
            //  stringify json fields
            if (key === 'title' || key === 'subject') {
                keyValue = JSON.stringify(keyValue);
            }
            formData.append(key, keyValue);
        }
        //  adding content
        formData.set('contentJson', JSON.stringify(customFields));

        const requestOptions = {
            method: 'POST',
            data: formData,
            headers: {}
        };

        setIsLoading(true);
        let response = await Api.requestAPI(modeInfo.editURL, requestOptions);
        setIsLoading(false);
        if (response.status === 'success') {
            dispatch(
                setModalOptionsOpen({
                    type: 'success',
                    onOpen: true,
                    description: t(response.message)
                })
            );

            navigate(URL.CONTENT_DATA);
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

    useEffect(function () {
        intMode();
        try {
            setBoardDetail({ ...boardDetail, csCode: location.state?.csCode, contentJson: JSON.parse(location.state?.fieldsJson) ?? [] });
            //  setting full body of fieldJson
            setCustomFields(JSON.parse(location.state?.fieldsJson) ?? []);
        } catch (error) {
            setCustomFields([]);
        }
        return function () {};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(
        function () {
            return function () {};
        },
        [boardDetail]
    );

    return (
        <MainCard
            title={
                <div>
                    <Button
                        backgroundColor="green"
                        disableElevation
                        size="small"
                        color="primary"
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        {<IconArrowLeft />}
                    </Button>

                    {t(modeInfo.modeTitle)}
                </div>
            }
        >
            <Typography variant="body2" component={Paper}>
                <Grid container spacing={2}>
                    {/* User, Created/Modified Date, use or not */}
                    <Grid item xs={4}>
                        <Item>
                            <Typography variant="subtitle1">
                                {t('label_created_by')} / {t('label_modified_by')}
                            </Typography>
                            {boardDetail?.createdBy} / {boardDetail?.modifiedBy}
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <Typography variant="subtitle1">
                                {t('label_created_date')} / {t('label_modified_date')}
                            </Typography>
                            {boardDetail?.formattedCreateDate} / {boardDetail?.formattedModifiedDate}
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <Typography variant="subtitle1">{t('label_status')}</Typography>
                            {boardDetail?.statusCd}
                        </Item>
                    </Grid>
                    {/* Row Language tab */}
                    <Grid item xs={12}>
                        <Item>
                            <Tabs value={tabLang} onChange={handleTabChange} centered>
                                {AVAIL_LANG.map((lang, index) => (
                                    <Tab key={index} value={lang.code} label={lang.name + ' /' + lang.code + '/'} />
                                ))}
                            </Tabs>
                        </Item>
                    </Grid>
                    {/* Row 1 title */}
                    <Grid item xs={2}>
                        <Item>
                            <Typography variant="subtitle1">{t('label_title')} *</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        {AVAIL_LANG.map((lang) => (
                            <TextField
                                inputRef={(input) => {
                                    fieldsRef.current[lang.code + '_title'] = input;
                                }}
                                error={cmn.RequireValueNow(
                                    fieldsRef.current[lang.code + '_title'],
                                    boardDetail?.title?.[lang.code],
                                    'text'
                                )}
                                id={'value_' + lang.code + '_title'}
                                name={'value_' + lang.code + '_title'}
                                type="text"
                                label={(boardDetail.title[lang.code]?.length ?? 0) + ' / 255'}
                                fullWidth
                                style={{ display: tabLang !== lang.code ? 'none' : 'inherit' }}
                                required={true}
                                value={boardDetail?.title?.[lang.code]}
                                onChange={(e) => {
                                    if (!boardDetail.title) {
                                        boardDetail.title = {};
                                    }
                                    boardDetail.title[lang.code] = e.target.value.substring(0, 255);
                                    refreshNow();
                                }}
                                maxLength="255"
                            />
                        ))}
                    </Grid>
                    <Grid item xs={1}>
                        <Item>
                            <Typography variant="subtitle1">{t('label_code')}</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>{boardDetail.csCode}</Item>
                    </Grid>
                    {/* Row 2 subject */}
                    <Grid item xs={2}>
                        <Item>
                            <Typography variant="subtitle1">{t('label_subject')} *</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={10}>
                        {AVAIL_LANG.map((lang) => (
                            <TextField
                                inputRef={(input) => {
                                    fieldsRef.current[lang.code + '_subject'] = input;
                                }}
                                error={cmn.RequireValueNow(
                                    fieldsRef.current[lang.code + '_subject'],
                                    boardDetail?.subject?.[lang.code],
                                    'text'
                                )}
                                id={'value_' + lang.code + '_subject'}
                                name={'value_' + lang.code + '_subject'}
                                type="text"
                                label={(boardDetail.subject[lang.code]?.length ?? 0) + ' / 255'}
                                fullWidth
                                multiline
                                style={{ display: tabLang !== lang.code ? 'none' : 'inherit' }}
                                required={true}
                                defaultValue={boardDetail?.subject?.[lang.code]}
                                onChange={(e) => {
                                    if (!boardDetail.subject) {
                                        boardDetail.subject = {};
                                    }
                                    boardDetail.subject[lang.code] = e.target.value.substring(0, 255);
                                    refreshNow();
                                }}
                                maxLength="255"
                            />
                        ))}
                    </Grid>
                    <Grid item xs={12}>
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                    </Grid>
                    {/* Custom fields */}
                    {customFields.map((field) => (
                        <>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">
                                        {field.title[tabLang]} {field.required ? '*' : ''}
                                    </Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                {AVAIL_LANG.map((lang) => (
                                    <TextField
                                        inputRef={(input) => {
                                            fieldsRef.current[lang.code + '_' + field.fieldId] = input;
                                        }}
                                        error={
                                            field.required &&
                                            cmn.RequireValueNow(
                                                fieldsRef.current[lang.code + '_' + field.fieldId],
                                                field?.title?.[lang.code],
                                                'text'
                                            )
                                        }
                                        id={'value_' + lang.code + '_' + field.fieldId}
                                        name={'value_' + lang.code + '_' + field.fieldId}
                                        type="text"
                                        label={(field?.value?.[lang.code]?.length ?? 0) + ' / ' + field?.size}
                                        fullWidth
                                        style={{ display: tabLang !== lang.code ? 'none' : 'inherit' }}
                                        required={field.required}
                                        value={field?.value?.[lang.code]}
                                        onChange={(e) => {
                                            if (!field.value) {
                                                field.value = {};
                                            }
                                            field.value[lang.code] = e.target.value.substring(0, field?.size);
                                            refreshNow();
                                        }}
                                        maxLength="255"
                                    />
                                ))}
                            </Grid>
                        </>
                    ))}
                    <Grid item xs={12}>
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                    </Grid>

                    {/* Buttons */}
                    <Grid item xs={6} textAlign="left">
                        <Link to={URL.CONTENT_DATA} style={{ textDecoration: 'none' }}>
                            <Button disableElevation size="large" variant="outlined" color="primary">
                                {t('act_goto_list')}
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={6} textAlign="right">
                        <Link to={URL.CONTENT_CREATE} style={{ textDecoration: 'none' }}>
                            <LoadingButton
                                loading={isLoading}
                                loadingPosition="start"
                                startIcon={<SaveIcon />}
                                variant="contained"
                                size="large"
                                onClick={() => {
                                    updateBoard();
                                }}
                            >
                                {t('act_save')}
                            </LoadingButton>
                        </Link>
                    </Grid>
                </Grid>
            </Typography>
        </MainCard>
    );
}

export default ContentEdit;
