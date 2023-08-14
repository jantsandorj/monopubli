// REACT
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

// FORM
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useCreateProjectMutation } from 'api/project';
import resultChecker from 'utils/functions/resultChecker';

// MUI
import { Grid, Paper, Box, Typography, FormGroup, InputAdornment, IconButton, Input, OutlinedInput } from '@mui/material';

// COMPONENTS
import Loader from 'components/Loader';
import MainCard from 'components/cards/MainCard';
import { BackButton } from 'components/button/BackButton';
import { SaveButton, FormInput, Item, FormCmmCodeSelect, FormTextArea, FormRadioButton, FormDatePicker, FormCKEditor } from 'components';

// OTHER
import URL from 'api/url';
import { Add, Remove } from '@mui/icons-material';
import { useGetUserQuery } from 'store/user.api';
import { findCorName } from 'utils/functions/common';
import dayjs from 'dayjs';
import { DocUploader } from 'components/input/DocUploader';
import { Select as BaseSelect, FormControl, MenuItem, Skeleton } from '@mui/material';
import i18n from 'i18n';
import moment from 'moment';

//CONSTANTS
const requiredText = 'label_field_required';

const formDefaultValues = {
    userSeq: '',
    name: '',
    figmaAddr: '',
    userEstimatedEndDate: moment().add('M', 1),
    vatTypeCd: 'VT_01',
    userMemo: ''
};

//PAGE
const ProjectCreatePage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { data: userList, isLoading } = useGetUserQuery();

    const validateSchema = yup.object({
        userSeq: yup.string().required(t(requiredText)).min(1).max(100),
        figmaAddr: yup.string().required(t(requiredText)).min(1).max(100, t('error.figma.limit')),
        name: yup.string().required(t(requiredText)).min(1).max(100, t('error.title.limit')),
        vatTypeCd: yup.string().required(t(requiredText)).min(1).max(100, t('error.vatTypeCd.limit'))
    });
    const [onAction, resultAction] = useCreateProjectMutation();

    const [pcImage, setPcImage] = useState();
    const [imgHelperText, setImgHelperText] = useState();
    const [editorData, setEditorData] = useState('');
    // const [editorData, setEditorData] = useState('');

    const {
        control,
        handleSubmit,
        watch,
        getValues,
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
            console.log(values);

            const newData = {
                ...values,
                userEstimatedEndDate: moment(new Date(values.userEstimatedEndDate)).format('yyyy-MM-DD'),
                files: pcImage?.data
                // userMemo: editorData
            };
            console.log('newData', newData);

            let formData = new FormData();
            Object.keys(newData).forEach((key) => {
                if (newData[key]) formData.append(key, newData[key]);
            });

            onAction(formData)
                .then((res) => resultChecker({ res, redirect: () => navigate(URL.CONTENT_CONSULT), type: 'insert' }))
                .catch((err) => console.log('useCreateWorkerMutation ERROR => ', err));
        },
        [editorData, pcImage, onAction, navigate]
    );

    return (
        <MainCard title={<BackButton text={t('act_create')} disabled={resultAction?.isLoading} />}>
            {resultAction?.isLoading && <Loader />}
            <Box variant="body2" component={Paper}>
                <form onSubmit={handleSubmit(submit)}>
                    <Grid container spacing={2} alignItems="center">
                        {/*userSeq*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('project_user_name')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10}>
                            <Controller
                                name="userSeq"
                                control={control}
                                render={({ field }) => (
                                    <FormCmmCodeSelect
                                        loading={isLoading}
                                        customData={userList?.content?.map((a) => ({
                                            code: a.seq,
                                            codeEngNm: a.username,
                                            codeNm: a.username
                                        }))}
                                        error={errors?.userSeq ? true : undefined}
                                        label={t('project_user_name')}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>

                        {/*name*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('project_name')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10}>
                            <Controller
                                name="name"
                                control={control}
                                render={({ field }) => (
                                    <FormInput
                                        size="small"
                                        error={errors?.name ? true : undefined}
                                        // helperText={errors?.name?.message}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>

                        {/* figmaLink, attach */}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('project_upload')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid item xs={6} sx={{ paddingBottom: 1 }}>
                                <DocUploader
                                    size="small"
                                    onChange={(e) => setPcImage({ type: 'local', data: e.target.files[0] })}
                                    defaultValues={pcImage?.data}
                                    type={pcImage?.type}
                                    disabled={resultAction?.isLoading}
                                    error={imgHelperText ? true : undefined}
                                    helperText={imgHelperText}
                                    inputprops={{ accept: 'image/png, image/gif, image/jpeg, image/jpg,' }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    name="figmaAddr"
                                    control={control}
                                    render={({ field }) => (
                                        <FormInput
                                            placeholder={t('피그마 주소를 입력해 주세요.')}
                                            size="small"
                                            error={errors?.figmaAddr ? true : undefined}
                                            {...field}
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>

                        {/*userEstimatedEndDate*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('project_estimation')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Controller
                                name="userEstimatedEndDate"
                                control={control}
                                render={({ field }) => (
                                    <FormDatePicker
                                        size="small"
                                        disabled={resultAction?.isLoading}
                                        error={errors?.userEstimatedEndDate ? true : undefined}
                                        helperText={errors?.userEstimatedEndDate?.message}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            {/* offset */}
                        </Grid>

                        {/*vatType*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('project_transaction_status')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Controller
                                name="vatTypeCd"
                                control={control}
                                render={({ field }) => (
                                    <FormCmmCodeSelect
                                        seq
                                        groupName="VAT_TYPE"
                                        error={errors?.vatTypeCd ? true : undefined}
                                        helperText={errors?.positionCd?.message}
                                        disabled={resultAction?.isLoading}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            {/* offset */}
                        </Grid>

                        {/* userMemo */}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('project_user_memo')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10}>
                            <Controller
                                control={control}
                                name="userMemo"
                                render={({ field }) => (
                                    <FormCKEditor
                                        // getEditorData={(e) => setEditorData(e)}
                                        error={!!errors?.content}
                                        helperText={errors?.content?.message}
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

export default ProjectCreatePage;
