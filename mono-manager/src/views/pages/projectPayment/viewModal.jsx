import React from 'react';
import {
    Grid,
    Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CustomModal, CloseButton, DetailButton} from 'components';
import { FormLabelStyle } from 'components/button/style';
import { findCorName, addComma } from 'utils/functions/common';
import { URL } from 'api/Urls';

const ViewModal = ({ open, setOpen, paymentData, projectData, memberTypeData, projectStatusData, vatTypeData, projectPaymentTypeData, projectPaymentStatusData }) => {

    const { t, i18n } = useTranslation();
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <CustomModal open={open} onClose={handleClose} BackdropProps={{ onClick: handleClose }} width={1000}>
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
                            {t('project_payment_transaction_detail')}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container sx={FormLabelStyle?.grayCol}>
                    <Grid item xs={2} height={'100%'}>
                        <Typography sx={FormLabelStyle?.grayLabel}> {t("project_name")}</Typography>
                    </Grid>
                    <Grid item xs={8} height={'100%'}>
                        <Typography sx={FormLabelStyle?.textPTag}> {projectData?.name}</Typography>
                    </Grid>
                    <Grid item xs={2} sx={{textAlign: 'center'}}>
                        <DetailButton to={URL.PROJECT_DETAIL + '/' + projectData?.seq} />
                    </Grid>
                </Grid>

                <Grid container sx={FormLabelStyle?.grayCol}>
                    <Grid item container xs={6}>
                        <Grid item xs={4} height={'100%'}>
                            <Typography sx={FormLabelStyle?.grayLabel}> {t("project_user_id")}</Typography>
                        </Grid>
                        <Grid item xs={8} height={'100%'}>
                            <Typography sx={FormLabelStyle?.textPTag}> {projectData?.User?.username}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={6}>
                        <Grid item xs={4} height={'100%'}>
                            <Typography sx={FormLabelStyle?.grayLabel}> {t("project_user_type")}</Typography>
                        </Grid>
                        <Grid item xs={8} height={'100%'}>
                            <Typography sx={FormLabelStyle?.textPTag} >{findCorName(projectData?.User?.memberTypeCd, i18n.language == 'kr' ? 'codeNm' : 'codeEngNm', memberTypeData?.data)} </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container sx={FormLabelStyle?.grayCol}>
                    <Grid item container xs={6}>
                        <Grid item xs={4} height={'100%'}>
                            <Typography sx={FormLabelStyle?.grayLabel}> {t("project_user_fullname")}</Typography>
                        </Grid>
                        <Grid item xs={8} height={'100%'}>
                            <Typography sx={FormLabelStyle?.textPTag}> {projectData?.User?.fullname}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={6}>
                        <Grid item xs={4} height={'100%'}>
                            <Typography sx={FormLabelStyle?.grayLabel}> {t("project_status1")}</Typography>
                        </Grid>
                        <Grid item xs={8} height={'100%'}>
                            <Typography sx={FormLabelStyle?.textPTag} >{findCorName(projectData?.statusCd, i18n.language == 'kr' ? 'codeNm' : 'codeEngNm', projectStatusData?.data)}</Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container sx={
                            projectData?.User?.memberTypeCd === 'MT_02'
                                ? FormLabelStyle?.grayCol
                                : { ...FormLabelStyle?.grayCol, display: 'none' }
                        }>
                    <Grid item container xs={6}>
                        <Grid item xs={4} height={'100%'}>
                            <Typography sx={FormLabelStyle?.grayLabel}> {t("business_name")}</Typography>
                        </Grid>
                        <Grid item xs={8} height={'100%'}>
                            <Typography sx={FormLabelStyle?.textPTag}> {projectData?.User?.Company?.name}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={6}>
                        <Grid item xs={4} height={'100%'}>
                            <Typography sx={FormLabelStyle?.grayLabel}> {t("ceo")}</Typography>
                        </Grid>
                        <Grid item xs={8} height={'100%'}>
                            <Typography sx={FormLabelStyle?.textPTag} > {projectData?.User?.Company?.ceoName} </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container sx={projectData?.User?.memberTypeCd == 'MT_02' ? {...FormLabelStyle?.grayCol} : { display: 'none' }}>
                    <Grid item xs={2} height={'100%'}>
                        <Typography sx={FormLabelStyle?.grayLabel}> {t("company_registration_number")}</Typography>
                    </Grid>
                    <Grid item xs={10} height={'100%'}>
                        <Typography sx={FormLabelStyle?.textPTag}> {projectData?.User?.Company?.registerNumber}</Typography>
                    </Grid>
                </Grid>

                <Grid container sx={FormLabelStyle?.grayCol}>
                    <Grid item container xs={6}>
                        <Grid item xs={4} height={'100%'}>
                            <Typography sx={FormLabelStyle?.grayLabel}> {t("contact_number")}</Typography>
                        </Grid>
                        <Grid item xs={8} height={'100%'}>
                            <Typography sx={FormLabelStyle?.textPTag}> {projectData?.User?.Company?.companyPhone != '' ? projectData?.User?.Company?.companyPhone : projectData?.User?.phone}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={6}>
                        <Grid item xs={4} height={'100%'}>
                            <Typography sx={FormLabelStyle?.grayLabel}> {t("column_email")}</Typography>
                        </Grid>
                        <Grid item xs={8} height={'100%'}>
                            <Typography sx={FormLabelStyle?.textPTag} > {projectData?.User?.Company && projectData?.User?.Company?.companyEmail != '' ? projectData?.User?.Company?.companyEmail : projectData?.User?.email}</Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container sx={FormLabelStyle?.grayCol}>
                    <Grid item xs={2} height={'100%'}>
                        <Typography sx={FormLabelStyle?.grayLabel}> {t("project_payment_billing_type")}</Typography>
                    </Grid>
                    <Grid item xs={10} height={'100%'}>
                        <Typography sx={FormLabelStyle?.textPTag}>{findCorName(paymentData?.paymentType, i18n.language == 'kr' ? 'codeNm' : 'codeEngNm', projectPaymentTypeData?.data)}</Typography>
                    </Grid>
                </Grid>

                <Grid container sx={FormLabelStyle?.grayCol}>
                    <Grid item container xs={6}>
                        <Grid item xs={4} height={'100%'}>
                            <Typography sx={FormLabelStyle?.grayLabel}> {t("project_payment_billing_amount")}</Typography>
                        </Grid>
                        <Grid item xs={8} height={'100%'}>
                            <Typography sx={FormLabelStyle?.textPTag}> {addComma(paymentData?.price)} {t('won')}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={6}>
                        <Grid item xs={4} height={'100%'}>
                            <Typography sx={FormLabelStyle?.grayLabel}> {t("project_payment_billing_date")}</Typography>
                        </Grid>
                        <Grid item xs={8} height={'100%'}>
                            <Typography sx={FormLabelStyle?.textPTag} > {paymentData?.actualDate}</Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container sx={FormLabelStyle?.grayCol}>
                    <Grid item container xs={6}>
                        <Grid item xs={4} height={'100%'}>
                            <Typography sx={FormLabelStyle?.grayLabel}> {t("project_vat_type")}</Typography>
                        </Grid>
                        <Grid item xs={8} height={'100%'}>
                            <Typography sx={FormLabelStyle?.textPTag}>{findCorName(projectData?.vatTypeCd, i18n.language == 'kr' ? 'codeNm' : 'codeEngNm', vatTypeData?.data)}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={6}>
                        <Grid item xs={4} height={'100%'}>
                            <Typography sx={FormLabelStyle?.grayLabel}> {t("project_payment_situation")}</Typography>
                        </Grid>
                        <Grid item xs={8} height={'100%'}>
                            <Typography sx={FormLabelStyle?.textPTag}> {paymentData?.situation == 'Y' ? 'Publish' : 'Unpublish'}</Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }} marginTop={2}>
                    <CloseButton onClick={() => setOpen(false)} />
                </Grid>
            </CustomModal>
        </>
    );
};

export default ViewModal;
