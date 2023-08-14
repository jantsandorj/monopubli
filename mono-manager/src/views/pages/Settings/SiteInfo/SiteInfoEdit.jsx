import React from 'react';
import { Divider, Grid, Typography, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { DaumInput, Form, FormTextArea, ImgFileInput, FormInput, FormNumberInput, Item } from 'components';
import URL from 'api/url';
import { SiteInfoValidate } from './SiteInfoValidate';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';

function SiteInfoEdit({ children, data, isLoading, ...props }) {
    const { t } = useTranslation();

    return (
        data && (
            <>
                <Form validateSchema={SiteInfoValidate} mutation={props.mutation} list={URL.SETTINGS_SITE_INFO} check="id">
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('site_name')} </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <FormInput
                                id="siteNm"
                                name="siteNm"
                                type="text"
                                placeholder={t('siteNmInput')}
                                defaultValue={data?.siteNm}
                                loading={isLoading}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('site_url')} </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <FormInput
                                id="siteUrl"
                                name="siteUrl"
                                type="text"
                                placeholder={t('siteUrlInput')}
                                defaultValue={data?.siteUrl}
                                loading={isLoading}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('contact_tel')} </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <FormNumberInput
                                id="contactTel"
                                name="contactTel"
                                placeholder={t('contactTelInput')}
                                defaultValue={data?.contactTel}
                                loading={isLoading}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('contact_email')} </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <FormInput
                                id="contactEmail"
                                name="contactEmail"
                                type="email"
                                placeholder={t('contactEmailInput')}
                                defaultValue={data?.contactEmail}
                                loading={isLoading}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('contact_mobile')} </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <FormNumberInput
                                id="contactMobile"
                                name="contactMobile"
                                placeholder={t('contactMobileInput')}
                                defaultValue={data?.contactMobile}
                                loading={isLoading}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('address')} </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <Grid item xs={12}>
                                <DaumInput data={data} />
                            </Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('copyright')} </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <FormInput
                                id="copyright"
                                name="copyright"
                                type="text"
                                placeholder={t('copyrightInput')}
                                defaultValue={data?.copyright}
                                loading={isLoading}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('fav_file_logo')} </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <Grid item xs={2}>
                                <ImgFileInput id="favLogo" name="favLogo" type="file" defaultValue={data?.atchFav} loading={isLoading} />
                            </Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('header_file_logo')} </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <Grid item xs={6}>
                                <ImgFileInput
                                    id="headerLogo"
                                    name="headerLogo"
                                    type="file"
                                    // singleImg={true}
                                    defaultValue={data?.atchHeader}
                                    loading={isLoading}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('footer_file_logo')} </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <Grid item xs={6}>
                                <ImgFileInput
                                    id="footerLogo"
                                    name="footerLogo"
                                    type="file"
                                    defaultValue={data?.atchFooter}
                                    loading={isLoading}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('footer_content')} </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <Grid item xs={12}>
                                <FormTextArea
                                    id="footerContent"
                                    name="footerContent"
                                    defaultValue={data?.footerContent}
                                    loading={isLoading}
                                />
                                <Item>
                                    <Chip icon={<PhoneInTalkOutlinedIcon fontSize="small" />} label="#contactTel " />
                                </Item>
                                <Item>
                                    <Chip icon={<PhoneIphoneOutlinedIcon fontSize="small" />} label="#contactMobile" />
                                </Item>
                                <Item>
                                    <Chip icon={<EmailOutlinedIcon fontSize="small" />} label="#contactEmail" />
                                </Item>
                                <Item>
                                    <Chip icon={<ImageOutlinedIcon fontSize="small" />} label="#atchFooterLogo" />
                                </Item>
                                <Item>
                                    <Chip icon={<CopyrightOutlinedIcon fontSize="small" />} label="#copyRight" />
                                </Item>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('terms_use')} </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <Grid item xs={12}>
                                <FormTextArea id="termsUse" name="termsUse" defaultValue={data?.termsUse} loading={isLoading} />
                            </Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('privacy_policy')} </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <Grid item xs={12}>
                                <FormTextArea
                                    id="privacyPolicy"
                                    name="privacyPolicy"
                                    defaultValue={data?.privacyPolicy}
                                    loading={isLoading}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                        </Grid>{' '}
                        {children}
                    </Grid>
                </Form>
            </>
        )
    );
}

export default SiteInfoEdit;
