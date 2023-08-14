import React from 'react';
import MainCard from 'components/cards/MainCard';
import { Divider, Grid, Typography, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Form } from 'components';
import URL from 'api/url';
import SystemSettingRow from './SystemSettingRow';
import { SystemSettingValidate } from './SystemSettingValidate';

function SystemSettingEdit({ children, data, isLoading, ...props }) {
    const { t } = useTranslation();
    return (
        data && (
            <Form validateSchema={SystemSettingValidate} mutation={props.mutation} list={URL.SETTINGS_SYSTEM_SETTING} check="id">
                <MainCard title={t('system_setting')}>
                    <Typography variant="body2" component={Paper}>
                        <Grid container>
                            {/* 1 */}
                            <SystemSettingRow
                                title={t('admin_session_time')}
                                radioData={data?.adminSessionTimeYn}
                                radioName={'adminSessionTimeYn'}
                                inputData={data?.adminSessionTime}
                                inputName={'adminSessionTime'}
                                inputSubName={t('minute')}
                                inputType="number"
                                isLoading={isLoading}
                                placeholder="60"
                            />
                            {/* 2 */}
                            <SystemSettingRow
                                title={t('admin_passchange_cycle')}
                                radioData={data?.adminPasschangeCycleYn}
                                radioName={'adminPasschangeCycleYn'}
                                inputData={data?.adminPasschangeCycle}
                                inputName={'adminPasschangeCycle'}
                                inputSubName={t('month')}
                                inputType="number"
                                isLoading={isLoading}
                                placeholder="30"
                            />
                            {/* 3 */}
                            <SystemSettingRow
                                title={t('admin_access_ip')}
                                radioData={data?.adminAccessIpYn}
                                radioName={'adminAccessIpYn'}
                                inputData={data?.adminAccessIp}
                                inputName={'adminAccessIp'}
                                inputSubName=""
                                inputType="ip"
                                isLoading={isLoading}
                                placeholder="202.168.0.122,135,123456789"
                            />
                            {/* 4 */}
                            <SystemSettingRow
                                title={t('user_session_time')}
                                radioData={data?.userSessionTimeYn}
                                radioName={'userSessionTimeYn'}
                                inputData={data?.userSessionTime}
                                inputName={'userSessionTime'}
                                inputSubName={t('minute')}
                                inputType="number"
                                isLoading={isLoading}
                                placeholder="60"
                            />
                            {/* 5 */}
                            <SystemSettingRow
                                title={t('user_passchange_cycle')}
                                radioData={data?.userPasschangeCycleYn}
                                radioName={'userPasschangeCycleYn'}
                                inputData={data?.userPasschangeCycle}
                                inputName={'userPasschangeCycle'}
                                inputSubName={t('month')}
                                inputType="number"
                                isLoading={isLoading}
                                placeholder="30"
                            />
                        </Grid>
                    </Typography>
                </MainCard>
                <MainCard title={t('SNS_login')} style={{ marginTop: '20px' }}>
                    <Typography variant="body2" component={Paper}>
                        <Grid container>
                            {/* 1 */}
                            <SystemSettingRow
                                title="Google"
                                radioData={data?.googleYn}
                                radioName={'googleYn'}
                                inputData={data?.googleAccToken}
                                inputName={'googleAccToken'}
                                inputSubName=""
                                inputType="text"
                                isLoading={isLoading}
                                placeholder={t('access_token')}
                            />
                            {/* 2 */}
                            <SystemSettingRow
                                title="Facebook"
                                radioData={data?.facebookYn}
                                radioName={'facebookYn'}
                                inputData={data?.facebookAccToken}
                                inputName={'facebookAccToken'}
                                inputSubName=""
                                inputType="text"
                                isLoading={isLoading}
                                placeholder={t('access_token')}
                            />
                            {/* 3 */}
                            <SystemSettingRow
                                title="Naver"
                                radioData={data?.naverYn}
                                radioName={'naverYn'}
                                inputData={data?.naverAccToken}
                                inputName={'naverAccToken'}
                                inputSubName=""
                                inputType="text"
                                isLoading={isLoading}
                                placeholder={t('access_token')}
                            />
                            {/* 4 */}
                            <SystemSettingRow
                                title="KakaoTalk"
                                radioData={data?.kakaoYn}
                                radioName={'kakaoYn'}
                                inputData={data?.kakaoAccToken}
                                inputName={'kakaoAccToken'}
                                inputSubName=""
                                inputType="text"
                                isLoading={isLoading}
                                placeholder={t('access_token')}
                            />
                            <Grid item xs={12} style={{ padding: '16px 0px' }}>
                                <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                            </Grid>{' '}
                            {children}
                        </Grid>
                    </Typography>
                </MainCard>
            </Form>
        )
    );
}

export default SystemSettingEdit;
