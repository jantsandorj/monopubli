import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Divider, Grid, Typography } from '@mui/material';
import { Form, FormInput, Item, RadioButton, FormImgFileInput, FormTextArea, User, MenuModal } from 'components';

import URL from 'api/url';
import { ContentSettingsValidate } from './ContentSettingsValidate';

function ContentSettingsEdit({ children, data, isLoading, ...props }) {
    const [showHiddenInput, setshowHiddenInput] = useState({ type: data?.data.contentType || 'HTML' });
    const { t } = useTranslation();
    const [selectedMenuSeq, setSelectedMenuSeq] = useState(null);

    const changeRadio = (e) => {
        setshowHiddenInput({ type: e.target.value });
    };

    return (
        <Form
            validateSchema={ContentSettingsValidate}
            mutation={props.mutation}
            list={URL.CONTENT_SETTINGS}
            check="id"
            numbers={['sortNo']}
            seqs={{
                seq: data?.data.seq,
                mobileFileGroupSeq: data?.content?.mobileFileGroupSeq,
                pcFileGroupSeq: data?.content?.pcFileGroupSeq
            }}
        >
            <input name="menuSeq" type="hidden" value={selectedMenuSeq} />
            <Grid container spacing={2}>
                {/* Row 1 */}
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('label_created_by')}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10}>
                    <Item>
                        <User name="username" />
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('label_title')} *</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10}>
                    <FormInput id="title" name="title" defaultValue={data?.data.title} loading={isLoading} />
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('label_name')}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10}>
                    <FormInput id="name" name="name" defaultValue={data?.data.name} loading={isLoading} />
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('label_code')} *</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10}>
                    <FormInput id="code" name="code" defaultValue={data?.data.code} loading={isLoading} />
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('category')}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10}>
                    <RadioButton
                        loading={isLoading}
                        defaultValue={data?.data.contentType || 'HTML'}
                        name="contentType"
                        onChangeRadio={(e) => changeRadio(e)}
                        data={[
                            { code: 'HTML', code_eng_nm: 'HTML' },
                            { code: 'MENU', code_eng_nm: 'MENU' },
                            { code: 'RAW', code_eng_nm: 'RAW' },
                            { code: 'URL', code_eng_nm: 'URL' },
                            { code: 'FILE', code_eng_nm: 'FILE' }
                        ]}
                    />
                </Grid>
                {showHiddenInput.type === 'MENU' && (
                    <>
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('label_menu_auth')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10}>
                            <MenuModal setSelectedMenuSeq={setSelectedMenuSeq} />
                        </Grid>
                    </>
                )}

                {showHiddenInput.type === 'URL' && (
                    <>
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{'url'} </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10}>
                            <FormInput id="url" name="url" defaultValue={data?.data.url} loading={isLoading} />
                        </Grid>
                    </>
                )}

                {(showHiddenInput.type === 'HTML' || showHiddenInput.type === 'MENU') && (
                    <>
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('body')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10}>
                            {data?.data?.content && (
                                <FormTextArea id="content" name="content" defaultValue={data?.data.content} loading={isLoading} />
                            )}
                        </Grid>
                    </>
                )}

                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('attachment_file')}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <FormImgFileInput
                        id="files"
                        name="files"
                        loading={isLoading}
                        defaultValue={data?.data.attachments}
                        inputProps={{ accept: 'image/png, image/gif, image/jpeg, image/jpg, application/pdf, application/xlsx' }}
                    />
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('label_register_dt')}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10} alignItems="center" sx={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`}
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('exposure_yn')}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10}>
                    <RadioButton
                        defaultValue={data?.data.useYn || 'Y'}
                        name="useYn"
                        data={[
                            { code: 'Y', code_eng_nm: t('exposure') },
                            { code: 'N', code_eng_nm: t('unexposed') }
                        ]}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                </Grid>
                {children}
            </Grid>
        </Form>
    );
}

export default ContentSettingsEdit;
