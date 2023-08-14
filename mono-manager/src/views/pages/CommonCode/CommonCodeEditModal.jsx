import { Grid } from '@mui/material';
import URL from 'api/url';
import { CommonCodeValidate } from './CommonCodeValidate';
import { useTranslation } from 'react-i18next';
import { RadioButton, Form, FormInput, FormNumberInput } from 'components';
import { useGetCommonGroupCodeQuery } from './CommonCodeApi';
import FilterGroupSelect from 'components/select/FilterGroupSelect';
import { useState } from 'react';

const CommonCodeEditModal = ({ open, setOpen, data, children, ...props }) => {
    const [selectedCodeGroup, setSelectedCodeGroup] = useState(null);
    const [selectedCodeGroupNm, setSelectedCodeGroupNm] = useState(null);
    const [disableEdit, setDisabledEdit] = useState(false);
    const { data: groupcodes } = useGetCommonGroupCodeQuery();
    const handleClick = (e) => {
        setSelectedCodeGroup(e.value?.split('-')[0]);
        if (e.value === 'DIVISION') {
            setDisabledEdit(false);
            setSelectedCodeGroupNm(null);
        } else {
            setDisabledEdit(true);
            setSelectedCodeGroupNm(e.value?.split('-')[1]);
        }
    };

    const { t } = useTranslation();
    return (
        <>
            <Form
                setOpen={setOpen}
                validateSchema={CommonCodeValidate}
                mutation={props.mutation}
                list={URL.COMMON_CODE}
                numbers={['seq']}
                seqs={{ seq: data?.data.seq }}
            >
                <input type="hidden" name="codeGroup" value={selectedCodeGroup ? selectedCodeGroup : 'DIVISION'} />
                {disableEdit ? (
                    <>
                        <input type="hidden" name="codeGroupNm" value={selectedCodeGroupNm} />
                    </>
                ) : (
                    ''
                )}

                <Grid container spacing={1} alignItems="center">
                    <Grid item xs={3}>
                        {t('code_class')} *
                    </Grid>
                    <Grid item xs={5}>
                        <FormInput
                            id="codeGroup"
                            name="codeGroup"
                            defaultValue={data?.data?.codeGroup}
                            value={selectedCodeGroup ? selectedCodeGroup : 'DIVISION'}
                            disabled={true}
                        />
                    </Grid>
                    {data ? (
                        ''
                    ) : (
                        <Grid item xs={4}>
                            <FilterGroupSelect
                                defaultValue={'DIVISION'}
                                name="code_class_name"
                                //value={selectedCodeGroup}
                                onChange={(e) => handleClick(e.target)}
                                options={groupcodes}
                            />
                        </Grid>
                    )}
                </Grid>
                <Grid container spacing={1} alignItems="center" sx={{ mt: 1 }}>
                    <Grid item xs={3}>
                        {t('code_class_name')} *
                    </Grid>
                    <Grid item xs={9}>
                        <FormInput
                            id="codeGroupNm"
                            name="codeGroupNm"
                            defaultValue={data?.data?.codeGroupNm}
                            disabled={data ? true : disableEdit}
                            value={selectedCodeGroupNm}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" sx={{ mt: 1 }}>
                    <Grid item xs={3}>
                        {t('label_code')} *
                    </Grid>
                    <Grid item xs={9}>
                        <FormInput id="code" name="code" defaultValue={data?.data?.code} disabled={data ? true : false} />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" sx={{ mt: 1 }}>
                    <Grid item xs={3}>
                        {t('code_name')}({t('korean')}) *
                    </Grid>
                    <Grid item xs={9}>
                        <FormInput id="codeNm" name="codeNm" defaultValue={data?.data?.codeNm} />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" sx={{ mt: 1 }}>
                    <Grid item xs={3}>
                        {t('code_name')}({t('english')}) *
                    </Grid>
                    <Grid item xs={9}>
                        <FormInput id="codeEngNm" name="codeEngNm" defaultValue={data?.data?.codeEngNm} />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" sx={{ mt: 1 }}>
                    <Grid item xs={3}>
                        {t('code_desc')} *
                    </Grid>
                    <Grid item xs={9}>
                        <FormInput id="codeDescript" name="codeDescript" defaultValue={data?.data?.codeDescript} />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" sx={{ mt: 1 }}>
                    <Grid item xs={3}>
                        {t('sequence_number')}
                    </Grid>
                    <Grid item xs={9}>
                        <FormNumberInput id="orderNo" name="orderNo" type="number" defaultValue={data?.data?.orderNo} />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" sx={{ mt: 1 }}>
                    <Grid item xs={3}>
                        {t('label_use_yn')} *
                    </Grid>
                    <Grid item xs={9}>
                        <RadioButton
                            defaultValue={data?.data.useYn || 'Y'}
                            name="useYn"
                            data={[
                                { code: 'Y', code_eng_nm: t('use') },
                                { code: 'N', code_eng_nm: t('unused') }
                            ]}
                        />
                    </Grid>
                </Grid>
                {children}
            </Form>
        </>
    );
};

export default CommonCodeEditModal;
