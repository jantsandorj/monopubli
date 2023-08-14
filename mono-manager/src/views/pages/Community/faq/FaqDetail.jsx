import React from 'react';
import { useParams } from 'react-router-dom';
import URL from 'api/url';
import MainCard from 'components/cards/MainCard';
import { Divider, Grid, Paper, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ListButton, ModifyButton, DeleteButton, Item } from 'components';
import { useDeleteFaqMutation, useGetFaqQuery } from './FaqApi';

function FaqDetail() {
    const { t } = useTranslation();
    const { code } = useParams();
    const { data, isLoading } = useGetFaqQuery(code);

    return (
        <MainCard title={t('detail_page')}>
            <Typography variant="body2" component={Paper}>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('label_created_by')} *</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10}>
                                <TextField value={data?.data?.question || ''} disabled />
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('label_title')} *</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10}>
                                <TextField fullWidth value={data?.data.question || ''} disabled />
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('category')}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10}>
                                <TextField value={data?.data.categoryCd || ''} disabled />
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('body')} *</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10}>
                                <TextField fullWidth multiline rows={7} value={data?.data.answer?.replace(/<[^>]+>/g, '') || ''} disabled />
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('attachment_file')}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <Item>
                                    <Typography variant="subtitle1">{data?.data.attachment_file || ''}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={6}></Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('reser')}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10} alignItems="center">
                                <TextField value={data?.data.formattedCreateDate || ''} disabled />
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('exposure_yn')}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10}>
                                <Item>
                                    <Typography variant="subtitle1">
                                        {data?.data.exposureYn === 'Y' ? `${t('exposure')}` : `${t('unexposed')}`}
                                    </Typography>
                                </Item>
                            </Grid>

                            <Grid item xs={12}>
                                <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                            </Grid>
                            <Grid item xs={6} textAlign="left">
                                <ListButton to={URL.COMMUNITY_FAQ} />
                            </Grid>
                            <Grid item xs={6} textAlign="right">
                                <DeleteButton loading={isLoading} deleteFunc={useDeleteFaqMutation} to="/community/faq" code={code} />
                                <ModifyButton to={URL.COMMUNITY_FAQ_MODIFY + `/${code}`} loading={isLoading} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Typography>
        </MainCard>
    );
}

export default FaqDetail;
