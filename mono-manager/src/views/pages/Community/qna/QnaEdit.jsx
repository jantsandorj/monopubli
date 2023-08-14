import React from 'react';
import { Divider, Grid, TextField, Typography } from '@mui/material';
import URL from 'api/url';
import { Form, Item, FormInput, FormImgFileInput } from 'components';
import { QnaValidate } from './QnaValidate';
import { useTranslation } from 'react-i18next';

function QnaEdit({ children, data, isLoading, ...props }) {
    const { t } = useTranslation();

    return (
        <Form
            validateSchema={QnaValidate}
            mutation={props.mutation}
            list={URL.COMMUNITY_QNA}
            check="id"
            numbers={['sortNo']}
            seqs={{
                seq: data?.data.seq,
                fileGroupSeq: data?.data?.fileGroupSeq,
                answerFileGroupSeq: data?.data?.answerFileGroupSeq
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="creater">{t('label_creater')}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10}>
                    <TextField value={data?.data.username} InputProps={{ readOnly: true }} disabled fullWidth />
                </Grid>
                {/* row 2 */}
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="title">{t('label_inquiry_subject')}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10}>
                    <TextField fullWidth value={data?.data.title} InputProps={{ readOnly: true }} disabled />
                </Grid>
                {/* row 3 */}
                <Grid item xs={2} display="flex" alignItems="center">
                    <Item>
                        <Typography variant="content">{t('label_inquiry_content')}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10}>
                    <TextField fullWidth multiline rows={7} value={data?.data.content} InputProps={{ readOnly: true }} disabled />
                </Grid>
                {/* row 4 */}
                <Grid item xs={2} display="flex" alignItems="center">
                    <Item>
                        <Typography variant="attachment">{t('label_inquiry_file')}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10}>
                    <Item></Item>
                </Grid>
                {/* Divider */}
                <Grid item xs={12} style={{ marginTop: '12px' }}>
                    <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                </Grid>
                {/* row 5 */}
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="answer">{t('label_answer')}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10}>
                    <FormInput id="answer" name="answer" defaultValue={data?.data.answer} />
                </Grid>
                {/* row 6 */}
                <Grid item xs={2} display="flex" alignItems="center">
                    <Item>
                        <Typography variant="answerAttachment">{t('label_attachment')}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10}>
                    <FormImgFileInput
                        id="files"
                        name="files"
                        defaultValue={data?.data?.atchAnswer}
                        inputProps={{ accept: 'image/png, image/gif, image/jpeg, image/jpg, application/pdf, application/xlsx' }}
                    />
                </Grid>
                {/* row 7 */}
                <Grid item xs={2} display="flex" alignItems="center">
                    <Item>
                        <Typography variant="answerDate">{t('label_answer_date')}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10}>
                    <Item>
                        <Typography variant="subtitle1">
                            {data?.data?.answer
                                ? data.data.modifiedDate
                                : `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`}
                        </Typography>
                    </Item>
                </Grid>
                {children}
            </Grid>
        </Form>
    );
}

export default QnaEdit;
