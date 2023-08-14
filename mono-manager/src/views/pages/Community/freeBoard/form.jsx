// REACT
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

// FORM
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import resultChecker from 'utils/functions/resultChecker';

// MUI
import { Grid, FormHelperText, Typography } from '@mui/material';

// COMPONENTS
import { SaveButton, FormRadioButton, DeleteButton, FormTextArea, FormTextAreaLabel } from 'components';
import { FormLabelStyle } from 'components/button/style';
import { FileUploader } from 'components/input/FileUploader';

// OTHER
import URL from 'api/url';
import CustomControllerInputs from 'components/input/CustomControllerInputs';
import dayjs from 'dayjs';
import { useGetCommonFilterCodeQuery } from 'store/commonCodeApi';

// ASSETS
import { useGetAccountSettingsQuery } from 'views/pages/MemberManagement/AccountSettings/AccountSettingsApi';

//CONSTANTS
const requiredText = 'valid_required_txt';
const limit225 = 'error_limit_225';
const formDefaultValues = {
    divisionCd: '',
    title: '',
    content: ''
};

//PAGE
const FreeBoardForm = ({ mutation, data: dataDetails, code, deleteMutation, isLoading }) => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const [onAction, resultAction] = mutation();
    const [image, setImage] = useState();
    const [imgHelperText, setImgHelperText] = useState();
    const [dataYN, setDataYN] = useState(false);
    const seq = JSON.parse(localStorage.getItem('user'))?.amdinSeq;
    const { data } = useGetAccountSettingsQuery(seq);
    const { data: freeBoardData, idLoading: freeBoardLoading } = useGetCommonFilterCodeQuery('FREE_BOARD');

    const validateSchema = yup.object({
        title: yup.string().required(t(requiredText)).min(1).max(100, t(limit225)),
        divisionCd: yup
            .string()
            .test('isRequired', t(requiredText), (val) => val != '')
            .min(1)
            .max(100, t('error.divisionCd.limit'))
    });

    const [editorData, setEditorData] = useState('');

    const {
        control,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors }
    } = useForm({
        mode: 'onBlur',
        defaultValues: formDefaultValues,
        resolver: yupResolver(validateSchema)
    });

    useEffect(() => {
        setDataYN(dataDetails?.data?.seq);

        if (dataDetails?.status === 'success') {
            setImage({ type: 'server', data: dataDetails?.data?.attachments });
            setEditorData(dataDetails?.data?.content);
            return reset({
                seq: dataDetails?.data?.seq || '',
                title: dataDetails?.data?.title || '',
                divisionCd: dataDetails?.data?.divisionCd || '',
                content: dataDetails?.data?.content || ''
            });
        }

        return () => {};
    }, [dataDetails, reset]);

    useEffect(() => {
        if (imgHelperText && image) setImgHelperText(undefined);
    }, [image, imgHelperText]);

    const submit = useCallback(
        (values) => {
            let newData = {
                ...values,
                content: editorData
            };

            let formData = new FormData();
            for (let key in newData) {
                formData.append(key, newData[key]);
            }

            if (image?.type == 'local') {
                formData.append('files', image?.data);
            }

            if (code) {
                formData.append('seq', code);
            }

            onAction(formData)
                .then((res) => resultChecker({ res, redirect: () => navigate(URL.COMMUNITY_FREE), type: 'insert' }))
                .catch((err) => console.log('useCreateFreeBoardMutation ERROR => ', err));
        },
        [image?.data, image?.type, editorData, watch, code, onAction, navigate]
    );

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Grid container sx={{ border: '1px solid #dee2e6', mt: 2 }}>
                <Grid item xs={12}>
                    <Typography
                        variant="subtitle1"
                        fontSize={18}
                        sx={{
                            backgroundColor: '#f5f5f5',
                            padding: '14px 10px'
                        }}
                    >
                        {t('menu_free_board')}
                    </Typography>
                </Grid>
            </Grid>

            {/* row-1 */}
            <Grid container sx={FormLabelStyle?.grayCol}>
                <Grid item xs={1.5} height={'100%'}>
                    <Typography sx={FormLabelStyle?.grayLabel}>{t('label_created_by')}</Typography>
                </Grid>
                <Grid item xs={10.5} sx={{ p: 1, alignSelf: 'center' }}>
                    <Typography>{dataDetails?.data?.fullname ? dataDetails?.data?.fullname : data?.content?.fullname}</Typography>
                </Grid>
            </Grid>

            {/* row-2 */}
            <Grid container sx={FormLabelStyle?.grayCol}>
                <CustomControllerInputs
                    control={control}
                    label={t('label_title')}
                    name="title"
                    sx={{ width: '700px' }}
                    error={errors['title']}
                />
            </Grid>

            {/* row-3 */}
            <Grid container sx={FormLabelStyle?.grayCol}>
                <Controller
                    name="divisionCd"
                    control={control}
                    render={({ field }) => (
                        <Grid item container xs={12} display={'flex'} alignItems={'center'}>
                            <Grid item xs={1.5} height={'100%'}>
                                <Typography sx={FormLabelStyle?.grayLabel}>{t('category')}</Typography>
                            </Grid>
                            <Grid item xs={10.5} sx={{ p: 1 }}>
                                <FormRadioButton
                                    loading={isLoading}
                                    data={freeBoardData?.data?.map((e) => ({
                                        code: e.code,
                                        code_eng_nm: e[i18n.language] === 'kr' ? e.codeNm : e.codeEngNm
                                    }))}
                                    {...field}
                                />
                                <FormHelperText error sx={{ position: 'absolute', bottom: -18, fontSize: 11, left: -10 }}>
                                    {errors['divisionCd'] ? errors['divisionCd']?.message : 'divionCd is required'}
                                </FormHelperText>
                            </Grid>
                        </Grid>
                    )}
                />
            </Grid>

            {/* row-4 */}
            <Grid container sx={FormLabelStyle?.grayCol}>
                <Grid item container xs={12} display={'flex'} alignItems={'center'}>
                    <Grid item xs={1.5} height={'100%'}>
                        <Typography sx={FormLabelStyle?.grayLabel}>{t('body')}</Typography>
                    </Grid>
                    <Grid item xs={10.5} sx={{ p: 1 }}>
                        <FormTextArea
                            id="content"
                            name="content"
                            defaultValue={dataDetails?.data?.content}
                            getEditorData={(e) => setEditorData(e)}
                            loading={isLoading}
                        />
                    </Grid>
                </Grid>
            </Grid>

            {/* row-5 */}
            <Grid container sx={FormLabelStyle?.grayCol}>
                <Grid item container xs={6} display={'flex'} alignItems={'center'}>
                    <Grid item xs={3} height={'100%'}>
                        <Typography sx={FormLabelStyle?.grayLabel}>{t('attachment_file')}</Typography>
                    </Grid>
                    <Grid item xs={9} sx={{ p: 1 }}>
                        <FileUploader
                            onChange={(e) => setImage({ type: 'local', data: e.target.files[0] })}
                            value={image?.data}
                            type={image?.type}
                            error={imgHelperText ? true : undefined}
                            // helperText={imgHelperText}
                            inputProps={{ accept: 'image/png, image/gif, image/jpeg, image/jpg' }}
                        />
                    </Grid>
                </Grid>
            </Grid>

            {/* row-6 */}
            <Grid container sx={FormLabelStyle?.grayCol}>
                <Grid item xs={1.5} height={'100%'}>
                    <Typography sx={FormLabelStyle?.grayLabel}>{t('label_register_dt')}</Typography>
                </Grid>
                <Grid item xs={10.5} sx={{ p: 1, alignSelf: 'center' }}>
                    <Typography>{dayjs(dataDetails?.data?.createdDate).format('YYYY-MM-DD HH:MM')}</Typography>
                </Grid>
            </Grid>

            {/*BUTTONS*/}
            <Grid item xs={12} sx={{ mt: 2 }} textAlign="right">
                {dataYN && (
                    <DeleteButton
                        loading={resultAction?.isLoading}
                        disabled={resultAction?.isLoading}
                        deleteFunc={deleteMutation}
                        to={URL.COMMUNITY_FREE}
                        code={code}
                        sx={{ mr: 2 }}
                    />
                )}
                <SaveButton loading={resultAction?.isLoading} disabled={resultAction?.isLoading} />
            </Grid>
        </form>
    );
};

export default FreeBoardForm;
