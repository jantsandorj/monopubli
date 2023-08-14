import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setModalOptionsOpen } from 'store/modalSlice';
import * as Api from 'api/requestApi';
import URL from 'api/url';
import CODE from 'utils/statics/code';

// assets
import { IconArrowLeft } from '@tabler/icons';
import * as cmn from 'utils/functions/common';
import MainCard from 'components/cards/MainCard';
import { styled } from '@mui/material/styles';
import { Button, Checkbox, Divider, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ListButton, SaveButton } from 'components';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.primary
}));

function ContentSettingsEdit(props) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const code = location.state?.code;
    const dispatch = useDispatch();

    const [isValid, setIsValid] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [modeInfo, setModeInfo] = useState({ mode: props.mode });
    const [boardDetail, setBoardDetail] = useState({ code: '', name: '', title: '', url: '', useYn: 'Y' });

    const fieldCode = useRef(null);
    const fieldName = useRef(null);
    const fieldTitle = useRef(null);
    const fieldUrl = useRef(null);

    const intMode = () => {
        switch (props.mode) {
            case CODE.MODE_CREATE:
                setModeInfo({
                    ...modeInfo,
                    modeTitle: 'act_create',
                    editURL: '/api/content/settings/create'
                });
                break;
            case CODE.MODE_MODIFY:
                setModeInfo({
                    ...modeInfo,
                    modeTitle: 'act_modify',
                    editURL: '/api/content/settings/update'
                });
                retrieveDetail();
                break;
            // no default
        }
    };

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

        console.log('response: ', response);

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
    };

    function validateCode(code) {
        code = code.toLowerCase();
        code = code.replace(' ', '_');
        //  accept only letter and digit
        code = code.replace(/[^a-zA-Z-Z0-9-_-]/g, '');
        setBoardDetail({ ...boardDetail, code: code });
    }

    const updateBoard = async () => {
        console.log(modeInfo);

        if (cmn.RequireValueNow(fieldCode, t('label_code'), 'text', true)) {
            setIsValid(false);
            return;
        }
        if (cmn.RequireValueNow(fieldName, t('label_name'), 'text', true)) {
            setIsValid(false);
            return;
        }
        if (cmn.RequireValueNow(fieldTitle, t('label_title'), 'text', true)) {
            setIsValid(false);
            return;
        }
        if (cmn.RequireValueNow(fieldUrl, t('label_url'), 'text', true)) {
            setIsValid(false);
            return;
        }

        const formData = new FormData();
        for (let key in boardDetail) {
            if (key !== 'attachments') formData.append(key, boardDetail[key]);
            console.log('boardDetail [%s] ', key, boardDetail[key]);
        }

        const token = JSON.parse(localStorage.getItem('user')).token;

        const requestOptions = {
            method: 'POST',
            data: formData,
            headers: {
                authorization: `Bearer ${token}`
            }
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

            switch (props.mode) {
                case CODE.MODE_CREATE:
                    navigate(URL.CONTENT_FORM_DETAIL + '?code=' + response.data?.code);
                    break;
                case CODE.MODE_MODIFY:
                    navigate(URL.CONTENT_FORM);
                    break;
                // no default
            }
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
        return function () {};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                    {/* Row 1 */}
                    <Grid item xs={2}>
                        <Item>
                            <Typography variant="subtitle1">{t('label_code')} *</Typography>
                        </Item>
                    </Grid>

                    <Grid item xs={4}>
                        <TextField
                            inputRef={fieldCode}
                            fullWidth
                            id="code"
                            name="code"
                            type="text"
                            error={isValid ? false : cmn.RequireValueNow(fieldCode, t('label_code'))}
                            required
                            value={boardDetail?.code}
                            onChange={(e) => validateCode(e.target.value)}
                            maxLength="255"
                            disabled={props.mode === CODE.MODE_MODIFY}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Item>
                            <Typography variant="subtitle1">{t('label_name')} *</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            inputRef={fieldName}
                            fullWidth
                            id="name"
                            name="name"
                            type="text"
                            error={isValid ? false : cmn.RequireValueNow(fieldName, t('label_name'))}
                            required
                            value={boardDetail.name}
                            onChange={(e) => setBoardDetail({ ...boardDetail, name: e.target.value })}
                            maxLength="255"
                        />
                    </Grid>
                    {/* Row 2 */}
                    <Grid item xs={2}>
                        <Item>
                            <Typography variant="subtitle1">{t('label_title')} *</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            inputRef={fieldTitle}
                            fullWidth
                            id="title"
                            name="title"
                            type="text"
                            error={isValid ? false : cmn.RequireValueNow(fieldTitle, t('label_title'))}
                            required
                            value={boardDetail.title}
                            onChange={(e) => setBoardDetail({ ...boardDetail, title: e.target.value })}
                            maxLength="255"
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Item>
                            <Typography variant="subtitle1">{t('label_url')} *</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            inputRef={fieldUrl}
                            fullWidth
                            id="url"
                            name="url"
                            type="text"
                            error={isValid ? false : cmn.RequireValueNow(fieldUrl, t('label_url'))}
                            required
                            value={boardDetail.url}
                            onChange={(e) => setBoardDetail({ ...boardDetail, url: e.target.value })}
                            maxLength="255"
                        />
                    </Grid>
                    {/* Row 3 */}
                    <Grid item xs={2}>
                        <Item>
                            <Typography variant="subtitle1">{t('label_use_yn')}</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={10}>
                        <FormControlLabel
                            label={t('label_use')}
                            control={
                                <Checkbox
                                    id="saveid"
                                    checked={boardDetail.useYn === 'Y'}
                                    onChange={(e) => setBoardDetail({ ...boardDetail, useYn: boardDetail.useYn === 'Y' ? 'N' : 'Y' })}
                                />
                            }
                        ></FormControlLabel>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                    </Grid>

                    <Grid item xs={6} textAlign="left">
                        <ListButton to={URL.CONTENT_FORM} />
                    </Grid>
                    <Grid item xs={6} textAlign="right">
                        <SaveButton
                            onClick={() => {
                                updateBoard();
                            }}
                            loading={isLoading}
                        />
                    </Grid>
                </Grid>
            </Typography>
        </MainCard>
    );
}

export default ContentSettingsEdit;
