import React, { useState } from 'react';
import { BackButton } from 'components/button/BackButton';
import MainCard from 'components/cards/MainCard';
import { Grid, Paper, Typography, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormInputAdminRole, ListButton, SaveButton } from 'components';
import { useCreateAdminMutation } from './AdminApi';
import URL from 'api/url';
import { Form, FormImgFileInput, FormInput, FormNumberInput, OnlyTextInput, Item, RadioButton } from 'components';
import { AdminValidate } from './AdminValidate';
import { AdminIdCheckDuplicate } from './AdminCheckDuplicate';
import { useCheckDuplicateMutation, useGetAdminRoleQuery } from './AdminApi';

const AdminCreate = ({ data, isLoading }) => {
    const { t } = useTranslation();
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [onCheck, checkResult] = useCheckDuplicateMutation();
    const roles = useGetAdminRoleQuery();

    return (
        <>
            <MainCard title={<BackButton text={t('act_create')} />}>
                <Typography variant="body2" component={Paper}>
                    <Form
                        validateSchema={AdminValidate}
                        mutation={useCreateAdminMutation}
                        list={URL.MEMBER_ADMIN}
                        check="username"
                        onCheck={onCheck}
                        seqs={{ seq: data?.content.seq }}
                    >
                        <input type="hidden" name="fileGroupSeq" value={data?.content.fileGroupSeq} />
                        <Grid container spacing={2}>
                            {/* Row 1 */}
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('email')} *</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                                <AdminIdCheckDuplicate
                                    onCheck={onCheck}
                                    checkResult={checkResult}
                                    id={data?.content.email}
                                    isLoading={isLoading}
                                />
                            </Grid>

                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('label_name')} *</Typography>
                                </Item>
                            </Grid>

                            <Grid item xs={4}>
                                <OnlyTextInput id="fullname" name="fullname" defaultValue={data?.content.fullname} loading={isLoading} />
                            </Grid>

                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('password')} *</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <FormInput
                                    aria-label="toggle password visibility"
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    defaultValue={data?.content.password}
                                    loading={isLoading}
                                    eye="true"
                                    showpassword={setShowPassword}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('verify_password')} *</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <FormInput
                                    id="verify_password"
                                    name="verify_password"
                                    type={showPassword2 ? 'text' : 'password'}
                                    defaultValue={data?.content.verify_password}
                                    loading={isLoading}
                                    eye="true"
                                    showpassword={setShowPassword2}
                                />
                            </Grid>

                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('admin_role')}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10}>
                                <Grid item xs={4.7}>
                                    <FormInputAdminRole id="authorCd" name="authorCd" roles={roles?.data?.content} loading={isLoading} />
                                </Grid>
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('phone_number')}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <FormNumberInput id="phone" name="phone" defaultValue={data?.content.phone} loading={isLoading} />
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('mobileNumber')} *</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <FormNumberInput id="mobile" name="mobile" defaultValue={data?.content.mobile} loading={isLoading} />
                            </Grid>

                            {/* Row 6 */}
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('profile_phto')}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <FormImgFileInput id="file" name="file" loading={isLoading} defaultValue={data?.content.imageAtch} />
                            </Grid>
                            <Grid item xs={2} style={{ height: '70px' }}>
                                <Item>
                                    <Typography variant="subtitle1">{t('responsibilities')}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <FormInput
                                    id="taskInCharge"
                                    name="taskInCharge"
                                    defaultValue={data?.content.taskInCharge}
                                    loading={isLoading}
                                />
                            </Grid>
                            {/* Row 7 */}
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="subtitle1">{t('label_use_yn')}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10}>
                                <RadioButton
                                    defaultValue={data?.content.useYn || 'Y'}
                                    name="useYn"
                                    data={[
                                        { code: 'Y', code_eng_nm: t('use') },
                                        { code: 'N', code_eng_nm: t('unused') }
                                    ]}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                            </Grid>
                            <Grid item xs={6} textAlign="left">
                                <ListButton to={URL.MEMBER_ADMIN} />
                            </Grid>
                            <Grid item xs={6} textAlign="right">
                                <SaveButton />
                            </Grid>
                        </Grid>
                    </Form>
                </Typography>
            </MainCard>
        </>
    );
};

export default AdminCreate;
