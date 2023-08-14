import React from 'react';
import URL from 'api/url';
import { Form, FormInput, Item, RadioButton, FormTextArea } from 'components';
import { Divider, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ContentMenuValidate } from './ContentMenuValidate';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function ContentMenuEdit({ children, data, isLoading, ...props }) {
    const { t } = useTranslation();
    const value = useSelector((state) => state?.commonSlice?.value);
    const [contentDetail, setContentDetail] = useState({
        createdBy: data?.content?.createdBy || '',
        menuId: data?.content?.menuId || '',
        menuName: data?.content?.menuName || '',
        content: data?.content?.content || '',
        createdDate: data?.content?.createdDate || '',
        useYn: data?.content?.useYn || ''
    });

    return (
        <Form validateSchema={ContentMenuValidate} mutation={props.mutation} list={URL.CONTENT_MENU} check="id" numbers={['sortNo']}>
            <input name="seq" type="hidden" value={value?.seq} />
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('menu_id')} *</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10}>
                    <FormInput
                        id="menuId"
                        name="menuId"
                        value={contentDetail.menuId}
                        onChange={(e) => setContentDetail({ ...contentDetail, menuId: e.target.value })}
                        disabled
                    />
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('menu_name')}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10}>
                    <FormInput
                        id="menuName"
                        name="menuName"
                        fullWidth
                        value={contentDetail.menuName}
                        onChange={(e) => setContentDetail({ ...contentDetail, menuName: e.target.value })}
                        disabled
                    />
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('content_desc')} </Typography>
                    </Item>
                </Grid>
                <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                    <Grid item xs={12}>
                        <FormTextArea
                            id="content"
                            name="content"
                            defaultValue={contentDetail?.content}
                            value={contentDetail?.content}
                            loading={isLoading}
                            onChange={(e) => setContentDetail({ ...contentDetail, content: e.target.value })}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('label_created_date')}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10}>
                    <FormInput
                        id="formattedCreateDate"
                        name="formattedCreateDate"
                        value={contentDetail.createdDate}
                        onChange={(e) => setContentDetail({ ...contentDetail, formattedCreateDate: e.target.value })}
                        disabled
                    />
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('label_use_yn')}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10}>
                    <RadioButton
                        name={'useYn'}
                        defaultValue={contentDetail.useYn}
                        data={[
                            { code: 'Y', code_eng_nm: t('use') },
                            { code: 'N', code_eng_nm: t('unused') }
                        ]}
                    />
                </Grid>
                <Grid xs={12}>
                    <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                </Grid>
                {children}
            </Grid>
        </Form>
    );
}

export default ContentMenuEdit;
