import React from 'react';
import { BackButton } from 'components/button/BackButton';
import MainCard from 'components/cards/MainCard';
import { Grid, Paper, Typography, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ListButton, UpdateButton } from 'components';
import { useGetUserQuery, useUpdateUserMutation } from './UserApi';
import { useParams } from 'react-router';
import {
    DaumInput,
    Form,
    FormDateInput,
    FormImgFileInput,
    FormInput,
    FormNumberInput,
    Item,
    RadioButton,
    RadioButtonGender
} from 'components';
import { useCheckDuplicateMutation } from './UserApi';
import { UserValidate } from './UserValidate';
import URL from 'api/url';

const UserUpdate = () => {
    const { t } = useTranslation();
    const [onCheck, checkResult] = useCheckDuplicateMutation();
    const { code } = useParams();
    const { data, isLoading } = useGetUserQuery(code);

    return (
        <MainCard title={<BackButton text={t('act_modify')} />}>
            <Typography variant="body2" component={Paper}>
                <Form
                    validateSchema={UserValidate}
                    mutation={useUpdateUserMutation}
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
                                <Typography variant="subtitle1">{t('id')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <FormInput
                                fullWidth
                                id="username"
                                name="username"
                                defaultValue={data?.content.username}
                                disabled
                                loading={isLoading}
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
                        {/* Row 3 */}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('gender')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <RadioButtonGender
                                defaultValue={data?.content.gender}
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
                            <FormDateInput id="birthday" name="birthday" defaultValue={data?.content.birthday} />
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
                            <UpdateButton />
                        </Grid>
                    </Grid>
                </Form>
            </Typography>
        </MainCard>
    );
};

export default UserUpdate;
