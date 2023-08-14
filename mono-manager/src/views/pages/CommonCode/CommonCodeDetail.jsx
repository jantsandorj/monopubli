import { Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, CustomModal, DeleteButton, RadioButton } from 'components';
import GetDataComponent from 'utils/functions/getDataComponent';
import { useDeleteCommonCodeMutation, useGetCommonCodeQuery } from './CommonCodeApi';

const CommonCodeDetail = ({ open, setOpen, setUpdateShow, setDetailData }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setSetData] = useState({});

    const { t } = useTranslation();

    return (
        <>
            <CustomModal width={800} open={open} onClose={() => setOpen('')}>
                {open ? (
                    <GetDataComponent code={open} mutation={useGetCommonCodeQuery} setLoading={setIsLoading} setData={setSetData} />
                ) : (
                    ''
                )}
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item xs={3}>
                            {t('code_class')} *
                        </Grid>
                        <Grid item xs={9}>
                            <TextField
                                fullWidth
                                id="codeGroup"
                                name="codeGroup"
                                type="text"
                                value={data?.data?.codeGroup}
                                disabled={true}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center" sx={{ mt: 1 }}>
                        <Grid item xs={3}>
                            {t('code_class_name')} *
                        </Grid>
                        <Grid item xs={9}>
                            <TextField
                                fullWidth
                                id="codeGroupNm"
                                name="codeGroupNm"
                                type="text"
                                value={data?.data?.codeGroupNm}
                                disabled={true}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center" sx={{ mt: 1 }}>
                        <Grid item xs={3}>
                            {t('label_code')} *
                        </Grid>
                        <Grid item xs={9}>
                            <TextField fullWidth id="code" name="code" type="text" value={data?.data?.code} disabled={true} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center" sx={{ mt: 1 }}>
                        <Grid item xs={3}>
                            {t('code_name')}({t('korean')}) *
                        </Grid>
                        <Grid item xs={9}>
                            <TextField fullWidth id="codeNm" name="codeNm" type="text" value={data?.data?.codeNm} disabled={true} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center" sx={{ mt: 1 }}>
                        <Grid item xs={3}>
                            {t('code_name')}({t('english')}) *
                        </Grid>
                        <Grid item xs={9}>
                            <TextField
                                fullWidth
                                id="codeEngNm"
                                name="codeEngNm"
                                type="text"
                                value={data?.data?.codeEngNm}
                                disabled={true}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center" sx={{ mt: 1 }}>
                        <Grid item xs={3}>
                            {t('code_desc')} *
                        </Grid>
                        <Grid item xs={9}>
                            <TextField
                                fullWidth
                                id="codeDescript"
                                name="codeDescript"
                                type="text"
                                value={data?.data?.codeDescript}
                                disabled={true}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center" sx={{ mt: 1 }}>
                        <Grid item xs={3}>
                            {t('sequence_number')} *
                        </Grid>
                        <Grid item xs={9}>
                            <TextField id="orderNo" name="orderNo" type="number" value={data?.data?.orderNo} disabled={true} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center" sx={{ mt: 1 }}>
                        <Grid item xs={3}>
                            {t('label_use_yn')} *
                        </Grid>
                        <Grid item xs={9}>
                            <RadioButton
                                disabled
                                defaultValue={data?.data?.useYn}
                                data={[
                                    { code: 'Y', code_eng_nm: t('use') },
                                    { code: 'N', code_eng_nm: t('unused') }
                                ]}
                            />
                        </Grid>
                    </Grid>
                </Typography>
                <Grid style={{ textAlign: 'end' }}>
                    <Button
                        variant="contained"
                        sx={{ mr: 2 }}
                        onClick={() => {
                            setUpdateShow(open);
                            setDetailData(data);
                            setOpen('');
                        }}
                    >
                        {t('act_update')}
                    </Button>
                    <DeleteButton
                        sx={{ mr: 2 }}
                        loading={isLoading}
                        deleteFunc={useDeleteCommonCodeMutation}
                        code={data?.data?.code}
                        codeGroup={data?.data?.codeGroup}
                        onClose={setOpen}
                    />
                    <Button variant="outlined" onClick={() => setOpen('')}>
                        {t('close')}
                    </Button>
                </Grid>
            </CustomModal>
        </>
    );
};

export default CommonCodeDetail;
