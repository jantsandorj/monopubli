import React from 'react';
import { Grid, Paper, TextField, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import URL from 'api/url';
import MainCard from 'components/cards/MainCard';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ListButton, ModifyButton, RadioButton } from 'components';
import { useGetQnaQuery } from './QnaApi';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.primary
}));

function QnaDetail() {
    const { t } = useTranslation();
    const { code } = useParams();
    const { data, isLoading } = useGetQnaQuery(code);

    return (
        <MainCard title={t('detail_page')}>
            <Typography variant="body2" component={Paper}>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="creater">{t('label_creater')}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10}>
                                <TextField value={data?.data.username} InputProps={{ readOnly: true }} disabled />
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="title">{t('label_inquiry_subject')}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10}>
                                <TextField fullWidth value={data?.data.title} InputProps={{ readOnly: true }} disabled />
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="content">{t('label_inquiry_content')}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10}>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={7}
                                    value={data?.data.content}
                                    InputProps={{ readOnly: true }}
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Item>
                                    <Typography variant="attachment">{t('label_inquiry_file')}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={10}>
                                <Item>Question attach</Item>
                            </Grid>
                            <Grid item xs={4} flex={100}>
                                <RadioButton
                                    defaultValue={data?.data.isAnswered || 'N'}
                                    disabled
                                    data={[
                                        { code: 'Y', code_eng_nm: t('label_answered') },
                                        { code: 'N', code_eng_nm: t('label_unanswered') }
                                    ]}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                            </Grid>
                            <Grid item xs={6} textAlign="left">
                                <ListButton to={URL.COMMUNITY_QNA} />
                            </Grid>
                            <Grid item xs={6} textAlign="right">
                                {/* <DeleteButton loading={isLoading} deleteFunc={useDeleteQnaMutation} to='/community/qna' code={code} /> */}
                                <ModifyButton to={URL.COMMUNITY_QNA_MODIFY + `/${code}`} loading={isLoading} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Typography>
        </MainCard>
    );
}

export default QnaDetail;
