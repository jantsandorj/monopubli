import React, { useState } from 'react';
import { Checkbox, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormInput, FormDateInput, Form, FormImgFileInput, Item, RadioButton, FormNumberInput } from 'components';
import { PopupValidate } from './PopupValidate';
import URL from 'api/url';
import CommonCodeSelect from 'components/select/CommonCodeSelect';
import dayjs from 'dayjs';

function PopupEdit({ children, data, isLoading, ...props }) {
    const { t } = useTranslation();
    const [checked, setChecked] = useState(data?.content.windowYn || 'off');
    const [linkRequired, setLinkRequired] = React.useState(data?.content.linkYn || 'Y');
    return (
        <Form
            validateSchema={PopupValidate}
            mutation={props.mutation}
            list={URL.CONTENT_POPUP}
            check="id"
            numbers={['sortNo']}
            seqs={{
                seq: data?.content.seq,
                mobileFileGroupSeq: data?.content?.mobileFileGroupSeq,
                pcFileGroupSeq: data?.content?.pcFileGroupSeq
            }}
        >
            <input type="hidden" name="windowYn" value={checked} />
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('popup_name')} *</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10}>
                    <FormInput id="subject" name="subject" type="text" defaultValue={data?.content.subject} loading={isLoading} />
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('media_type')} *</Typography>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <CommonCodeSelect groupName="MEDIA_TYPE" name="popupType" label={t('Popup type')} />
                </Grid>
                <Grid item xs={6} />
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('link_useYN')} *</Typography>
                    </Item>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex' }}>
                    <RadioButton
                        defaultValue={data?.content.linkYn ? data?.content.linkYn : linkRequired}
                        name="linkYn"
                        data={[
                            { code: 'Y', code_eng_nm: t('use') },
                            { code: 'N', code_eng_nm: t('unused') }
                        ]}
                        onChangeRadio={(e) => setLinkRequired(e.target.value)}
                    />
                    <Checkbox
                        defaultValue={data?.content.windowYn}
                        onChange={(e) => (e.target.checked ? setChecked('on') : setChecked('off'))}
                        color="default"
                        defaultChecked={data?.content.windowYn === 'on'}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">
                            {t('link')} {linkRequired === 'Y' ? '*' : ''}
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    {linkRequired === 'Y' ? (
                        <FormInput id="linkUrl" name="linkUrl" type="text" defaultValue={data?.content.linkUrl} loading={isLoading} />
                    ) : (
                        <FormInput
                            disabled
                            id="linkUrl"
                            name="linkUrl"
                            type="text"
                            defaultValue={data?.content.linkUrl}
                            loading={isLoading}
                        />
                    )}
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('pc_img')} *</Typography>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <FormImgFileInput
                        id="pcImage"
                        name="pcImage"
                        loading={isLoading}
                        defaultValue={data?.content.pcImageAtch}
                        inputProps={{ accept: 'image/png, image/gif, image/jpeg, image/jpg,' }}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('mo_img')}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <FormImgFileInput
                        id="mobileImage"
                        name="mobileImage"
                        loading={isLoading}
                        defaultValue={data?.content.mobileImageAtch}
                        inputProps={{ accept: 'image/png, image/gif, image/jpeg, image/jpg,' }}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('image_alt')} *</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10}>
                    <FormInput id="imageDesc" name="imageDesc" defaultValue={data?.content.imageDesc} loading={isLoading} />
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('exposure_location')} *</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row' }} alignItems="center">
                    <Typography sx={{ width: '80px' }}>TOP : </Typography>
                    <FormNumberInput
                        minWidth
                        id="positionY"
                        name="positionY"
                        defaultValue={data?.content.positionY}
                        sx={{ mr: 1 }}
                        loading={isLoading}
                    />
                    px
                    <Typography sx={{ ml: 3, mr: 3 }}>/</Typography>
                    <Typography sx={{ width: '80px' }}>LEFT : </Typography>
                    <FormNumberInput minWidth id="positionX" name="positionX" defaultValue={data?.content.positionX} loading={isLoading} />
                    px
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('popup_size')} *</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row' }} alignItems="center" spacing={2}>
                    <Typography sx={{ width: '80px' }}>HEIGHT : </Typography>
                    <FormNumberInput
                        minWidth
                        id="height"
                        name="height"
                        defaultValue={data?.content.height}
                        sx={{ mr: 1 }}
                        loading={isLoading}
                    />
                    px
                    <Typography sx={{ ml: 3, mr: 3 }}>/</Typography>
                    <Typography sx={{ width: '80px' }}>WIDTH : </Typography>
                    <FormNumberInput
                        minWidth
                        id="width"
                        name="width"
                        defaultValue={data?.content.width}
                        sx={{ mr: 1 }}
                        loading={isLoading}
                    />
                    px
                </Grid>

                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('ref_start_dt')} *</Typography>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <FormDateInput name="startDate" value={dayjs(data?.content.startDate)} loading={isLoading} />
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('ref_end_dt')}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <FormDateInput name="endDate" value={dayjs(data?.content.endDate)} loading={isLoading} />
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('exposure_seq')}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <FormNumberInput name="sortNo" defaultValue={data?.content.sortNo} loading={isLoading} />
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('label_use_yn')} *</Typography>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <RadioButton
                        defaultValue={data?.content.useYn || 'Y'}
                        name="useYn"
                        data={[
                            { code: 'Y', code_eng_nm: t('use') },
                            { code: 'N', code_eng_nm: t('unused') }
                        ]}
                    />
                </Grid>
                {children}
            </Grid>
        </Form>
    );
}

export default PopupEdit;
