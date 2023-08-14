// REACT
import { useNavigate, useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

// FORM
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useCreateProjectMutation, useGetProjectQuery, useUpdateProjectMutation } from 'api/project';
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
const ProjectEditPage = () => {
    const { code } = useParams();
    const { data: dataDetails, isLoading: isProjectLoading } = useGetProjectQuery(code);

    const [dataYN, setDataYN] = useState(false);

    const { t } = useTranslation();
    const navigate = useNavigate();
    const { data: userList, isLoading } = useGetUserQuery();

    const validateSchema = yup.object({
        userSeq: yup.string().required(t(requiredText)).min(1).max(100),
        figmaAddr: yup.string().required(t(requiredText)).min(1).max(100, t('error.figma.limit')),
        name: yup.string().required(t(requiredText)).min(1).max(100, t('error.title.limit')),
        vatTypeCd: yup.string().required(t(requiredText)).min(1).max(100, t('error.vatTypeCd.limit'))
    });
    const [onAction, resultAction] = useUpdateProjectMutation();

    const [pcImage, setPcImage] = useState();
    const [imgHelperText, setImgHelperText] = useState();
    const [editorData, setEditorData] = useState('');
    // const [editorData, setEditorData] = useState('');

    const {
        control,
        handleSubmit,
        watch,
        getValues,
        setValue,
        formState: { errors }
    } = useForm({
        mode: 'onBlur',
        defaultValues: formDefaultValues,
        resolver: yupResolver(validateSchema)
    });

    useEffect(() => {
        console.log('dataDetails', dataDetails);
        setDataYN(dataDetails?.status === 200);

        if (dataDetails?.status === 200) {
            setValue('seq', dataDetails?.content?.project?.seq);
            setValue('userSeq', dataDetails?.content?.project?.userSeq);
            setValue('name', dataDetails?.content?.project?.name);
            setValue('userMemo', dataDetails?.content?.project?.userMemo);
            setValue('figmaAddr', dataDetails?.content?.project?.figmaAddr);
            setValue('vatTypeCd', dataDetails?.content?.project?.vatTypeCd);
            setEditorData(dataDetails?.content?.project?.userMemo);

            setPcImage({ type: 'server', data: dataDetails?.content?.attachments });
        }
    }, [dataDetails, setValue]);

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
                files: pcImage?.type === 'local' ? pcImage?.data : null
                // userMemo: editorData
            };
            console.log('newData', newData);

            let formData = new FormData();
            Object.keys(newData).forEach((key) => {
                if (newData[key]) formData.append(key, newData[key]);
            });

            onAction(formData)
                .then((res) => resultChecker({ res, redirect: () => navigate(URL.CONTENT_PROJECT), type: 'update' }))
                .catch((err) => console.log('useUpdateProjectMutation ERROR => ', err));
        },
        [editorData, pcImage, onAction, navigate]
    );

    return (
        <MainCard title={<BackButton text={t('act_modify')} disabled={resultAction?.isLoading} />}>
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
                            {editorData ? (
                                <Controller
                                    control={control}
                                    name="userMemo"
                                    render={({ field }) => (
                                        <FormCKEditor
                                            value={editorData}
                                            error={!!errors?.content}
                                            helperText={errors?.content?.message}
                                            {...field}
                                        />
                                    )}
                                />
                            ) : null}
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

export default ProjectEditPage;
