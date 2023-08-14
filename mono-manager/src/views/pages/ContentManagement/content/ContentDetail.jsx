import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Api from 'api/requestApi';
import URL from 'api/url';
import MainCard from 'components/cards/MainCard';
import { styled } from '@mui/material/styles';
import { GroupButton, DeleteButton, ListButton, ModifyButton, RightSide } from 'components';
import { Button, Divider, Grid, Modal, Paper, Typography } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@mui/lab';
import { IconArrowLeft, IconCheck } from '@tabler/icons';
import { AVAIL_LANG } from 'config';
import { setModalOptionsOpen } from 'store/modalSlice';
import { Filter } from 'components/list';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24
};

function ContentDetail(props) {
    console.group('ContentDetail');
    console.log('------------------------------');
    console.log('ContentDetail [props] : ', props);
    const dispatch = useDispatch();

    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const seq = location.search.toString().split('seq=')[1].toString().split('&')[0];

    const [boardDetail, setBoardDetail] = useState(null);

    const [show, setShow] = useState(false);
    const showConfirmation2delete = () => setShow(true);
    const hideConfirmation2delete = () => setShow(false);

    const [tabLang, setTabLang] = React.useState(AVAIL_LANG[0].code); //  tab changer, language tab
    const handleTabChange = (event, newValue) => {
        setTabLang(newValue);
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

        try {
            //  setting json datas
            response.data.title = JSON.parse(response.data.title);
            response.data.subject = JSON.parse(response.data.subject);
            response.data.contentJson = JSON.parse(response.data.contentJson);

            console.log('title: ===================', response.data);
        } catch (error) {
            dispatch(
                setModalOptionsOpen({
                    type: 'error',
                    onOpen: true,
                    description: t('error.failed')
                })
            );
        }

        setBoardDetail(response.data);
    };

    const ask2delete = async () => {
        showConfirmation2delete();
    };

    const deleteContent = async () => {
        const deleteBoardURL = '/api/content/delete';
        const formData = new FormData();
        formData.append('seq', seq);

        let queryString = new URLSearchParams(formData).toString();

        const requestOptions = {
            method: 'DELETE',
            headers: {}
        };

        setIsLoading(true);
        let response = await Api.requestAPI(deleteBoardURL + (queryString !== '' ? '?' + queryString : ''), requestOptions);
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
            navigate(URL.CONTENT);
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
        retrieveDetail();
        return function () {};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.groupEnd('ContentDetail');

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

                    {t('act_detail')}
                </div>
            }
        >
            <Typography variant="body2" component={Paper}>
                <Grid container>
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
                        <Tabs value={tabLang} onChange={handleTabChange} centered>
                            {AVAIL_LANG.map((lang, index) => (
                                <Tab key={index} value={lang.code} label={lang.name + ' /' + lang.code + '/'} />
                            ))}
                        </Tabs>
                    </Grid>
                    {/* Row 1 title */}
                    <Grid item xs={2}>
                        <Item>
                            <Typography variant="subtitle1">{t('label_title')} *</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            {boardDetail?.title === null
                                ? ''
                                : AVAIL_LANG.map((lang) => (
                                      <div fullWidth style={{ display: tabLang !== lang.code ? 'none' : 'inherit' }}>
                                          {boardDetail?.title?.[lang.code]}
                                      </div>
                                  ))}
                        </Item>
                    </Grid>
                    <Grid item xs={1}>
                        <Item>
                            <Typography variant="subtitle1">{t('label_code')}</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>{boardDetail?.csCode}</Item>
                    </Grid>
                    {/* Row 2 subject */}
                    <Grid item xs={2}>
                        <Item>
                            <Typography variant="subtitle1">{t('label_subject')} *</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={10}>
                        <Item>
                            {boardDetail?.subject === null
                                ? ''
                                : AVAIL_LANG.map((lang) => (
                                      <div fullWidth style={{ display: tabLang !== lang.code ? 'none' : 'inherit' }}>
                                          {boardDetail?.subject?.[lang.code]}
                                      </div>
                                  ))}
                        </Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                    </Grid>
                    {/* Custom fields */}
                    {boardDetail?.contentJson.map((field, index) => (
                        <>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">
                                        {field.title[tabLang]} {field.required ? '*' : ''}
                                    </Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <Item>
                                    {AVAIL_LANG.map((lang) => (
                                        <div fullWidth style={{ display: tabLang !== lang.code ? 'none' : 'inherit' }}>
                                            {field?.value?.[lang.code]}
                                        </div>
                                    ))}
                                </Item>
                            </Grid>
                        </>
                    ))}
                    <Grid item xs={12} marginBottom={2}>
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                    </Grid>
                    <GroupButton>
                        <ListButton to={URL.CONTENT} />
                        <RightSide>
                            <DeleteButton
                                loading={isLoading}
                                onClick={() => {
                                    ask2delete();
                                }}
                            />
                            <ModifyButton
                                to={URL.CONTENT_MODIFY}
                                state={{
                                    seq: boardDetail?.seq
                                }}
                                loading={isLoading}
                            />
                        </RightSide>
                    </GroupButton>
                </Grid>
                {/* Confirmation modal for deletion */}
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
                                onClick={() => {
                                    deleteContent();
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
                                onClick={() => {
                                    hideConfirmation2delete();
                                }}
                            >
                                {t('act_cancel')}
                            </Button>
                        </Grid>
                    </Filter>
                </Modal>
            </Typography>
        </MainCard>
    );
}

export default ContentDetail;
