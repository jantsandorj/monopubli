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
import { Grid, Typography, Button, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// COMPONENTS
import { FormLabelStyle } from 'components/button/style';
import { SaveButton } from 'components';

// OTHER
import URL from 'api/url';
import dayjs from 'dayjs';
import CustomControllerInputs from 'components/input/CustomControllerInputs';
import WorkersModal from './workersModal';

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
const ConsultingBasicForm = ({ mutation, data: dataDetails, code, isLoading }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [onAction, resultAction] = mutation();
    const validateSchema = yup.object({});
    const [pcImage, setPcImage] = useState();
    const [modalShow, setModalShow] = useState(false);
    const [imgHelperText, setImgHelperText] = useState();
    const [editorData, setEditorData] = useState('');

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
                .catch((err) => console.log('useCreateConsultingMutation ERROR => ', err));
        },
        [editorData, pcImage, onAction, navigate]
    );

    return (
        <>
            <form onSubmit={handleSubmit(submit)} style={{ borderTop: '1px solid #dee2e6' }}>
                <Grid container sx={FormLabelStyle?.grayCol}>
                    <CustomControllerInputs
                        control={control}
                        type="select"
                        label={t('status')}
                        groupName="COUNTRY"
                        name="countryCd"
                        error={errors['countryCd']}
                    />
                </Grid>

                <Grid container sx={FormLabelStyle?.grayCol}>
                    <Grid item container xs={6} display={'flex'} alignItems={'center'}>
                        <Grid item xs={3} height={'100%'}>
                            <Typography sx={FormLabelStyle?.grayLabel}>Registration date</Typography>
                        </Grid>
                        <Grid item xs={9} sx={{ p: 1 }}>
                            {dataDetails?.createdDate}
                        </Grid>
                    </Grid>
                    <Grid item container xs={6} display={'flex'} alignItems={'center'}>
                        <Grid item xs={3} height={'100%'}>
                            <Typography sx={FormLabelStyle?.grayLabel}>Finish date</Typography>
                        </Grid>
                        <Grid item xs={9} sx={{ p: 1 }}>
                            {dataDetails?.userEstimatedEndDate}
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container sx={FormLabelStyle?.grayCol}>
                    <CustomControllerInputs control={control} label={t('Down payment')} name="downPayment" error={errors['downPayment']} />

                    <Grid item container xs={6} display={'flex'} alignItems={'center'}>
                        <Grid item xs={3} height={'100%'}>
                            <Typography sx={FormLabelStyle?.grayLabel}>Est/Billing date</Typography>
                        </Grid>
                        <Grid item xs={9} sx={{ p: 1 }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Controller
                                    control={control}
                                    name={'start'}
                                    render={({ field }) => (
                                        <DatePicker
                                            {...field}
                                            onChange={(e) => field.onChange(dayjs(e).format('YYYY-MM-DD'))}
                                            inputFormat={'YYYY-MM-DD'}
                                            format={'YYYY-MM-DD'}
                                            views={['year', 'month', 'day']}
                                            renderInput={(params) => <TextField sx={{ width: '200px' }} size="small" {...params} />}
                                        />
                                    )}
                                />
                                <span style={{ margin: '0px 10px' }}>/</span>
                                <Controller
                                    control={control}
                                    name={'end'}
                                    render={({ field }) => (
                                        <DatePicker
                                            {...field}
                                            onChange={(e) => field.onChange(dayjs(e).format('YYYY-MM-DD'))}
                                            inputFormat={'YYYY-MM-DD'}
                                            format={'YYYY-MM-DD'}
                                            views={['year', 'month', 'day']}
                                            renderInput={(params) => <TextField sx={{ width: '200px' }} size="small" {...params} />}
                                        />
                                    )}
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container sx={FormLabelStyle?.grayCol}>
                    <CustomControllerInputs
                        control={control}
                        label={t('Middle payment')}
                        name="middlePayment"
                        error={errors['middlePayment']}
                    />
                    <Grid item container xs={6} display={'flex'} alignItems={'center'}>
                        <Grid item xs={3} height={'100%'}>
                            <Typography sx={FormLabelStyle?.grayLabel}>Est/Billing date</Typography>
                        </Grid>
                        <Grid item xs={9} sx={{ p: 1 }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Controller
                                    control={control}
                                    name={'start'}
                                    render={({ field }) => (
                                        <DatePicker
                                            {...field}
                                            onChange={(e) => field.onChange(dayjs(e).format('YYYY-MM-DD'))}
                                            inputFormat={'YYYY-MM-DD'}
                                            format={'YYYY-MM-DD'}
                                            views={['year', 'month', 'day']}
                                            renderInput={(params) => <TextField sx={{ width: '200px' }} size="small" {...params} />}
                                        />
                                    )}
                                />
                                <span style={{ margin: '0px 10px' }}>/</span>
                                <Controller
                                    control={control}
                                    name={'end'}
                                    render={({ field }) => (
                                        <DatePicker
                                            {...field}
                                            onChange={(e) => field.onChange(dayjs(e).format('YYYY-MM-DD'))}
                                            inputFormat={'YYYY-MM-DD'}
                                            format={'YYYY-MM-DD'}
                                            views={['year', 'month', 'day']}
                                            renderInput={(params) => <TextField sx={{ width: '200px' }} size="small" {...params} />}
                                        />
                                    )}
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container sx={FormLabelStyle?.grayCol}>
                    <CustomControllerInputs control={control} label={t('Balance')} name="balance" error={errors['balance']} />
                    <Grid item container xs={6} display={'flex'} alignItems={'center'}>
                        <Grid item xs={3} height={'100%'}>
                            <Typography sx={FormLabelStyle?.grayLabel}>Est/Billing date</Typography>
                        </Grid>
                        <Grid item xs={9} sx={{ p: 1 }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Controller
                                    control={control}
                                    name={'start'}
                                    render={({ field }) => (
                                        <DatePicker
                                            {...field}
                                            onChange={(e) => field.onChange(dayjs(e).format('YYYY-MM-DD'))}
                                            inputFormat={'YYYY-MM-DD'}
                                            format={'YYYY-MM-DD'}
                                            views={['year', 'month', 'day']}
                                            renderInput={(params) => <TextField sx={{ width: '200px' }} size="small" {...params} />}
                                        />
                                    )}
                                />
                                <span style={{ margin: '0px 10px' }}>/</span>
                                <Controller
                                    control={control}
                                    name={'end'}
                                    render={({ field }) => (
                                        <DatePicker
                                            {...field}
                                            onChange={(e) => field.onChange(dayjs(e).format('YYYY-MM-DD'))}
                                            inputFormat={'YYYY-MM-DD'}
                                            format={'YYYY-MM-DD'}
                                            views={['year', 'month', 'day']}
                                            renderInput={(params) => <TextField sx={{ width: '200px' }} size="small" {...params} />}
                                        />
                                    )}
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container sx={FormLabelStyle?.grayCol}>
                    <Grid item container xs={12} display={'flex'} alignItems={'center'}>
                        <Grid item xs={1.5} height={'100%'}>
                            <Typography sx={FormLabelStyle?.grayLabel}>Assigning a person in charge</Typography>
                        </Grid>
                        <Grid item xs={10.5} sx={{ p: 1 }}>
                            <Button onClick={() => setModalShow(!modalShow)}>Select manager</Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container sx={FormLabelStyle?.grayCol}>
                    <Grid item container xs={6} display={'flex'} alignItems={'center'}>
                        <Grid item xs={3} height={'100%'}>
                            <Typography sx={FormLabelStyle?.grayLabel}>Estimate sheet</Typography>
                        </Grid>
                        <Grid item xs={9} sx={{ p: 1 }}>
                            estimate.xlsx
                        </Grid>
                    </Grid>
                    <CustomControllerInputs
                        type="date"
                        setValue={setValue}
                        control={control}
                        label={t('Estimated date of finish')}
                        name="formattedCreateDate"
                        error={errors['formattedCreateDate']}
                    />
                </Grid>

                <Grid container sx={FormLabelStyle?.grayCol}>
                    <CustomControllerInputs
                        type="textArea"
                        full
                        control={control}
                        label={t('Admins meno')}
                        name="adminMemo"
                        error={errors['adminMemo']}
                    />
                </Grid>

                {/*BUTTONS*/}
                <Grid item xs={12} textAlign="right">
                    <SaveButton disabled={resultAction?.isLoading} />
                </Grid>
            </form>
            {modalShow && <WorkersModal modalShow />}
        </>
    );
};

export default ConsultingBasicForm;
