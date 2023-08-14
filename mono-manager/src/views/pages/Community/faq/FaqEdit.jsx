import React, { useState } from 'react';
import URL from 'api/url';
import { Grid, Typography, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Form, FormImgFileInput, FormInput, FormTextArea, Item, RadioButton, User } from 'components';
import { FaqValidate } from './FaqValidate';
import CommonCodeSelect from 'components/select/CommonCodeSelect';

function FaqEdit({ children, data, ...props }) {
    const { t } = useTranslation();
    const [editorData, setEditorData] = useState('');

    return (
        <Form
            validateSchema={FaqValidate}
            mutation={props.mutation}
            list={URL.COMMUNITY_FAQ}
            check="id"
            numbers={['sortNo']}
            seqs={{ seq: data?.data.seq, attachment_file: data?.data.attachment_file }}
        >
            <Grid container spacing={2}>
                {/* Row 1 */}
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('label_created_by')}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10}>
                    <Item>
                        <Typography variant="subtitle1">{data ? data?.data.createdBy : <User name="username" />}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('label_title')} *</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10}>
                    <FormInput id="question" name="question" defaultValue={data?.data.question} />
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('label_category')}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10}>
                    <CommonCodeSelect
                        defaultValue={data?.data.categoryCd}
                        groupName="FAQ_CATEGORY"
                        name="categoryCd"
                        label={t('label_category')}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('body')} *</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10}>
                    <FormTextArea
                        getEditorData={(e) => setEditorData(e)}
                        id="answer"
                        name="answer"
                        multiline
                        defaultValue={data?.data.answer}
                    />
                    <FormInput id="question" type="hidden" name="answer2" value={editorData} hide={true} />
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('attachment_file')}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <FormImgFileInput
                        id="files"
                        name="files"
                        defaultValue={data?.data.attachment_file}
                        inputProps={{ accept: 'image/png, image/gif, image/jpeg, image/jpg,' }}
                    />
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('reser')}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10} alignItems="center">
                    <Item>
                        <Typography variant="subtitle1">{`${new Date().getFullYear()}-${
                            new Date().getMonth() + 1
                        }-${new Date().getDate()}`}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('exposure_yn')}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10}>
                    <RadioButton
                        defaultValue={data?.data?.exposureYn || 'Y'}
                        name="exposureYn"
                        data={[
                            { code: 'Y', code_eng_nm: t('exposure') },
                            { code: 'N', code_eng_nm: t('unexposed') }
                        ]}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                </Grid>
                {children}
            </Grid>
        </Form>
    );
}

export default FaqEdit;
