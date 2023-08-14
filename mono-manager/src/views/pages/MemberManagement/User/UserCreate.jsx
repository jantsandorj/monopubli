import React, { useState } from 'react';
import { BackButton } from 'components/button/BackButton';
import MainCard from 'components/cards/MainCard';
import { RadioButtonGender } from 'components/button/RadioButton';
import { Grid, Paper, Divider, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ListButton, SaveButton } from 'components';
import { useCreateUserMutation } from './UserApi';
import URL from 'api/url';

import { DaumInput, Form, FormDateInputUser, FormImgFileInput, FormInput, FormNumberInput, Item, RadioButton } from 'components';
import { useCheckDuplicateMutation } from './UserApi';
import { UserIdCheckDuplicate } from './UserCheckDuplicate';
import { UserValidate } from './UserValidate';

const UserCreate = ({ data, isLoading }) => {
    const { t } = useTranslation();
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [onCheck, checkResult] = useCheckDuplicateMutation();

    return (
        <MainCard title={<BackButton text={t('act_create')} />}>
            <Typography variant="body2" component={Paper}>
                <Form
                    validateSchema={UserValidate}
                    mutation={useCreateUserMutation}
                    list={URL.MEMBER_USER}
                    check="username"
                    onCheck={onCheck}
                    seqs={{
                        seq: data?.content.seq
                    }}
                >
                    <input
                        type="hidden"
                        name="fileGroupSeq"
                        value={data?.content.fileGroupSeq === undefined ? 0 : data?.content.fileGroupSeq}
                    />
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('email')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <UserIdCheckDuplicate
                                name="username"
                                onCheck={onCheck}
                                checkResult={checkResult}
                                id={data?.content.username}
                                isLoading={isLoading}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('label_name')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <FormInput id="fullname" name="fullname" defaultValue={data?.content.fullname} loading={isLoading} />
                        </Grid>

                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('password')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <FormInput
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

                        {/* Row 3 */}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('gender')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <RadioButtonGender
                                defaultValue={data?.content.gender}
                                id="gender"
                                name="gender"
                                data={[
                                    { code: 'M', code_eng_nm: t('male') },
                                    { code: 'F', code_eng_nm: t('female') }
                                ]}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('date_of_birth')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <FormDateInputUser id="birthday" name="birthday" label="Select date" />
                        </Grid>
                        {/* Row 4 */}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('phone_number')} *</Typography>
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
                        {/* Row 5 */}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('address')}</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4} alignItems="center">
                            <DaumInput data={data?.content} />
                        </Grid>
                        <Grid item xs={2}>
                            <Item className="inputTitle">
                                <Typography variant="subtitle1">{t('job')}*</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <FormInput id="job" name="job" defaultValue={data?.content.job} loading={isLoading} />
                        </Grid>

                        {/* Row 6 */}

                        {/* Row 7 */}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('profile_phto')}</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <FormImgFileInput id="file" name="file" loading={isLoading} defaultValue={data?.content.imageAtch} />
                        </Grid>
                        <Grid item xs={2}>
                            <Item className="inputTitle">
                                <Typography variant="subtitle1">{t('introduction')}*</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <FormInput
                                id="introduction"
                                name="introduction"
                                defaultValue={data?.content.introduction}
                                loading={isLoading}
                            />
                        </Grid>
                        <Grid item xs={12}></Grid>
                        {/* Row 8 */}
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
                            <ListButton to={URL.MEMBER_USER} />
                        </Grid>
                        <Grid item xs={6} textAlign="right">
                            <SaveButton />
                        </Grid>
                    </Grid>
                </Form>
            </Typography>
        </MainCard>
    );
};

export default UserCreate;
