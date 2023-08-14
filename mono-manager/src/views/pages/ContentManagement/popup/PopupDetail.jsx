import React from 'react';
import URL from 'api/url';
import MainCard from 'components/cards/MainCard';
import { Grid, Paper, Typography, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ListButton, ModifyButton, DeleteButton, Item, RadioButton, CheckBoxs, ImageCard } from 'components';
import { useParams } from 'react-router-dom';
import { useDeletePopupMutation, useGetPopupQuery } from './PopupApi';

function PopupDetail() {
    const { t } = useTranslation();
    const { code } = useParams();
    const { data, isLoading } = useGetPopupQuery(code);
    return (
        <MainCard title={t('detail_page')}>
            <Typography variant="body2" component={Paper}>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('popup_name')} *</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10}>
                                <TextField fullWidth type="text" value={data?.content.subject} InputProps={{ readOnly: true }} disabled />
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('media_type')} *</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    fullWidth
                                    type="text"
                                    value={data?.content.popupTypeNm}
                                    InputProps={{ readOnly: true }}
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={6}></Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('link_useYN')} *</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <RadioButton
                                    defaultValue={data?.content.linkYn}
                                    disabled
                                    data={[
                                        { code: 'Y', code_eng_nm: t('use') },
                                        { code: 'N', code_eng_nm: 'not use' }
                                    ]}
                                />
                                <CheckBoxs disabled def data={[{ name: t('new_window'), code_eng_nm: 'new_window' }]} />
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('link')}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <TextField fullWidth type="text" value={data?.content.linkUrl} InputProps={{ readOnly: true }} disabled />
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('pc_img')} *</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <ImageCard imgsrc={data?.content?.pcImageAtch} type="pc_img" loading={isLoading} />
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('mo_img')}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <ImageCard imgsrc={data?.content?.mobileImageAtch} type="mo_img" loading={isLoading} />
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('image_alt')} *</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10}>
                                <TextField fullWidth type="text" value={data?.content.imageDesc} InputProps={{ readOnly: true }} disabled />
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('exposure_location')} *</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row' }} alignItems="center">
                                <Typography sx={{ width: '80px' }}>TOP : </Typography>
                                <TextField value={data?.content.positionY} sx={{ mr: 1 }} InputProps={{ readOnly: true }} disabled />
                                px
                                <Typography sx={{ ml: 3, mr: 3 }}>/</Typography>
                                <Typography sx={{ width: '80px' }}>LEFT : </Typography>
                                <TextField value={data?.content.positionX} InputProps={{ readOnly: true }} disabled />
                                px
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('popup_size')} *</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row' }} alignItems="center" spacing={2}>
                                <Typography sx={{ width: '80px' }}>HEIGHT : </Typography>
                                <TextField value={data?.content.height} sx={{ mr: 1 }} InputProps={{ readOnly: true }} disabled />
                                px
                                <Typography sx={{ ml: 3, mr: 3 }}>/</Typography>
                                <Typography sx={{ width: '80px' }}>WIDTH : </Typography>
                                <TextField value={data?.content.width} sx={{ mr: 1 }} InputProps={{ readOnly: true }} disabled />
                                px
                            </Grid>

                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('ref_start_dt')} *</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <TextField fullWidth type="text" value={data?.content.startDate} InputProps={{ readOnly: true }} disabled />
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('ref_end_dt')}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <TextField fullWidth type="text" value={data?.content.endDate} InputProps={{ readOnly: true }} disabled />
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('exposure_seq')}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <TextField fullWidth type="text" value={data?.content.sortNo} InputProps={{ readOnly: true }} disabled />
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('label_use_yn')} *</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <RadioButton
                                    defaultValue={data?.content.useYn}
                                    disabled
                                    data={[
                                        { code: 'Y', code_eng_nm: t('use') },
                                        { code: 'N', code_eng_nm: 'not use' }
                                    ]}
                                />
                            </Grid>
                            <Grid item xs={6} textAlign="left">
                                <ListButton to={URL.CONTENT_POPUP} />
                            </Grid>
                            <Grid item xs={6} textAlign="right">
                                <DeleteButton loading={isLoading} deleteFunc={useDeletePopupMutation} to={URL.CONTENT_POPUP} code={code} />
                                <ModifyButton to={URL.CONTENT_POPUP_MODIFY + `/${code}`} loading={isLoading} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Typography>
        </MainCard>
    );
}

export default PopupDetail;
