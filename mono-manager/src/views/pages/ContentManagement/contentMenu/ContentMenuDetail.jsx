import React from 'react';
import { useParams } from 'react-router-dom';
import URL from 'api/url';
import MainCard from 'components/cards/MainCard';
import { ListButton, ModifyButton, Item, RadioButton } from 'components';
import { Divider, Grid, Paper, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useGetContentMenuQuery } from './ContentMenuApi';

function ContentMenusDetail() {
    const { t } = useTranslation();
    const { code } = useParams();
    const { data, isLoading } = useGetContentMenuQuery(code);

    return (
        <MainCard title={t('detail_page')}>
            <Typography variant="body2" component={Paper}>
                <Grid container>
                    <Grid xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('menu_id')} *</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10}>
                                <TextField disabled type="text" value={data?.content?.menuId} InputProps={{ readOnly: true }} />
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('menu_name')}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10}>
                                <TextField disabled fullWidth type="text" value={data?.content?.menuName} InputProps={{ readOnly: true }} />
                            </Grid>

                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('content_desc')} </Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                                <TextField
                                    fullWidth
                                    multiline
                                    value={data?.content?.content?.replace(/<[^>]+>/g, '')}
                                    rows={7}
                                    InputProps={{ readOnly: true }}
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('label_created_date')}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10}>
                                <TextField disabled type="text" value={data?.content?.createdDate} InputProps={{ readOnly: true }} />
                            </Grid>

                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('Use yn')}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10}>
                                <RadioButton
                                    defaultValue={data?.content?.useYn}
                                    disabled
                                    data={[
                                        { code: 'Y', code_eng_nm: t('use') },
                                        { code: 'N', code_eng_nm: t('unused') }
                                    ]}
                                />
                            </Grid>

                            <Grid xs={12}>
                                <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                            </Grid>

                            <Grid item xs={6} textAlign="left">
                                <ListButton to={URL.CONTENT_MENU} />
                            </Grid>
                            <Grid item xs={6} textAlign="right">
                                <ModifyButton to={URL.CONTENT_MENU_MODIFY + `/${code}`} loading={isLoading} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Typography>
        </MainCard>
    );
}

export default ContentMenusDetail;
