import * as yup from 'yup';
import { useCKEditor } from 'ckeditor4-react';
import { useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Controller, useForm } from 'react-hook-form';
import { useState, useEffect, useCallback } from 'react';
import { Grid, Paper, Box, Typography, Select, MenuItem, Skeleton, Modal, FormHelperText } from '@mui/material';
import { IconSend } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';

import Loader from 'components/Loader';
import Snackbar from 'components/Snackbar';
import MainCard from 'components/cards/MainCard';
import { BackButton } from 'components/button/BackButton';
import { ModalChild } from 'components/Modal/ModalChild';
import { ReceiverList, CancelList } from 'components/ReceiverList';
import CommonCodeSelect from 'components/select/CommonCodeSelect';
import { FormInput, Item, FormRadioButton, Button } from 'components';

import { useUser } from 'hooks';
import { useGetMailsQuery } from 'api/content/mailTemplate';
import { useGetMailReveiverAdminsQuery, useGetMailReveiverUsersQuery, useSendMailMutation } from 'api/content/mailSendGroup';
import resultChecker from 'utils/functions/resultChecker';
import { useGetCommonFilterCodeQuery } from 'store/commonCodeApi';
import moment from 'moment';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';

//CONSTANTS
const requiredText = 'this field is required';

const validateSchema = yup.object({
    targetGroup: yup.string().required(requiredText).min(1).max(100),
    subject: yup.string().required(requiredText).min(1),
    sendType: yup.string().required(requiredText).min(1).max(1),
    recipientCc: yup
        .string()
        .required(requiredText)
        .test('recipientCc', 'Invalid email list', function (value) {
            if (!value) return true;
            const emails = value.split(',');
            for (let i = 0; i < emails.length; i++) {
                const email = emails[i].trim();
                if (!yup.string().email().isValidSync(email)) {
                    return false;
                }
            }
            return true;
        })
});

const formDefaultValues = {
    targetGroup: 'ALL',
    subject: '',
    sendType: 'I',
    recipientCc: '',
    schedDate: ''
};

//PAGE
const SendGroupMailCreatePage = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const { userData } = useUser();

    const { data: templates, isLoading: tempLoading } = useGetMailsQuery(new URLSearchParams({ page: 0, size: 10 }).toString());
    const { data: targetData } = useGetCommonFilterCodeQuery('MAIL_TARGET');
    const { data: admins, isLoading: adminsLoading } = useGetMailReveiverAdminsQuery();
    const { data: users, isLoading: usersLoading } = useGetMailReveiverUsersQuery();
    const [onAction, resultAction] = useSendMailMutation();

    const [tempSeq, setTempSeq] = useState('');
    const [sendNow, setSendNow] = useState('I');
    const [tempSeqError, setTempSeqError] = useState();
    const [openModal, setOpenModal] = useState();
    const [target, setTarget] = useState('ALL');
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [targetUsers, setTargetUsers] = useState([]);

    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        defaultValues: formDefaultValues,
        resolver: yupResolver(validateSchema)
    });

    const [element, setElement] = useState();
    const { editor } = useCKEditor({
        element,
        config: {
            extraAllowedContent: ['svg(class,focusable,aria-hidden,viewBox)', 'path(*)', 'span(*)', '*(*)', '*{*}', 'div(*)', 'img(*)'],
            allowedContent: true
        }
    });

    const submit = useCallback(
        (values) => {
            if (!tempSeq) {
                setTempSeqError('Please select mail template name.');
                return;
            }
            if (!editor.getData()) {
                Snackbar.error('Please enter content.');
                return;
            }
            const obj = {
                mailTemplateSeq: tempSeq,
                recipientCc: values?.recipientCc,
                sendType: sendNow,
                subject: values?.subject,
                content: editor.getData(),
                targetGroup: values.targetGroup,
                schedDate: sendNow !== 'I' && moment(new Date(values.schedDate)).format('yyyy-MM-DD HH:mm')
            };

            let formData = new FormData();
            Object.keys(obj).forEach((key) => {
                if (obj[key]) formData.append(key, obj[key]);
            });

            onAction(formData)
                .then((res) => resultChecker({ res }))
                .catch((err) => console.log('useSendMailMutation ERROR => ', err));
        },
        [tempSeq, editor, sendNow, onAction]
    );

    const onClose = () => {
        setOpenModal(false);
    };

    const onSelect = () => {
        let recipientCc = '';
        selectedUsers.forEach((a, index) => (recipientCc += (index === 0 ? '' : ',') + a.username));
        setValue('recipientCc', recipientCc);
        setOpenModal(false);
    };

    useEffect(() => {
        if (tempSeq && editor && templates) {
            const data = templates?.content?.find((a) => +a.seq === +tempSeq);
            setValue('targetGroup', data?.targetGroup.toString());
            setValue('subject', data?.subject);
            setValue('schedDate', dayjs().add(1, 'day'));
            editor.setData(data?.content);
        }
    }, [tempSeq, templates, editor, element, setValue]);

    //MODAL DATA
    useEffect(() => {
        if (!target || !admins || !users) return;
        let adminData = admins?.content.map((a) => ({ ...a, seq: 'ADMIN-' + a.seq }));
        let userData = admins?.content.map((a) => ({ ...a, seq: 'USER-' + a.seq }));
        if (target === 'ALL') setTargetUsers([...adminData, ...userData]);
        if (target === 'ADMIN') setTargetUsers(adminData);
        if (target === 'USER') setTargetUsers(userData);
    }, [admins, target, users]);

    useEffect(() => {
        setTempSeq(location.search?.split('=')[1]);
    }, [location]);

    return (
        <MainCard title={<BackButton text={t('send_mail')} disabled={resultAction?.isLoading} />}>
            {resultAction?.isLoading && <Loader />}
            <Modal open={openModal} onClose={onClose}>
                <ModalChild close={onClose} title="Receiver select" width={900}>
                    <div>
                        <Grid container justifyContent="space-between" spacing={2}>
                            <Grid item xs={12}>
                                <CommonCodeSelect
                                    label={t('select_user_type')}
                                    fullWidth
                                    groupName="MAIL_TARGET"
                                    onChange={(e) => {
                                        setTargetUsers([]);
                                        setTarget(e.target.value);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <ReceiverList data={targetUsers} selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers} />
                            </Grid>
                            <Grid item xs={6}>
                                <CancelList data={selectedUsers} setSelectedUsers={setSelectedUsers} />
                            </Grid>
                            <Grid item xs={12} textAlign="right">
                                <Button onClick={onSelect}>{t('select')}</Button>
                            </Grid>
                        </Grid>
                    </div>
                </ModalChild>
            </Modal>
            <Box variant="body2" component={Paper}>
                <form onSubmit={handleSubmit(submit)}>
                    <Grid container spacing={2} alignItems="center">
                        {/*username*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('mail_creator')}</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10}>
                            <Item>
                                <Typography variant="subtitle1">{userData?.username ?? ''}</Typography>
                            </Item>
                        </Grid>

                        {/*targetGroup*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('mail_target')}</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={3}>
                            <Controller
                                name="targetGroup"
                                control={control}
                                render={({ field }) => (
                                    <FormRadioButton
                                        disabled={resultAction?.isLoading}
                                        data={targetData?.data?.map((a) => ({
                                            code: a.code,
                                            code_eng_nm: a[i18n.language === 'kr' ? 'codeNm' : 'codeEngNm']
                                        }))}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={7}>
                            <Button
                                variant="outlined"
                                onClick={() => setOpenModal(true)}
                                disabled={resultAction?.isLoading || adminsLoading || usersLoading}
                            >
                                {t('mail_load')}
                            </Button>
                        </Grid>

                        {/*receiver*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('receiver')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Controller
                                name="recipientCc"
                                control={control}
                                render={({ field }) => (
                                    <FormInput
                                        disabled={resultAction?.isLoading}
                                        error={!!errors?.recipientCc}
                                        helperText={errors?.recipientCc?.message}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={6}></Grid>

                        {/*subject*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('mail_subject')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Controller
                                name="subject"
                                control={control}
                                render={({ field }) => (
                                    <FormInput
                                        disabled={resultAction?.isLoading}
                                        error={!!errors?.subject}
                                        helperText={errors?.subject?.message}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={6} />

                        {/*Template name*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('mail_template_name')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            {tempLoading ? (
                                <Skeleton animation="wave" height={60} sx={{ borderRadius: '12px' }} />
                            ) : (
                                <Select
                                    fullWidth
                                    value={tempSeq}
                                    onChange={(e) => setTempSeq(e.target.value)}
                                    disabled={resultAction?.isLoading}
                                >
                                    {templates?.content?.map((templateItem) => (
                                        <MenuItem key={templateItem.seq} value={templateItem.seq}>
                                            {templateItem.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            )}
                            {tempSeqError && !tempSeq && <FormHelperText error>{tempSeqError}</FormHelperText>}
                        </Grid>
                        <Grid item xs={6} />

                        {/*content*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('mail_content')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={10}>
                            {/* CKEditor*/}
                            <div ref={setElement} />
                            {errors?.content && errors?.content?.message && (
                                <FormHelperText error>{errors?.content?.message}</FormHelperText>
                            )}
                        </Grid>

                        {/*send type*/}
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">{t('label_send_type')} *</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Controller
                                name="sendType"
                                control={control}
                                render={({ field }) => (
                                    <FormRadioButton
                                        disabled={resultAction?.isLoading}
                                        data={[
                                            { code: 'I', code_eng_nm: 'Send email right away' },
                                            { code: 'R', code_eng_nm: 'Send reservation email' }
                                        ]}
                                        error={!!errors?.sendType}
                                        helperText={errors?.sendType?.message}
                                        {...field}
                                        value={sendNow}
                                        onChange={(e) => setSendNow(e.target.value)}
                                    />
                                )}
                            />
                        </Grid>
                        {sendNow !== 'I' && (
                            <Grid item sx={{ display: 'flex' }} xs={12}>
                                <Grid item xs={2}>
                                    <Item>
                                        <Typography variant="subtitle1">{t('send_date')} *</Typography>
                                    </Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Controller
                                        name="schedDate"
                                        control={control}
                                        render={({ field }) => (
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DateTimePicker
                                                    {...field}
                                                    ampm={false}
                                                    minDate={dayjs().add(1, 'day')}
                                                    disablePast
                                                    views={['year', 'month', 'day', 'hours', 'minutes']}
                                                />
                                            </LocalizationProvider>
                                        )}
                                    />
                                </Grid>
                            </Grid>
                        )}

                        {/*BUTTONS*/}
                        <Grid item xs={12} textAlign="right">
                            <Button
                                type="submit"
                                disabled={resultAction?.isLoading}
                                loading={resultAction?.isLoading ?? false}
                                startIcon={<IconSend size={20} />}
                            >
                                {t('send_mail')}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </MainCard>
    );
};

export default SendGroupMailCreatePage;
