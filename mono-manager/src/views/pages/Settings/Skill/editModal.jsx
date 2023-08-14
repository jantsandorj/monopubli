import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Input, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { CustomModal, CloseButton, SaveButton, FormRadioButton } from 'components';
import { Controller, useForm } from 'react-hook-form';
import CustomInput from 'components/input/CustomInput';
import * as yup from 'yup';
import { FormLabelStyle } from 'components/button/style';
import { setModalOptionsOpen } from 'store/modalSlice';

import { yupResolver } from '@hookform/resolvers/yup';
import { useCreateSkillMutation, useUpdateSkillMutation } from 'api/settings/skill';

const requiredText = 'label_field_required';
const formDefaultValues = {
    name: '',
    price: '',
    useYn: 'Y'
};

const EditModal = ({ open, setOpen, data }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const [onUpdateAction] = useUpdateSkillMutation();
    const [onCreateAction] = useCreateSkillMutation();

    const validateSchema = yup.object({
        name: yup.string().required(t(requiredText)).min(1).max(100),
        price: yup
            .string()
            .required(t(requiredText))
            .matches(/^[0-9]+$/, t('valid_field_number_only')) // regex for numbers
            .max(100),
        useYn: yup.string().required(t(requiredText)).min(1).max(100)
    });

    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        mode: 'onBlur',
        defaultValues: formDefaultValues,
        resolver: yupResolver(validateSchema)
    });

    useEffect(() => {
        if (data) {
            setValue('seq', data?.seq);
            setValue('name', data?.name);
            setValue('price', data?.price);
            setValue('useYn', data?.useYn);
        }
    }, [setValue]);

    const submit = useCallback(
        (values) => {
            const newData = {
                ...values
            };

            let formData = new FormData();
            Object.keys(newData).forEach((key) => {
                if (newData[key]) formData.append(key, newData[key]);
            });

            if (data != null) {
                onUpdateAction(formData)
                    .then((res) => {
                        if (res.data.status == 200) {
                            dispatch(
                                setModalOptionsOpen({
                                    type: 'success',
                                    onOpen: true,
                                    description: t('message.success.update')
                                })
                            );
                            setOpen(false);
                        }
                    })
                    .catch((err) => console.log('useUpdateSkillMutation ERROR => ', err));
            } else {
                onCreateAction(formData)
                    .then((res) => {
                        if (res.data.status == 200) {
                            dispatch(
                                setModalOptionsOpen({
                                    type: 'success',
                                    onOpen: true,
                                    description: t('message.success.insert')
                                })
                            );
                            setOpen(false);
                        }
                    })
                    .catch((err) => console.log('useCreateSkillMutation ERROR => ', err));
            }
        },
        [onUpdateAction, onCreateAction]
    );

    return (
        <>
            <CustomModal open={open} onClose={setOpen} width={800}>
                <form onSubmit={handleSubmit(submit)}>
                    <Input type="hidden" name="seq" value={data?.seq} />
                    <Grid container sx={{ border: '1px solid #dee2e6' }}>
                        <Grid item xs={12}>
                            <Typography
                                variant="subtitle1"
                                fontSize={18}
                                sx={{
                                    backgroundColor: '#f5f5f5',
                                    padding: '14px 10px'
                                }}
                            >
                                {t('skill_manage')}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container sx={FormLabelStyle?.grayCol}>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => <CustomInput full label={t('code_name')} error={errors['name']} {...field} />}
                        />
                    </Grid>
                    <Grid container sx={FormLabelStyle?.grayCol}>
                        <Controller
                            name="price"
                            control={control}
                            render={({ field }) => <CustomInput full label={t('unit_price')} error={errors['price']} {...field} />}
                        />
                    </Grid>

                    <Grid container sx={FormLabelStyle?.grayCol}>
                        <Controller
                            name="useYn"
                            control={control}
                            render={({ field }) => (
                                <Grid item container xs={12} display={'flex'} alignItems={'center'}>
                                    <Grid item xs={2} height={'100%'}>
                                        <Typography sx={FormLabelStyle?.grayLabel}>{t('type')}</Typography>
                                    </Grid>
                                    <Grid item xs={10} sx={{ p: 1 }}>
                                        <FormRadioButton
                                            data={[
                                                { code: 'Y', code_eng_nm: t('label_use') },
                                                { code: 'N', code_eng_nm: t('label_not_use') }
                                            ]}
                                            {...field}
                                        />
                                    </Grid>
                                </Grid>
                            )}
                        />
                    </Grid>
                    <Grid item xs={6} style={{ display: 'flex', justifyContent: 'space-between' }} marginTop={2}>
                        <CloseButton onClick={() => setOpen(false)} />
                        <SaveButton />
                    </Grid>
                </form>
            </CustomModal>
        </>
    );
};

export default EditModal;
