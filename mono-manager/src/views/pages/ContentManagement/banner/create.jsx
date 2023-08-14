// REACT
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

// FORM
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useCreateBannerMutation } from 'api/content/banner';
import resultChecker from 'utils/functions/resultChecker';

// MUI
import { Grid, Paper, Box, Typography, Checkbox, FormControlLabel } from '@mui/material';

// COMPONENTS
import Loader from 'components/Loader';
import MainCard from 'components/cards/MainCard';
import { BackButton } from 'components/button/BackButton';
import { SaveButton, FormInput, Item, FormNumberInput, FormDatePicker, FormRadioButton, FormCmmCodeSelect } from 'components';
import { FileUploader } from 'components/input/FileUploader';

// OTHER
import URL from 'api/url';
import moment from 'moment';
import dayjs from 'dayjs';
//CONSTANTS
const requiredText = 'label_field_required';

const formDefaultValues = {
    linkYn: 'Y',
    useYn: 'Y',
    windowYn: false,
    startDate: new Date(),
    endDate: moment().add('M', 1)
};

//PAGE
const BannerCreatePage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const validateSchema = yup.object({
        bannerNm: yup.string().required(t(requiredText)).min(1).max(100, t('error.bannername.limit')),
        type: yup.string().required(t(requiredText)).min(1).max(100),
        mediaType: yup.string().required(t(requiredText)).min(1).max(100),
        linkYn: yup.string().required(t(requiredText)).min(1).max(100),
        link: yup.string().when('linkYn', { is: 'Y', then: (schema) => schema.required(requiredText).min(2).max(100) }),
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
    const [onAction, resultAction] = useCreateBannerMutation();

    const [pcImage, setPcImage] = useState();
    const [imgHelperText, setImgHelperText] = useState();
    const [mobileImage, setMobileImage] = useState();

    const {
        control,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        mode: 'onBlur',
        defaultValues: formDefaultValues,
        resolver: yupResolver(validateSchema)
    });

    useEffect(() => {
        if (imgHelperText && pcImage) setImgHelperText(undefined);
    }, [pcImage, imgHelperText]);

    const submit = useCallback(
        (values) => {
            if (!pcImage?.data) {
                setImgHelperText('Please upload image');
                return;
            }

            const newData = {
                ...values,
                startDate: moment(new Date(values.startDate)).format('yyyy-MM-DD'),
                endDate: moment(new Date(values.endDate)).format('yyyy-MM-DD'),
                windowYn: values.windowYn ? 'on' : 'off',
                mobileImage: mobileImage?.data,
                pcImage: pcImage?.data
            };

            let formData = new FormData();
            Object.keys(newData).forEach((key) => {
                if (newData[key]) formData.append(key, newData[key]);
                //Not required field
                else if (key === 'sortNo') formData.append(key, 99);
            });

            onAction(formData)
                .then((res) => resultChecker({ res, redirect: () => navigate(URL.CONTENT_BANNER), type: 'insert' }))
                .catch((err) => console.log('useCreateBannerMutation ERROR => ', err));
        },
        [mobileImage, pcImage, onAction, navigate]
    );

    return (
        <MainCard title={<BackButton text={t('act_create')} disabled={resultAction?.isLoading} />}>
            {resultAction?.isLoading && <Loader />}
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
                                        disabled={watch('linkYn') === 'N'}
                                        control={<Checkbox disabled={resultAction?.isLoading} {...field} />}
                                        label={t('new_window')}
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
                                        helperText={watch('linkYn') === 'Y' ? errors?.link?.message : ''}
                                        disabled={resultAction?.isLoading || watch('linkYn') === 'N'}
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
                                        error={errors?.startDate ? true : undefined}
                                        helperText={errors?.startDate?.message}
                                        {...field}
                                        value={dayjs()}
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
                                        error={errors?.endDate ? true : undefined}
                                        helperText={errors?.endDate?.message}
                                        {...field}
                                        value={dayjs()}
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
                                render={({ field }) => <FormNumberInput disabled={resultAction?.isLoading} {...field} />}
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
                            <SaveButton disabled={resultAction?.isLoading} />
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </MainCard>
    );
};

export default BannerCreatePage;
