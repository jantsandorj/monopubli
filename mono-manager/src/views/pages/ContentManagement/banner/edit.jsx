import * as yup from 'yup';
import moment from 'moment';
import { useNavigate, useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { Grid, Paper, Box, Typography, Checkbox, FormControlLabel } from '@mui/material';

import Loader from 'components/Loader';
import MainCard from 'components/cards/MainCard';
import { BackButton } from 'components/button/BackButton';
import {
    FormInput,
    Item,
    FormNumberInput,
    FormDatePicker,
    FormRadioButton,
    DeleteButton,
    UpdateButton,
    FormCmmCodeSelect
} from 'components';

import URL from 'api/url';
import { useDeleteBannerMutation, useGetBannerQuery, useUpdateBannerMutation } from 'api/content/banner';
import { FileUploader } from 'components/input/FileUploader';
import resultChecker from 'utils/functions/resultChecker';
import dayjs from 'dayjs';

// CONSTANTS
const requiredText = 'label_field_required';

const formDefaultValues = {
    bannerNm: '',
    linkYn: 'Y',
    useYn: 'Y',
    windowYn: false,
    startDate: dayjs(),
    endDate: dayjs(),
    type: '',
    mediaType: '',
    link: '',
    imageAlt: '',
    mainText: '',
    subText: '',
    sortNo: ''
};

// PAGE
const BannerEditPage = () => {
    const { t } = useTranslation();

    const { code } = useParams();
    const navigate = useNavigate();

    const validateSchema = yup.object({
        bannerNm: yup.string().required(t(requiredText)).min(1).max(100, t('error.bannername.limit')),
        type: yup.string().required(t(requiredText)).min(1).max(100),
        mediaType: yup.string().required(t(requiredText)).min(1).max(100),
        linkYn: yup.string().required(t(requiredText)).min(1).max(100),
        link: yup
            .string()
            .nullable(true)
            .when('linkYn', { is: 'Y', then: (schema) => schema.required(requiredText).min(2).max(100) }),
        imageAlt: yup.string().required(t(requiredText)).min(1).max(45, t('error.imagealt.limit')),
        mainText: yup.string().required(t(requiredText)).min(1).max(100, t('error.maintext.limit')),
        subText: yup.string().required(t(requiredText)).min(1).max(100, t('error.subtext.limit')),
        startDate: yup
            .date()
            .required(requiredText)
            .default(() => new Date()),
        endDate: yup
            .date()
            .when(
                'startDate',
                (startDate, schema) => startDate && schema.min(startDate, 'Min date ' + moment(startDate).format('yyyy-MM-DD'))
            )
    });

    const { data, isLoading } = useGetBannerQuery(code);
    const [onAction, resultAction] = useUpdateBannerMutation();

    const [pcImage, setPcImage] = useState();
    const [imgHelperText, setImgHelperText] = useState();
    const [mobileImage, setMobileImage] = useState();

    const {
        control,
        handleSubmit,
        watch,
        setValue,
        formState: { errors }
    } = useForm({
        mode: 'onBlur',
        defaultValues: formDefaultValues,
        resolver: yupResolver(validateSchema)
    });

    useEffect(() => {
        if (data) {
            setValue('bannerNm', data?.content?.bannerNm);
            setValue('type', data?.content?.type);
            setValue('mediaType', data?.content?.mediaType);
            setValue('linkYn', data?.content?.linkYn);
            setValue('useYn', data?.content?.useYn);
            setValue('windowYn', data?.content?.windowYn === 'on' ? true : false);
            setValue('link', data?.content?.link);
            setValue('imageAlt', data?.content?.imageAlt);
            setValue('mainText', data?.content?.mainText);
            setValue('subText', data?.content?.subText);
            setValue('startDate', dayjs(data?.content?.startDate));
            setValue('endDate', dayjs(data?.content?.endDate));
            setValue('sortNo', data?.content?.sortNo);
            setPcImage({ type: 'server', data: data?.content?.pcImageAtch });
            if (data?.content?.mobileImageAtch.length > 0) setMobileImage({ type: 'server', data: data?.content?.mobileImageAtch });
        }
    }, [data, setValue]);

    useEffect(() => {
        if (imgHelperText && pcImage) setImgHelperText(undefined);
    }, [pcImage, imgHelperText]);

    //MODIFY EVENT
    const submit = useCallback(
        (values) => {
            if (!data?.content) return;

            if (!pcImage?.data) {
                setImgHelperText('Please upload image');
                return;
            }

            const editedData = {
                ...values,
                seq: data?.content?.seq,
                mobileFileGroupSeq: data?.content?.mobileFileGroupSeq,
                pcFileGroupSeq: data?.content?.pcFileGroupSeq,
                startDate: moment(new Date(values.startDate)).format('yyyy-MM-DD'),
                endDate: moment(new Date(values.endDate)).format('yyyy-MM-DD'),
                windowYn: values.windowYn ? 'on' : 'off',
                mobileImage: mobileImage?.type === 'local' ? mobileImage?.data : null,
                pcImage: pcImage?.type === 'local' ? pcImage?.data : null
            };

            let formData = new FormData();
            Object.keys(editedData).forEach((key) => {
                if (editedData[key]) formData.append(key, editedData[key]);
                //Not required field
                else if (key === 'sortNo') formData.append(key, 99);
                else if (key === 'link') formData.append(key, '');
            });

            onAction(formData)
                .then((res) => resultChecker({ res, redirect: () => navigate(URL.CONTENT_BANNER), type: 'update' }))
                .catch((err) => console.log('useUpdateBannerMutation ERROR  => ', err));
        },
        [data, mobileImage, pcImage, onAction, navigate]
    );

    return (
        <MainCard title={<BackButton text={t('act_modify')} disabled={resultAction?.isLoading} />}>
            {(resultAction?.isLoading || isLoading) && <Loader />}
            <Box variant="body2" component={Paper}>
                <form onSubmit={handleSubmit(submit)}>
                    <Grid container spacing={2} alignItems="center">
                        {/*bannerNm*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('banner_name')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10}>
                            <Controller
                                name="bannerNm"
                                control={control}
                                render={({ field }) => (
                                    <FormInput
                                        disabled={resultAction?.isLoading}
                                        loading={isLoading}
                                        error={errors?.bannerNm ? true : undefined}
                                        helperText={errors?.bannerNm?.message}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>

                        {/*banner type*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('label_banner_type')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Controller
                                name="type"
                                control={control}
                                render={({ field }) => (
                                    <FormCmmCodeSelect
                                        groupName="BANNER_TYPE"
                                        disabled={resultAction?.isLoading}
                                        loading={isLoading}
                                        error={errors?.type ? true : undefined}
                                        helperText={errors?.type?.message}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>

                        {/*mediaType*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('media_type')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Controller
                                name="mediaType"
                                control={control}
                                render={({ field }) => (
                                    <FormCmmCodeSelect
                                        groupName="MEDIA_TYPE"
                                        error={errors?.mediaType ? true : undefined}
                                        helperText={errors?.mediaType?.message}
                                        disabled={resultAction?.isLoading}
                                        loading={isLoading}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>

                        {/*linkYn*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('link_useYN')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={2}>
                            <Controller
                                name="linkYn"
                                control={control}
                                render={({ field }) => (
                                    <FormRadioButton
                                        disabled={resultAction?.isLoading}
                                        loading={isLoading}
                                        data={[
                                            { code: 'Y', code_eng_nm: t('use') },
                                            { code: 'N', code_eng_nm: t('unused') }
                                        ]}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>
                        {/*windowYn*/}
                        <Grid item xs={2}>
                            <Controller
                                name="windowYn"
                                control={control}
                                render={({ field }) => (
                                    <FormControlLabel
                                        checked={watch('windowYn')}
                                        disabled={watch('linkYn') === 'N'}
                                        control={<Checkbox disabled={resultAction?.isLoading || isLoading} />}
                                        label={t('new_window')}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>

                        {/*link*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">
                                    {t('link')} {watch('linkYn') === 'Y' ? '*' : ''}
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Controller
                                name="link"
                                control={control}
                                render={({ field }) => (
                                    <FormInput
                                        error={errors?.link ? true : undefined}
                                        helperText={watch('linkYn') === 'Y' && errors?.link?.message}
                                        disabled={resultAction?.isLoading || watch('linkYn') === 'N'}
                                        loading={isLoading}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>

                        {/*pcImage*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('pc_img')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <FileUploader
                                onChange={(e) => setPcImage({ type: 'local', data: e.target.files[0] })}
                                value={pcImage?.data}
                                type={pcImage?.type}
                                disabled={resultAction?.isLoading}
                                loading={isLoading}
                                error={imgHelperText ? true : undefined}
                                helperText={imgHelperText}
                                inputProps={{ accept: 'image/png, image/gif, image/jpeg, image/jpg,' }}
                            />
                        </Grid>

                        {/*mobileImage*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('mo_img')}</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <FileUploader
                                onChange={(e) => setMobileImage({ type: 'local', data: e.target.files[0] })}
                                value={mobileImage?.data}
                                type={mobileImage?.type}
                                disabled={resultAction?.isLoading}
                                loading={isLoading}
                                inputProps={{ accept: 'image/png, image/gif, image/jpeg, image/jpg,' }}
                            />
                        </Grid>

                        {/*imageAlt*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('image_alt')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10}>
                            <Controller
                                name="imageAlt"
                                control={control}
                                render={({ field }) => (
                                    <FormInput
                                        disabled={resultAction?.isLoading}
                                        loading={isLoading}
                                        error={errors?.imageAlt ? true : undefined}
                                        helperText={errors?.imageAlt?.message}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>

                        {/*mainText*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('main_text')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10}>
                            <Controller
                                name="mainText"
                                control={control}
                                render={({ field }) => (
                                    <FormInput
                                        disabled={resultAction?.isLoading}
                                        loading={isLoading}
                                        error={errors?.mainText ? true : undefined}
                                        helperText={errors?.mainText?.message}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>

                        {/*subText*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('sub_text')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10}>
                            <Controller
                                name="subText"
                                control={control}
                                render={({ field }) => (
                                    <FormInput
                                        disabled={resultAction?.isLoading}
                                        loading={isLoading}
                                        error={errors?.subText ? true : undefined}
                                        helperText={errors?.subText?.message}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>

                        {/*startDate*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('ref_start_dt')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Controller
                                name="startDate"
                                control={control}
                                render={({ field }) => (
                                    <FormDatePicker
                                        disabled={resultAction?.isLoading}
                                        loading={isLoading}
                                        error={errors?.startDate ? true : undefined}
                                        helperText={errors?.startDate?.message}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>

                        {/*endDate*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('ref_end_dt')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Controller
                                name="endDate"
                                control={control}
                                render={({ field }) => (
                                    <FormDatePicker
                                        disabled={resultAction?.isLoading}
                                        loading={isLoading}
                                        error={errors?.endDate ? true : undefined}
                                        helperText={errors?.endDate?.message}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>

                        {/*sortNo*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('exposure_seq')}</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Controller
                                name="sortNo"
                                control={control}
                                render={({ field }) => (
                                    <FormNumberInput disabled={resultAction?.isLoading} loading={isLoading} {...field} />
                                )}
                            />
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
                                deleteFunc={useDeleteBannerMutation}
                                to={URL.CONTENT_BANNER}
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

export default BannerEditPage;
