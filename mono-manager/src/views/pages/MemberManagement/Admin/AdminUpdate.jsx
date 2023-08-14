import React, { useState } from 'react';
import { BackButton } from 'components/button/BackButton';
import MainCard from 'components/cards/MainCard';
import { Grid, Paper, Typography, Divider, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { ListButton, UpdateButton } from 'components';
import { useGetAdminQuery, useUpdateAdminMutation } from './AdminApi';
import { useParams } from 'react-router';
import URL from 'api/url';

import { Form, FormImgFileInput, FormInput, FormNumberInput, OnlyTextInput, Item, RadioButton } from 'components';
import { AdminValidate } from './AdminValidate';
import { useCheckDuplicateMutation, useGetAdminRoleQuery } from './AdminApi';

const params = {
    style: {
        field: {
            border: '1px solid #dee2e6',
            padding: '8px 8px',
            display: 'flex',
            alignItems: 'center',
            '&:nth-child(n+5)': {
                marginTop: '-1px'
            },
            '&:nth-child(12)': {
                flexDirection: 'column'
            },
        },
        bgGrey: {
            backgroundColor: '#f5f5f5'
        }
    }
}

const AdminUpdate = () => {
    const { t } = useTranslation();
    const { code } = useParams();
    const { data, isLoading } = useGetAdminQuery(code);

    const [onCheck] = useCheckDuplicateMutation();
    const roles = useGetAdminRoleQuery();
    const [role, setRole] = useState(data?.content.authorCd);
    const handleChange = (event) => {
        setRole(event.target.value);
    };
    return (
        <MainCard title={<BackButton text={t('act_modify')} />}>
            <Typography variant="body2" component={Paper}>
                <Form
                    validateSchema={AdminValidate}
                    mutation={useUpdateAdminMutation}
                    list={URL.MEMBER_ADMIN}
                    check="username"
                    onCheck={onCheck}
                    seqs={{ seq: data?.content.seq }}
                >
                    <input type="hidden" name="fileGroupSeq" value={data?.content.fileGroupSeq} />
                    <Grid container>
                        {/* Row 1 */}
                        <Grid item xs={2} sx={[params.style.field, params.style.bgGrey]}>
                            <Typography variant="subtitle1">{t('email')} *</Typography>
                        </Grid>
                        <Grid item xs={4} sx={[params.style.field]}>
                            <FormInput
                                fullWidth
                                id="username"
                                name="username"
                                defaultValue={data?.content.username}
                                disabled
                                loading={isLoading}
                            />
                        </Grid>

                        <Grid item xs={2} sx={[params.style.field, params.style.bgGrey]}>
                            <Typography variant="subtitle1">{t('label_name')} *</Typography>
                        </Grid>

                        <Grid item xs={4} sx={[params.style.field]}>
                            <OnlyTextInput id="fullname" name="fullname" defaultValue={data?.content.fullname} loading={isLoading} />
                        </Grid>
                        <Grid item xs={2} sx={[params.style.field, params.style.bgGrey]}>
                            <Typography variant="subtitle1">{t('Role')}</Typography>
                        </Grid>
                        <Grid item xs={10} sx={[params.style.field]}>
                            <Grid item xs={4.7}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"> {t('Role')}</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        name="authorCd"
                                        label="Role"
                                        defaultValue={role}
                                        value={role}
                                        onChange={handleChange}
                                    >
                                        {roles?.data?.content?.map((item, index) => (
                                            <MenuItem key={index} value={item.authorCd}>
                                                {item.authorNm}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={2} sx={[params.style.field, params.style.bgGrey]}>
                            <Typography variant="subtitle1">{t('phone_number')}</Typography>
                        </Grid>
                        <Grid item xs={4} sx={[params.style.field]}>
                            <FormNumberInput id="phone" name="phone" defaultValue={data?.content.phone} loading={isLoading} />
                        </Grid>
                        <Grid item xs={2} sx={[params.style.field, params.style.bgGrey]}>
                            <Typography variant="subtitle1">{t('mobileNumber')} *</Typography>
                        </Grid>
                        <Grid item xs={4} sx={[params.style.field]}>
                            <FormNumberInput id="mobile" name="mobile" defaultValue={data?.content.mobile} loading={isLoading} />
                        </Grid>

                        {/* Row 6 */}
                        <Grid item xs={2} sx={[params.style.field, params.style.bgGrey]}>
                            <Typography variant="subtitle1">{t('profile_phto')}</Typography>
                        </Grid>
                        <Grid item xs={4} sx={[params.style.field]}>
                            <FormImgFileInput id="file" name="file" loading={isLoading} defaultValue={data?.content.imageAtch} />
                        </Grid>
                        <Grid item xs={2} sx={[params.style.field, params.style.bgGrey]}>
                            <Typography variant="subtitle1">{t('responsibilities')}</Typography>
                        </Grid>
                        <Grid item xs={4} sx={[params.style.field]}>
                            <FormInput
                                id="taskInCharge"
                                name="taskInCharge"
                                defaultValue={data?.content.taskInCharge}
                                loading={isLoading}
                            />
                        </Grid>
                        {/* Row 7 */}
                        <Grid item xs={2} sx={[params.style.field, params.style.bgGrey]}>
                            <Typography variant="subtitle1">{t('label_use_yn')}</Typography>
                        </Grid>
                        <Grid item xs={10} sx={[params.style.field]}>
                            <RadioButton
                                defaultValue={data?.content.useYn || 'Y'}
                                name="useYn"
                                data={[
                                    { code: 'Y', code_eng_nm: t('use') },
                                    { code: 'N', code_eng_nm: t('unused') }
                                ]}
                            />
                        </Grid>
                        {/* <Grid item xs={12}>
                            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                        </Grid> */}
                        <Grid item xs={6} textAlign="left" sx={{marginTop: '10px'}}>
                            <ListButton to={URL.MEMBER_ADMIN} />
                        </Grid>
                        <Grid item xs={6} textAlign="right" sx={{marginTop: '10px'}}>
                            <UpdateButton />
                        </Grid>
                    </Grid>
                </Form>
            </Typography>
        </MainCard>
    );
};

export default AdminUpdate;
