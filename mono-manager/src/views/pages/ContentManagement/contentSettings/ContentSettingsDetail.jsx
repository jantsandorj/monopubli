import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Divider, Grid, Paper, TextField, Typography } from '@mui/material';

import URL from 'api/url';
import MainCard from 'components/cards/MainCard';
import { ListButton, ModifyButton, DeleteButton, Item, RadioButton, ImageCard, FormInput } from 'components';
import { useDeleteContentSettingsMutation, useGetContentSettingQuery } from './ContentSettingsApi';

function ContentSettingsDetail() {
    const { t } = useTranslation();
    const { code } = useParams();
    const { data, isLoading } = useGetContentSettingQuery(code);

    function createMarkup(data) {
        return { __html: data };
    }

    return (
        <MainCard title={t('detail_page')}>
            <Typography variant="body2" component={Paper}>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            {/* Row 1 */}
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('label_created_by')}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10}>
                                <FormInput type="text" value={data?.data.createdBy} InputProps={{ readOnly: true }} loading={isLoading} />
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('label_title')} *</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10}>
                                <FormInput
                                    fullWidth
                                    type="text"
                                    value={data?.data.title}
                                    InputProps={{ readOnly: true }}
                                    loading={isLoading}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('label_name')}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10}>
                                <FormInput
                                    fullWidth
                                    type="text"
                                    value={data?.data.name}
                                    InputProps={{ readOnly: true }}
                                    loading={isLoading}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('label_code')} *</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10}>
                                <FormInput
                                    fullWidth
                                    type="text"
                                    value={data?.data.code}
                                    InputProps={{ readOnly: true }}
                                    loading={isLoading}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('category')}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10}>
                                {data?.data.contentType && (
                                    <RadioButton
                                        defaultValue={data?.data.contentType || 'HTML'}
                                        name="contentType"
                                        data={[
                                            { code: 'HTML', code_eng_nm: 'HTML' },
                                            { code: 'MENU', code_eng_nm: 'MENU' },
                                            { code: 'RAW', code_eng_nm: 'RAW' },
                                            { code: 'URL', code_eng_nm: 'URL' },
                                            { code: 'FILE', code_eng_nm: 'FILE' }
                                        ]}
                                        disabled={true}
                                    />
                                )}
                            </Grid>

                            {data?.data.contentType === 'URL' && (
                                <>
                                    <Grid item xs={2}>
                                        <Item>
                                            <Typography variant="subtitle1">{'url'} </Typography>
                                        </Item>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <TextField fullWidth type="text" value={data?.data.url} InputProps={{ readOnly: true }} />
                                    </Grid>
                                </>
                            )}

                            {(data?.data.contentType === 'HTML' || data?.data.contentType === 'MENU') && (
                                <>
                                    <Grid item xs={2}>
                                        <Item>
                                            <Typography variant="subtitle1">{t('body')} *</Typography>
                                        </Item>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <div dangerouslySetInnerHTML={createMarkup(data?.data.content)} />
                                    </Grid>
                                </>
                            )}
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('attachment_file')}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10}>
                                <Item>
                                    <ImageCard imgsrc={data?.data?.attachments} type="profileImg" />
                                </Item>
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('label_register_dt')}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10} alignItems="center" sx={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                                {data?.data.formattedCreateDate}
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('exposure_yn')}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10}>
                                {data?.data.useYn && (
                                    <RadioButton
                                        defaultValue={data?.data.useYn || 'Y'}
                                        name="useYn"
                                        data={[
                                            { code: 'Y', code_eng_nm: t('exposure') },
                                            { code: 'N', code_eng_nm: t('unexposed') }
                                        ]}
                                        disabled={true}
                                    />
                                )}
                            </Grid>

                            <Grid item xs={12}>
                                <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                            </Grid>

                            <Grid item xs={6} textAlign="left">
                                <ListButton to={URL.CONTENT_SETTINGS} />
                            </Grid>
                            <Grid item xs={6} textAlign="right">
                                <DeleteButton
                                    loading={isLoading}
                                    deleteFunc={useDeleteContentSettingsMutation}
                                    to="/manage/content/settings"
                                    code={code}
                                />
                                <ModifyButton to={URL.CONTENT_SETTINGS_MODIFY + `/${code}`} loading={isLoading} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Typography>
        </MainCard>
    );
}

export default ContentSettingsDetail;
