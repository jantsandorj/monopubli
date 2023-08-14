import React from 'react';
import { Grid, Typography, Input } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Form, FormInput, FormNumberInput, Item, FormTextAreaLabel } from 'components';

import URL from 'api/url';
import { AccountSettingsValidate } from './AccountSettingsValidate';
import { useState } from 'react';

function AccountSettingsEdit({ children, data, mutation, ...props }) {
    const { t } = useTranslation();
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    return (
        <>
            <Form validateSchema={AccountSettingsValidate} mutation={mutation} list={URL.ACCOUNT_SETTINGS}>
                {data && (
                    <Grid container spacing={2}>
                        <Input id="seq" name="seq" type="hidden" defaultValue={data?.content.seq} />
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('email')} </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <FormInput id="email" name="email" type="email" placeholder={''} disabled defaultValue={data?.content.email} />
                        </Grid>
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('label_name')} </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <FormInput maxLength={750} id="fullname" name="fullname" type="text" defaultValue={data?.content.fullname} />
                        </Grid>
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('password')} </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <FormInput
                                aria-label="toggle password visibility"
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                defaultValue={data?.content.password}
                                eye="true"
                                showpassword={setShowPassword}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('verify_password')} </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <FormInput
                                id="verify_password"
                                name="verify_password"
                                type={showPassword2 ? 'text' : 'password'}
                                defaultValue={data?.content.verify_password}
                                eye="true"
                                showpassword={setShowPassword2}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('mobileNumber')} </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <FormNumberInput maxLength={20} id="mobile" name="mobile" defaultValue={data?.content.mobile} />
                        </Grid>
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('phone_number')} </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <FormNumberInput maxLength={20} id="phone" name="phone" defaultValue={data?.content.phone} />
                        </Grid>
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('responsibilities')} </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <FormTextAreaLabel
                                id="taskInCharge"
                                name="taskInCharge"
                                type="text"
                                defaultValue={data?.content.taskInCharge}
                            />
                        </Grid>

                        {children}
                    </Grid>
                )}
            </Form>
        </>
    );
}

export default AccountSettingsEdit;
