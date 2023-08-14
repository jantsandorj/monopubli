import React from 'react';
import { useParams } from 'react-router-dom';
import URL from 'api/url';
import MainCard from 'components/cards/MainCard';
import { Button, Divider, Box, FormControlLabel, Grid, OutlinedInput, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ListButton, ModifyButton, DeleteButton, RadioButton, Item } from 'components';
import { MemberImageCard } from 'components/cards/MemberImageCard';
import { useDeleteUserMutation, useGetUserQuery } from './UserApi';

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
            '&:nth-child(18)': {
                flexDirection: 'column',
                alignItems: 'flex-start'
            }
        },
        bgGrey: {
            backgroundColor: '#f5f5f5'
        }
    }
}

function UserDetail() {
    const { t } = useTranslation();
    const { code } = useParams();
    const { data, isLoading } = useGetUserQuery(code);

    return (
        <MainCard title={t('detail_page')}>
            <Typography variant="body2" component={Paper}>
                <Grid container>
                    <Grid item xs={12}>
                        <Item>
                            <Grid container>
                                {/* Row 1 */}
                                <Grid item xs={2} sx={[params.style.field, params.style.bgGrey]}>
                                    <Typography variant="subtitle1">{t('email')} *</Typography>
                                </Grid>
                                <Grid item xs={4} sx={[params.style.field]}>
                                    <TextField fullWidth value={data?.content.username} disabled />
                                </Grid>
                                <Grid item xs={2} sx={[params.style.field, params.style.bgGrey]}>
                                    <Typography variant="subtitle1">{t('label_name')} *</Typography>
                                </Grid>
                                <Grid item xs={4} sx={[params.style.field]}>
                                    <TextField fullWidth value={data?.content.fullname} disabled />
                                </Grid>

                                {/* Row 3 */}
                                <Grid item xs={2} sx={[params.style.field, params.style.bgGrey]}>
                                    <Typography variant="subtitle1">{t('gender')} *</Typography>
                                </Grid>
                                <Grid item xs={4} sx={[params.style.field]}>
                                    <OutlinedInput
                                        type="text"
                                        maxLength="255"
                                        sx={{ backgroundColor: 'white' }}
                                        className="userGender"
                                        disabled
                                        startAdornment={
                                            <RadioGroup>
                                                <ul style={{ display: 'flex', paddingInlineStart: '0px' }}>
                                                    <li style={{ listStyle: 'none' }}>
                                                        <FormControlLabel
                                                            disabled
                                                            checked={data?.content.gender === 'M' ? true : false}
                                                            value={code}
                                                            className="userGenderRadio"
                                                            control={<Radio color="default" />}
                                                            label={t('male')}
                                                        />
                                                        <FormControlLabel
                                                            disabled
                                                            checked={data?.content.gender === 'F' ? true : false}
                                                            className="userGenderRadio"
                                                            control={<Radio color="default" />}
                                                            label={t('female')}
                                                        />
                                                    </li>
                                                </ul>
                                            </RadioGroup>
                                        }
                                    />
                                </Grid>
                                <Grid item xs={2} sx={[params.style.field, params.style.bgGrey]}>
                                    <Typography variant="subtitle1">{t('date_of_birth')} *</Typography>
                                </Grid>
                                <Grid item xs={4} sx={[params.style.field]}>
                                    <TextField fullWidth type="text" value={data?.content.birthday} disabled />
                                </Grid>
                                {/* Row 4 */}
                                <Grid item xs={2} sx={[params.style.field, params.style.bgGrey]}>
                                    <Typography variant="subtitle1">{t('phone_number')} *</Typography>
                                </Grid>
                                <Grid item xs={4} sx={[params.style.field]}>
                                    <TextField fullWidth type="text" value={data?.content.phone} disabled />
                                </Grid>
                                <Grid item xs={2} sx={[params.style.field, params.style.bgGrey]}>
                                    <Typography variant="subtitle1">{t('mobileNumber')} *</Typography>
                                </Grid>
                                <Grid item xs={4} sx={[params.style.field]}>
                                    <TextField fullWidth type="text" value={data?.content.mobile} disabled />
                                </Grid>
                                {/* Row 5 */}
                                <Grid item xs={2} sx={[params.style.field, params.style.bgGrey]}>
                                    <Typography variant="subtitle1">{t('job')}</Typography>
                                </Grid>
                                <Grid item xs={4} sx={[params.style.field]}>
                                    <TextField fullWidth type="text" value={data?.content.job} disabled />
                                </Grid>
                                <Grid item xs={2} sx={[params.style.field, params.style.bgGrey]}>
                                    <Typography variant="subtitle1">{t('introduction')}</Typography>
                                </Grid>
                                <Grid item xs={4} sx={[params.style.field]}>
                                    <TextField fullWidth type="text" rows={7} value={data?.content.introduction} disabled />
                                </Grid>

                                {/* Row 6 */}
                                <Grid item xs={2} sx={[params.style.field, params.style.bgGrey]}>
                                    <Typography variant="subtitle1">{t('address')}</Typography>
                                </Grid>
                                <Grid item xs={10} alignItems="center" sx={[params.style.field]}>
                                    <Box>
                                        <TextField type="text" sx={{ width: '100px' }} value={data?.content.zip} disabled />
                                        <Button variant="contained" size="large" sx={{ marginTop: '4px', marginLeft: '10px' }} disabled>
                                            {t('zip_code')} {t('search')}
                                        </Button>
                                    </Box>
                                    <TextField type="text" fullWidth sx={{ marginTop: '8px', width: '35%' }} value={data?.content.addr} disabled />
                                    <TextField type="text" fullWidth sx={{ marginTop: '8px', width: '35%' }} value={data?.content.addrEtc} disabled />
                                </Grid>

                                {/* Row 7 */}
                                <Grid item xs={2} sx={[params.style.field, params.style.bgGrey]}>
                                    <Typography variant="subtitle1">{t('profile_phto')}</Typography>
                                </Grid>
                                <Grid item xs={10} sx={[params.style.field]}>
                                    <MemberImageCard imgsrc={data?.content?.imageAtch} type="file" />
                                </Grid>
                                {/* <Grid item xs={6}></Grid> */}
                                {/* Row 8 */}
                                <Grid item xs={2} sx={[params.style.field, params.style.bgGrey]}>
                                    <Typography variant="subtitle1">{t('label_use_yn')}</Typography>
                                </Grid>
                                <Grid item xs={10} sx={[params.style.field]}>
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
                                {/* <Grid item xs={12} >
                                    <Item>
                                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                                    </Item>
                                </Grid> */}
                                <Grid item xs={6} textAlign="left" sx={{marginTop: '10px'}}>
                                    <ListButton to={URL.MEMBER_USER} />
                                </Grid>
                                <Grid item xs={6} textAlign="right" sx={{marginTop: '10px'}}>
                                    <DeleteButton loading={isLoading} deleteFunc={useDeleteUserMutation} to="/member/user" code={code} />
                                    <ModifyButton to={URL.MEMBER_USER_MODIFY + `/${code}`} loading={isLoading} />
                                </Grid>
                            </Grid>
                        </Item>
                    </Grid>
                </Grid>
            </Typography>
        </MainCard>
    );
}

export default UserDetail;
