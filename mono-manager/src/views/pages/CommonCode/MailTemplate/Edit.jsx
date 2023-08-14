import * as yup from 'yup';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import { Controller, useForm } from 'react-hook-form';
import { useCallback, useEffect, useState } from 'react';
import { Grid, Paper, Box, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';

import Loader from 'components/Loader';
import MainCard from 'components/cards/MainCard';
import { BackButton } from 'components/button/BackButton';
import resultChecker from 'utils/functions/resultChecker';
import { DeleteButton, UpdateButton, FormInput, Item, FormRadioButton, FormCKEditor } from 'components';

import URL from 'api/url';
import { useGetMailQuery, useUpdateMailMutation, useDeleteMailMutation } from 'api/content/mailTemplate';
import { useGetCommonFilterCodeQuery } from 'store/commonCodeApi';

//CONSTANTS
const startDate = new Date();
const requiredText = 'this field is required';
const validateSchema = yup.object({
    name: yup.string().required(requiredText).min(1).max(100),
    subject: yup.string().required(requiredText).min(1),
    content: yup.string().required(requiredText).min(1),
    useYn: yup.string().required(requiredText).nullable()
});

const formDefaultValues = {
    name: '',
    targetGroup: '',
    subject: '',
    content: '',
    useYn: ''
};

//PAGE
const MailTemplateEditPage = () => {
    const { t, i18n } = useTranslation();
    const { code } = useParams();
    const navigate = useNavigate();

    const [userData, setUserData] = useState();
    const [content, setContent] = useState();

    const { data, isLoading } = useGetMailQuery(code);
    const [onAction, resultAction] = useUpdateMailMutation();
    const { data: targetData, isLoading: targetLoading } = useGetCommonFilterCodeQuery('MAIL_TARGET');

    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        defaultValues: formDefaultValues,
        resolver: yupResolver(validateSchema)
    });

    useEffect(() => {
        if (data) {
            setValue('name', data?.content?.name);
            setValue('targetGroup', data?.content?.targetGroup);
            setValue('useYn', data?.content?.useYn);
            setValue('seq', data?.content?.seq);
            setValue('subject', data?.content?.subject);
            setValue('content', data?.content?.content);
            setContent(data?.content?.content);
            setUserData(data?.content?.itemUsername);
        }
    }, [data, setValue]);

    const submit = useCallback(
        (values) => {
            let formData = new FormData();
            Object.keys(values).forEach((key) => {
                if (values[key]) formData.append(key, values[key]);
            });

            onAction(formData)
                .then((res) => resultChecker({ res, redirect: () => navigate(URL.COMMON_MAIL_TEMPLATE) }))
                .catch((err) => console.log('useUpdateMailMutation ERROR => ', err));
        },
        [onAction, navigate]
    );

    return (
        <MainCard title={<BackButton text={t('act_modify')} disabled={resultAction?.isLoading} />}>
            {(resultAction?.isLoading || isLoading) && <Loader />}
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
                                <Typography variant="subtitle1">{userData ?? ''}</Typography>
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
                                        loading={isLoading}
                                        error={errors?.name ? true : undefined}
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
                                        disabled={resultAction?.isLoading}
                                        loading={isLoading || targetLoading}
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
                                        error={errors?.subject ? true : undefined}
                                        helperText={errors?.subject?.message}
                                        disabled={resultAction?.isLoading}
                                        loading={isLoading}
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
                            {content ? (
                                <Controller
                                    control={control}
                                    name="content"
                                    render={({ field }) => (
                                        <FormCKEditor
                                            value={content}
                                            loading={isLoading}
                                            readOnly={resultAction?.isLoading}
                                            error={errors?.content ? true : undefined}
                                            helperText={errors?.content?.message}
                                            {...field}
                                        />
                                    )}
                                />
                            ) : null}
                        </Grid>

                        {/*Modified date*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('label_modified_date')} *</Typography>
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
                                        loading={isLoading}
                                        data={[
                                            { code: 'Y', code_eng_nm: t('use') },
                                            { code: 'N', code_eng_nm: t('unused') }
                                        ]}
                                        error={errors?.useYn ? true : undefined}
                                        helperText={errors?.useYn?.message}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>

                        {/*BUTTONS*/}
                        <Grid item xs={12} textAlign="right">
                            <DeleteButton
                                loading={isLoading || resultAction?.isLoading}
                                disabled={isLoading || resultAction?.isLoading}
                                deleteFunc={useDeleteMailMutation}
                                to={URL.COMMON_MAIL_TEMPLATE}
                                code={code}
                            />
                            <UpdateButton
                                loading={isLoading || resultAction?.isLoading}
                                disabled={isLoading || resultAction?.isLoading}
                                style={{ marginLeft: 10 }}
                            />
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </MainCard>
    );
};

export default MailTemplateEditPage;
