import * as yup from 'yup';
import moment from 'moment';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Controller, useForm } from 'react-hook-form';
import { Grid, Paper, Box, Typography } from '@mui/material';

import { yupResolver } from '@hookform/resolvers/yup';

import Loader from 'components/Loader';
import MainCard from 'components/cards/MainCard';
import { BackButton } from 'components/button/BackButton';
import { SaveButton, FormInput, Item, FormRadioButton, FormCKEditor } from 'components';
import resultChecker from 'utils/functions/resultChecker';

import URL from 'api/url';
import { useCreateMailMutation } from 'api/content/mailTemplate';
import { useUser } from 'hooks';
import { useGetCommonFilterCodeQuery } from 'store/commonCodeApi';

//CONSTANTS
const requiredText = 'this field is required';

const validateSchema = yup.object({
    name: yup.string().required(requiredText).min(1).max(100),
    subject: yup.string().required(requiredText).min(1),
    content: yup.string().required(requiredText).min(1),
    useYn: yup.string().required(requiredText).nullable()
});

const formDefaultValues = {
    name: '',
    targetGroup: 'ALL',
    subject: '',
    content: '',
    useYn: 'Y'
};

const startDate = new Date();

//PAGE
const MailTemplateCreatePage = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const { userData } = useUser();

    const [onAction, resultAction] = useCreateMailMutation();
    const { data: targetData, isLoading: targetLoading } = useGetCommonFilterCodeQuery('MAIL_TARGET');

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: formDefaultValues,
        resolver: yupResolver(validateSchema)
    });

    const submit = useCallback(
        (values) => {
            let formData = new FormData();
            Object.keys(values).forEach((key) => {
                if (values[key]) formData.append(key, values[key]);
            });

            onAction(formData)
                .then((res) => resultChecker({ res, redirect: () => navigate(URL.COMMON_MAIL_TEMPLATE) }))
                .catch((err) => console.log('useCreateMailMutation ERROR => ', err));
        },
        [onAction, navigate]
    );

    return (
        <MainCard title={<BackButton text={t('act_create')} disabled={resultAction?.isLoading} />}>
            {resultAction?.isLoading && <Loader />}
            <Box variant="body2" component={Paper}>
                <form onSubmit={handleSubmit(submit)}>
                    <Grid container spacing={2} alignItems="center">
                        {/*Creator*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('mail_creator')}</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10}>
                            <Item>
                                <Typography variant="subtitle1">{userData?.username ?? ''}</Typography>
                            </Item>
                        </Grid>

                        {/*Template name*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('mail_template_name')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10}>
                            <Controller
                                name="name"
                                control={control}
                                render={({ field }) => (
                                    <FormInput
                                        disabled={resultAction?.isLoading}
                                        error={!!errors?.name}
                                        helperText={errors?.name?.message}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>

                        {/*targetGroup*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('mail_target')}</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10}>
                            <Controller
                                name="targetGroup"
                                control={control}
                                render={({ field }) => (
                                    <FormRadioButton
                                        loading={targetLoading}
                                        disabled={resultAction?.isLoading}
                                        data={targetData?.data?.map((a) => ({
                                            code: a.code,
                                            code_eng_nm: a[i18n.language === 'kr' ? 'codeNm' : 'codeEngNm']
                                        }))}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>

                        {/*subject*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('mail_subject')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10}>
                            <Controller
                                name="subject"
                                control={control}
                                render={({ field }) => (
                                    <FormInput
                                        disabled={resultAction?.isLoading}
                                        error={!!errors?.subject}
                                        helperText={errors?.subject?.message}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>

                        {/*content*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('mail_content')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10}>
                            <Controller
                                control={control}
                                name="content"
                                render={({ field }) => (
                                    <FormCKEditor error={!!errors?.content} helperText={errors?.content?.message} {...field} />
                                )}
                            />
                        </Grid>

                        {/*Create date*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('label_reg_date')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10}>
                            <Item>
                                <Typography variant="subtitle1">{moment(startDate).format('yyyy-MM-DD')}</Typography>
                            </Item>
                        </Grid>

                        {/*useYn*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('label_use_yn')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Controller
                                name="useYn"
                                control={control}
                                render={({ field }) => (
                                    <FormRadioButton
                                        disabled={resultAction?.isLoading}
                                        data={[
                                            { code: 'Y', code_eng_nm: t('use') },
                                            { code: 'N', code_eng_nm: t('unused') }
                                        ]}
                                        error={!!errors?.useYn}
                                        helperText={errors?.useYn?.message}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>

                        {/*BUTTONS*/}
                        <Grid item xs={12} textAlign="right">
                            <SaveButton disabled={resultAction?.isLoading} />
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </MainCard>
    );
};

export default MailTemplateCreatePage;
