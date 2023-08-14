import React from 'react';
import { useParams } from 'react-router-dom';
import { Divider, Grid, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import URL from 'api/url';
import { useGetAdminQuery } from './AdminApi';
import MainCard from 'components/cards/MainCard';
import { FormLabelStyle } from 'components/button/style';
import { MemberImageCard } from 'components/cards/MemberImageCard';
import { useDeleteAdminMutation } from 'views/pages/MemberManagement/Admin/AdminApi';
import { ListButton, ModifyButton, DeleteButton, RadioButton, Item, FormInput } from 'components';

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
            marginLeft: '-1px'
        },
        bgGrey: {
            backgroundColor: '#f5f5f5'
        }
    }
}

function AdminDetail() {
    const { t } = useTranslation();
    const { code } = useParams();
    const { data, isLoading } = useGetAdminQuery(code);

    return (
        <MainCard title={t('detail_page')}>
            <Typography variant="body2" component={Paper}>
                <Grid container>
                    <Grid item xs={12} spacing={2}>
                        <Grid container>        
                            <Grid item xs={2} sx={[params.style.field, params.style.bgGrey]}>
                                <Typography variant="subtitle1">{t('email')} *</Typography>
                            </Grid>
                            <Grid item xs={4} sx={params.style.field}>
                                <FormInput fullWidth sx={params.style.noBorder} value={data?.content.username} disabled loading={isLoading} />
                            </Grid>
                            <Grid item xs={2} sx={[params.style.field, params.style.bgGrey]}>
                                <Typography variant="subtitle1">{t('label_name')} *</Typography>
                            </Grid>
                            <Grid item xs={4} sx={params.style.field}>
                                <FormInput fullWidth value={data?.content.fullname} disabled loading={isLoading} />
                            </Grid>
                            <Grid item xs={2} sx={[params.style.field, params.style.bgGrey]}>
                                <Typography variant="subtitle1">{t('admin_role')}</Typography>
                            </Grid>
                            <Grid item xs={4} sx={params.style.field}>
                                <FormInput fullWidth value={data?.content.authorCd} disabled loading={isLoading} />
                            </Grid>
                            <Grid item xs={2} sx={[params.style.field, params.style.bgGrey]}>
                                <Typography variant="subtitle1">{t('phone_number')}</Typography>
                            </Grid>
                            <Grid item xs={4} sx={params.style.field}>
                                <FormInput fullWidth value={data?.content.phone} disabled loading={isLoading} />
                            </Grid>
                            <Grid item xs={2} sx={[params.style.field, params.style.bgGrey]}>
                                <Typography variant="subtitle1">{t('mobileNumber')} *</Typography>
                            </Grid>
                            <Grid item xs={4} sx={params.style.field}>
                                <FormInput fullWidth value={data?.content.mobile} disabled loading={isLoading} />
                            </Grid>
                            <Grid item xs={2} sx={[params.style.field, params.style.bgGrey]}>
                                <Typography variant="subtitle1">{t('responsibilities')}</Typography>
                            </Grid>
                            <Grid item xs={4} sx={params.style.field}>
                                <FormInput fullWidth value={data?.content.taskInCharge} disabled loading={isLoading} />
                            </Grid>
                            <Grid item xs={2} sx={[params.style.field, params.style.bgGrey]}>
                                <Typography variant="subtitle1">{t('profile_phto')}</Typography>
                            </Grid>

                            <Grid item xs={4} sx={params.style.field}>
                                <MemberImageCard imgsrc={data?.content?.imageAtch} type="imageAtch" />
                            </Grid>

                            <Grid item xs={2} sx={[params.style.field, params.style.bgGrey]}>
                                <Typography variant="subtitle1">{t('label_use_yn')}</Typography>
                            </Grid>
                            <Grid item xs={4} sx={params.style.field}>
                                {data?.content.useYn && (
                                    <RadioButton
                                        defaultValue={data?.content.useYn}
                                        disabled
                                        data={[
                                            { code: 'Y', code_eng_nm: t('use') },
                                            { code: 'N', code_eng_nm: t('unused') }
                                        ]}
                                    />
                                )}
                            </Grid>
                            {/* <Grid item xs={12}>
                                <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                            </Grid> */}

                            <Grid item xs={6} textAlign="left" sx={{marginTop: '10px'}}>
                                <ListButton to={URL.MEMBER_ADMIN} />
                            </Grid>
                            <Grid item xs={6} textAlign="right" sx={{marginTop: '10px'}}>
                                <DeleteButton loading={isLoading} deleteFunc={useDeleteAdminMutation} to={URL.MEMBER_ADMIN} code={code} />
                                <ModifyButton to={URL.MEMBER_ADMIN_MODIFY + `/${code}`} loading={isLoading} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Typography>
        </MainCard>
    );
}

export default AdminDetail;
