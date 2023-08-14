import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Form, FormInput, Item, RadioButton } from 'components';
import URL from 'api/url';
import { RoleManageValidate } from './RoleManageValidate';

function RoleManageEdit({ children, data, isLoading, ...props }) {
    const { t } = useTranslation();
    return (
        <Typography variant="body2" component={Paper}>
            <Form
                validateSchema={RoleManageValidate}
                mutation={props.mutation}
                list={URL.ROLE_MANAGE_SETTING}
                check="id"
                onSuccess={props.onSuccess}
            >
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Item>
                            <Typography variant="subtitle1">{t('role_group_code')} </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                        <FormInput id="authorCd" name="authorCd" type="text" defaultValue={data?.authorCd} loading={isLoading} />
                    </Grid>
                    <Grid item xs={2}>
                        <Item>
                            <Typography variant="subtitle1">{t('role_group_name')} </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                        <FormInput id="authorNm" name="authorNm" type="text" defaultValue={data?.authorNm} loading={isLoading} />
                    </Grid>
                    <Grid item xs={2}>
                        <Item>
                            <Typography variant="subtitle1">{t('content_desc')} </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                        <FormInput id="authorDesc" name="authorDesc" type="text" defaultValue={data?.authorDesc} loading={isLoading} />
                    </Grid>
                    <Grid item xs={2}>
                        <Item>
                            <Typography variant="subtitle1">{t('label_use_yn')} </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                        <RadioButton
                            checked={true}
                            size="small"
                            name="useYn"
                            defaultValue={data?.useYn || 'Y'}
                            data={[
                                { code: 'Y', code_eng_nm: t('use') },
                                { code: 'N', code_eng_nm: t('unused') }
                            ]}
                        />
                    </Grid>
                    <Grid item xs={6} textAlign="left"></Grid>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
                        {children}
                    </Grid>
                </Grid>
            </Form>
        </Typography>
    );
}

export default RoleManageEdit;
