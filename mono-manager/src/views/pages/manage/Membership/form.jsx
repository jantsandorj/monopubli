// REACT
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

// FORM
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// MUI
import { Grid, Typography } from '@mui/material';

// COMPONENTS
import { SaveButton, FormRadioButton, DaumInput, DeleteButton } from 'components';
import ValidationType from 'components/validation/validationType';
import { FormLabelStyle } from 'components/button/style';
import { FileUploader } from 'components/input/FileUploader';

// OTHER
import { useGetCommonFilterCodeQuery } from 'store/commonCodeApi';
import URL from 'api/url';
import CustomControllerInputs from 'components/input/CustomControllerInputs';

//CONSTANTS
const requiredText = 'valid_required_txt';
const limit100 = 'error_limit_100';
const formDefaultValues = {
    memberTypeCd: 'MT_01',
    username: '',
    fullname: '',
    password: '',
    phone: '',
    email: '',
    name: '',
    ceoName: '',
    personInCharge: '',
    registerNumber: '',
    companyPhone: '',
    companyEmail: '',
    zip: '',
    addr: '',
    addrEtc: ''
};

//PAGE
const MembershipForm = ({ mutation, data: dataDetails, code, deleteMutation }) => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const { PasswordValid, VerifyPasswordValid, EmailValid } = ValidationType();
    const { data: memberTypeData, idLoading: memberTypeLoading } = useGetCommonFilterCodeQuery('MEMBER_TYPE');
    const [onAction, resultAction] = mutation();
    const [businessImage, setBusinessImage] = useState();
    const [imgHelperText, setImgHelperText] = useState();
    const [dataYN, setDataYN] = useState(false);

    const validateSchema = yup.object({
        memberTypeCd: yup.string().required(t(requiredText)).min(1).max(100, t(limit100)),
        username: yup.string().required(t(requiredText)).min(1).max(100, t(limit100)),
        fullname: yup.string().required(t(requiredText)).min(1).max(100, t(limit100)),
        password: !dataYN && PasswordValid(' useg ntr oruul'),
        verify_password: !dataYN && VerifyPasswordValid(),
        phone: yup.string().required(t(requiredText)).min(1).max(100, t(limit100)),
        email: EmailValid(),
        name: yup
            .string()
            .when('memberTypeCd', { is: 'MT_02', then: (schema) => schema.required(t(requiredText)).min(1).max(100, t(limit100)) }),
        ceoName: yup
            .string()
            .when('memberTypeCd', { is: 'MT_02', then: (schema) => schema.required(t(requiredText)).min(1).max(100, t(limit100)) }),
        personInCharge: yup
            .string()
            .when('memberTypeCd', { is: 'MT_02', then: (schema) => schema.required(t(requiredText)).min(1).max(100, t(limit100)) }),
        registerNumber: yup
            .string()
            .when('memberTypeCd', { is: 'MT_02', then: (schema) => schema.required(t(requiredText)).min(1).max(100, t(limit100)) }),
        companyPhone: yup
            .string()
            .when('memberTypeCd', { is: 'MT_02', then: (schema) => schema.required(t(requiredText)).min(1).max(100, t(limit100)) }),
        companyEmail: yup.string().when('memberTypeCd', { is: 'MT_02', then: () => EmailValid() })
    });

    const {
        control,
        handleSubmit,
        register,
        watch,
        reset,
        formState: { errors }
    } = useForm({
        mode: 'onBlur',
        defaultValues: formDefaultValues,
        resolver: yupResolver(validateSchema)
    });

    useEffect(() => {
        setDataYN(dataDetails?.content?.user?.seq || dataDetails?.content?.seq);

        if (dataDetails?.status === 200 && dataDetails?.content?.user && dataDetails?.content?.company) {
            setBusinessImage({ type: 'server', data: dataDetails?.content?.company?.imageAtch });
            return reset({
                memberTypeCd: dataDetails?.content?.user?.memberTypeCd || 'MT_02',
                username: dataDetails?.content?.user?.username || '',
                fullname: dataDetails?.content?.user?.fullname || '',
                phone: dataDetails?.content?.user?.phone || '',
                email: dataDetails?.content?.user?.email || '',
                zip: dataDetails?.content?.user?.zip || '',
                addr: dataDetails?.content?.user?.addr || '',
                addrEtc: dataDetails?.content?.user?.addrEtc || '',
                name: dataDetails?.content?.company?.name || '',
                ceoName: dataDetails?.content?.company?.ceoName || '',
                personInCharge: dataDetails?.content?.company?.personInCharge || '',
                registerNumber: dataDetails?.content?.company?.registerNumber || '',
                companyPhone: dataDetails?.content?.company?.companyPhone || '',
                companyEmail: dataDetails?.content?.company?.companyEmail || ''
            });
        }
        if (dataDetails?.status === 200 && dataDetails?.content) {
            return reset({
                memberTypeCd: dataDetails?.content?.user?.memberTypeCd || 'MT_01',
                username: dataDetails?.content?.username || '',
                fullname: dataDetails?.content?.fullname || '',
                phone: dataDetails?.content?.phone || '',
                email: dataDetails?.content?.email || '',
                zip: dataDetails?.content?.zip || '',
                addr: dataDetails?.content?.addr || '',
                addrEtc: dataDetails?.content?.addrEtc || ''
            });
        }

        return () => {};
    }, [dataDetails, reset]);

    useEffect(() => {
        if (imgHelperText && businessImage) setImgHelperText(undefined);
    }, [businessImage, imgHelperText]);

    const submit = useCallback(
        (values) => {
            if (!businessImage?.data && watch('memberTypeCd') !== 'MT_01') {
                setImgHelperText('Please upload image');
                return;
            }

            let newData = businessImage?.data
                ? {
                      ...values,
                      file: businessImage?.type === 'local' ? businessImage?.data : null,
                      seq: code ?? ''
                  }
                : { ...values, seq: code ?? '' };

            console.log('newData', newData);

            let formData = new FormData();
            for (let key in newData) {
                formData.append(key, newData[key]);
            }

            // onAction(formData)
            //     .then((res) => resultChecker({ res, redirect: () => navigate(URL.MEMBERSHIP_LIST), type: 'insert' }))
            //     .catch((err) => console.log('useCreateMembershipMutation ERROR => ', err));
        },
        [businessImage?.data, businessImage?.type, watch, code, onAction, navigate]
    );

    return (
        <form onSubmit={handleSubmit(submit)}>
            {/* Section - 1 */}
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
                        {t('basic_info')}
                    </Typography>
                </Grid>
            </Grid>

            {/* row-1 */}
            <Grid container sx={FormLabelStyle?.grayCol}>
                <Controller
                    name="memberTypeCd"
                    control={control}
                    render={({ field }) => (
                        <Grid item container xs={12} display={'flex'} alignItems={'center'}>
                            <Grid item xs={1.5} height={'100%'}>
                                <Typography sx={FormLabelStyle?.grayLabel}>{t('membership_classifications')}</Typography>
                            </Grid>
                            <Grid item xs={10.5} sx={{ p: 1 }}>
                                <FormRadioButton
                                    disabled={dataYN}
                                    loading={memberTypeLoading}
                                    data={memberTypeData?.data?.map((e) => ({
                                        code: e.code,
                                        code_eng_nm: e[i18n.language] === 'kr' ? e.codeNm : e.codeEngNm
                                    }))}
                                    {...field}
                                />
                            </Grid>
                        </Grid>
                    )}
                />
            </Grid>

            {/* row-2 */}
            <Grid container sx={FormLabelStyle?.grayCol}>
                <CustomControllerInputs control={control} label={t('id')} name="username" error={errors['username']} />
                <CustomControllerInputs control={control} label={t('full_name')} name="fullname" error={errors['fullname']} />
            </Grid>

            {/* row-3 */}
            {!dataYN && (
                <Grid container sx={FormLabelStyle?.grayCol}>
                    <CustomControllerInputs
                        control={control}
                        disabled={dataYN}
                        label={t('password')}
                        type="password"
                        name="password"
                        error={errors['password']}
                    />

                    <CustomControllerInputs
                        control={control}
                        disabled={dataYN}
                        label={t('password_confirm')}
                        type="password"
                        name="verify_password"
                        error={errors['verify_password']}
                    />
                </Grid>
            )}

            {/* row-4 */}
            <Grid container sx={FormLabelStyle?.grayCol}>
                <CustomControllerInputs
                    control={control}
                    disabled={dataYN}
                    label={t('phone_number')}
                    name="phone"
                    error={errors['phone']}
                />

                <CustomControllerInputs control={control} disabled={dataYN} label={t('email')} name="email" error={errors['email']} />
            </Grid>
            {/* row-5 */}
            <Grid container sx={FormLabelStyle?.grayCol}>
                <Grid item container xs={6} display={'flex'} alignItems={'center'}>
                    <Grid item xs={3} height={'100%'}>
                        <Typography sx={FormLabelStyle?.grayLabel}>{t('address')}</Typography>
                    </Grid>
                    <Grid item xs={9} sx={{ p: 1 }}>
                        <DaumInput register={register} />
                    </Grid>
                </Grid>
            </Grid>
            {watch('memberTypeCd') !== 'MT_01' && (
                <>
                    {/* Section - 2 */}

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
                                {t('company_info')}
                            </Typography>
                        </Grid>
                    </Grid>
                    {/* row-1 */}
                    <Grid container sx={FormLabelStyle?.grayCol}>
                        <CustomControllerInputs control={control} label={t('company_name')} name="name" error={errors['name']} />
                        <CustomControllerInputs control={control} label={t('ceo')} name="ceoName" error={errors['ceoName']} />
                    </Grid>

                    {/* row-2 */}
                    <Grid container sx={FormLabelStyle?.grayCol}>
                        <CustomControllerInputs
                            control={control}
                            label={t('person_in_charge')}
                            name="personInCharge"
                            error={errors['personInCharge']}
                        />
                        <CustomControllerInputs
                            control={control}
                            label={t('main_company_number')}
                            name="registerNumber"
                            error={errors['registerNumber']}
                        />
                    </Grid>

                    {/* row-3 */}
                    <Grid container sx={FormLabelStyle?.grayCol}>
                        <CustomControllerInputs
                            control={control}
                            label={t('business_number')}
                            name="companyPhone"
                            error={errors['companyPhone']}
                        />
                        <CustomControllerInputs
                            control={control}
                            label={t('company_email')}
                            name="companyEmail"
                            error={errors['companyEmail']}
                        />
                    </Grid>

                    {/* row-4 */}
                    <Grid container sx={FormLabelStyle?.grayCol}>
                        <Grid item container xs={6} display={'flex'} alignItems={'center'}>
                            <Grid item xs={3} height={'100%'}>
                                <Typography sx={FormLabelStyle?.grayLabel}>{t('membership_classifications')}</Typography>
                            </Grid>
                            <Grid item xs={9} sx={{ p: 1 }}>
                                <FileUploader
                                    onChange={(e) => setBusinessImage({ type: 'local', data: e.target.files[0] })}
                                    value={businessImage?.data}
                                    type={businessImage?.type}
                                    error={imgHelperText ? true : undefined}
                                    // helperText={imgHelperText}
                                    inputProps={{ accept: 'image/png, image/gif, image/jpeg, image/jpg' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            )}

            {/*BUTTONS*/}
            <Grid item xs={12} sx={{ mt: 2 }} textAlign="right">
                {dataYN && (
                    <DeleteButton
                        loading={resultAction?.isLoading}
                        disabled={resultAction?.isLoading}
                        deleteFunc={deleteMutation}
                        to={URL.CONTENT_BANNER}
                        code={code}
                        sx={{ mr: 2 }}
                    />
                )}
                <SaveButton loading={resultAction?.isLoading} disabled={resultAction?.isLoading} />
            </Grid>
        </form>
    );
};

export default MembershipForm;
