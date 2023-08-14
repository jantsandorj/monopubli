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
import { Grid, Typography, FormGroup, InputAdornment, IconButton, Input } from '@mui/material';

// COMPONENTS
import { FormLabelStyle } from 'components/button/style';
import { SaveButton, FormCmmCodeSelect, FormTextArea } from 'components';
import ValidationType from 'components/validation/validationType';
import { FileUploader } from 'components/input/FileUploader';

// OTHER
import URL from 'api/url';
import { Add, Remove } from '@mui/icons-material';
import { useGetCommonFilterCodeQuery } from 'store/commonCodeApi';
import CustomInput from 'components/input/CustomInput';

//CONSTANTS
const requiredText = 'label_field_required';

const formDefaultValues = {
    countryCd: 'ALL',
    levelCd: 'ALL',
    positionCd: 'ALL',
    skillCd: 'ALL',
    email: '',
    password: '',
    username: '',
    adminNote: ''
};

//PAGE
const WorkerForm = ({ mutation, data: dataDetails, code, isLoading }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [dataYN, setDataYN] = useState(false);
    const [onAction, resultAction] = mutation();

    const { data: allSkillList } = useGetCommonFilterCodeQuery('WORKER_SKILL');
    const { PasswordValid, VerifyPasswordValid, EmailValid } = ValidationType();

    const validateSchema = yup.object({
        countryCd: yup
            .string()
            .test('isRequired', t(requiredText), (val) => val != 'ALL')
            .min(1)
            .max(100, t('error.countryCd.limit')),
        levelCd: yup
            .string()
            .test('isRequired', t(requiredText), (val) => val != 'ALL')
            .min(1)
            .max(100, t('error.levelCd.limit')),
        positionCd: yup
            .string()
            .test('isRequired', t(requiredText), (val) => val != 'ALL')
            .min(1)
            .max(100, t('error.positionCd.limit')),
        skillCd: yup
            .string()
            .test('isRequired', t(requiredText), (val) => val != 'ALL')
            .min(1)
            .max(100, t('error.skillCd.limit')),
        username: yup.string().required(t(requiredText)).min(1).max(100),
        password: !dataYN && PasswordValid(' useg ntr oruul'),
        verify_password: !dataYN && VerifyPasswordValid(),
        email: EmailValid()
    });

    const [pcImage, setPcImage] = useState();
    const [skillList, setSkillList] = useState([]);
    const [imgHelperText, setImgHelperText] = useState();
    const [editorData, setEditorData] = useState('');

    const {
        control,
        handleSubmit,
        getValues,
        setValue,
        formState: { errors }
    } = useForm({
        mode: 'onBlur',
        defaultValues: formDefaultValues,
        resolver: yupResolver(validateSchema)
    });

    useEffect(() => {
        setDataYN(dataDetails?.status === 200);

        if (dataDetails?.status === 200) {
            setValue('seq', dataDetails?.content?.seq);
            setValue('countryCd', dataDetails?.content?.countryCd);
            setValue('positionCd', dataDetails?.content?.positionCd);
            setValue('email', dataDetails?.content?.email);
            setValue('password', dataDetails?.content?.password);
            setValue('username', dataDetails?.content?.username);
            setValue('levelCd', dataDetails?.content?.levelCd);
            setValue('adminNote', dataDetails?.content?.adminNote);

            setPcImage({ type: 'server', data: dataDetails?.content?.imageAtch });
            setSkillList(dataDetails?.content?.skillList);

            setEditorData(dataDetails?.content?.adminNote);
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

            const newData = {
                ...values,
                skill: skillList,
                seq: code ?? '',
                file: pcImage?.type === 'local' ? pcImage?.data : null,
                adminNote: editorData
            };
            console.log('newData', newData);

            let formData = new FormData();
            Object.keys(newData).forEach((key) => {
                if (newData[key]) formData.append(key, newData[key]);
            });

            onAction(formData)
                .then((res) => resultChecker({ res, redirect: () => navigate(URL.WORKER), type: 'insert' }))
                .catch((err) => console.log('useCreateWorkerMutation ERROR => ', err));
        },
        [skillList, editorData, pcImage, onAction, navigate]
    );

    const addSkill = () => {
        getValues('skillCd') && getValues('skillCd') != 'ALL' && setSkillList([...skillList, getValues('skillCd')]);
    };

    const removeSkill = (id) => {
        let temp = skillList.filter((skill) => skill != id);
        setSkillList(temp);
    };

    const findCorName = (id, column, list) => {
        if (list && list.length > 0) {
            const item = list.find((item) => id === item.code);
            return item[column];
        }
        return '';
    };

    return (
        <form onSubmit={handleSubmit(submit)} style={{ borderTop: '1px solid #dee2e6' }}>
            <Grid container sx={FormLabelStyle?.grayCol}>
                {/*country*/}
                <Controller
                    name="countryCd"
                    control={control}
                    render={({ field }) => (
                        <CustomInput type="select" groupName="COUNTRY" label={t('label_country')} error={errors['countryCd']} {...field} />
                    )}
                />
                {/*position*/}
                <Controller
                    name="positionCd"
                    control={control}
                    render={({ field }) => (
                        <CustomInput
                            type="select"
                            groupName="POSITION_TYPE"
                            label={t('label_position')}
                            error={errors['positionCd']}
                            {...field}
                        />
                    )}
                />
            </Grid>

            <Grid container sx={FormLabelStyle?.grayCol}>
                {/*email*/}
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <CustomInput type="email" groupName="COUNTRY" label={t('column_email')} error={errors['email']} {...field} />
                    )}
                />
                {/*username*/}
                <Controller
                    name="username"
                    control={control}
                    render={({ field }) => <CustomInput type="text" label={t('column_name')} error={errors['username']} {...field} />}
                />
            </Grid>

            {!dataYN && (
                <Grid container sx={FormLabelStyle?.grayCol}>
                    {/*pass*/}
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => <CustomInput type="password" label={t('password')} error={errors['password']} {...field} />}
                    />
                    <Controller
                        name="verify_password"
                        control={control}
                        render={({ field }) => (
                            <CustomInput type="password" label={t('password_confirm')} error={errors['verify_password']} {...field} />
                        )}
                    />
                </Grid>
            )}

            {/*tumbnail*/}
            <Grid container sx={FormLabelStyle?.grayCol}>
                <Grid item container xs={6} display={'flex'} alignItems={'center'}>
                    <Grid item xs={3} height={'100%'}>
                        <Typography sx={FormLabelStyle?.grayLabel}>{t('column_thumbnail')}</Typography>
                    </Grid>
                    <Grid item xs={9} sx={{ p: 1 }}>
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
                </Grid>
            </Grid>

            <Grid container sx={FormLabelStyle?.grayCol}>
                {/*skill*/}
                <Grid item container xs={6} display={'flex'} alignItems={'center'}>
                    <Grid item xs={3} height={'100%'}>
                        <Typography sx={FormLabelStyle?.grayLabel}>{t('column_skill')}</Typography>
                    </Grid>
                    <Grid item xs={9} sx={{ p: 1 }}>
                        <Controller
                            name="skillCd"
                            control={control}
                            render={({ field }) => (
                                <FormCmmCodeSelect
                                    all
                                    groupName="WORKER_SKILL"
                                    error={errors?.skillCd ? true : undefined}
                                    helperText={errors?.skillCd?.message}
                                    disabled={resultAction?.isLoading}
                                    sx={{ minWidth: '251px' }}
                                    {...field}
                                />
                            )}
                        />
                        <IconButton onClick={addSkill}>
                            <Add />
                        </IconButton>
                        {skillList.map((skill, index) => (
                            <FormGroup key={index} variant="contained" aria-label="outlined primary button group">
                                <Input
                                    style={{ width: '251px', margin: '20px 0 0 0' }}
                                    variant="standard"
                                    read-only
                                    value={findCorName(skill, 'codeDescript', allSkillList?.data)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => {
                                                    removeSkill(skill);
                                                }}
                                            >
                                                <Remove />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormGroup>
                        ))}
                    </Grid>
                </Grid>
                {/*level*/}
                <Controller
                    name="levelCd"
                    control={control}
                    render={({ field }) => (
                        <CustomInput
                            type="select"
                            groupName="WORKER_LEVEL"
                            label={t('column_level')}
                            error={errors['levelCd']}
                            {...field}
                        />
                    )}
                />
            </Grid>

            <Grid container sx={FormLabelStyle?.grayCol}>
                <Grid item container xs={12} display={'flex'} alignItems={'center'}>
                    <Grid item xs={1.5} height={'100%'}>
                        <Typography sx={FormLabelStyle?.grayLabel}>{t('body')}</Typography>
                    </Grid>
                    <Grid item xs={10.5} sx={{ p: 1 }}>
                        <FormTextArea
                            id="adminNote"
                            name="adminNote"
                            defaultValue={dataDetails?.content?.adminNote}
                            getEditorData={(e) => setEditorData(e)}
                            loading={isLoading}
                        />
                    </Grid>
                </Grid>
            </Grid>

            {/*BUTTONS*/}
            <Grid item xs={12} textAlign="right">
                <SaveButton disabled={resultAction?.isLoading} />
            </Grid>
        </form>
    );
};

export default WorkerForm;
