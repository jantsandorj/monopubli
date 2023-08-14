import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormInput, Form, RadioButton } from 'components';
import { UserMenuValidate } from './UserMenuValidation';
import URL from 'api/url';
import { useState } from 'react';
import { useEffect } from 'react';

function UserMenuEdit({ children, data, isLoading, edit, ...props }) {
    const [useYn, setUseYn] = useState(data?.useYn || 'Y');
    const [showYn, setShowYn] = useState(data?.showYn || 'Y');
    const [pos, setPos] = useState(data?.positionType || 'top');
    const [menuType, setMenuType] = useState(data?.menuType || 'top');
    const [menuName, setMenuName] = useState(data?.menuName || '');
    const [menuId, setMenuId] = useState(data?.menuId || '');
    const [menuUrl, setMenuUrl] = useState(data?.menuUrl || '');
    const [headerText, setHeaderText] = useState(data?.headerText || '');

    const { t } = useTranslation();

    const handleChange = (e) => {
        const { value: newValue } = e.target;
        if (data?.menuId.length === 2 && edit === false) {
            setMenuUrl(`${data?.menuUrl}${newValue.substring(data?.menuUrl.length)}`);
        } else {
            setMenuUrl(e.target.value);
        }
    };

    useEffect(() => {
        setMenuName(edit ? data?.menuName : '');
        setMenuUrl(edit ? data?.menuUrl : '');
        if (data?.menuId.length === 2 && edit === false) {
            setMenuUrl(data?.menuUrl);
        }
        setMenuId(edit ? data?.menuId : '');
        setPos(edit ? data?.positionType : '');
        setMenuType(edit ? data?.menuType : '');
        setHeaderText(edit ? data?.headerText : '');
        setShowYn(edit ? data?.showYn : '');
        setUseYn(edit ? data?.useYn : '');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return (
        <Grid item xs={12}>
            <Form validateSchema={UserMenuValidate} mutation={props.mutation} list={URL.USER_MENU} check="id" onSuccess={props.onSuccess}>
                <Typography variant="h5">{t('menu_info')}</Typography>
                <Grid container spacing="10">
                    <input type="hidden" name="orderNumber" value={data?.orderNumber || 0} />
                    <input type="hidden" name="parentSeq" value={edit === true ? data?.parentSeq : data?.seq || 0} />
                    {edit !== true && <input type="hidden" name="parentMenuId" value={data?.menuId || 0} />}
                    <input type="hidden" name="seq" value={data?.seq || 0} />
                    <input type="hidden" name="adminMenuYn" value={'N'} />
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <FormInput
                            size="small"
                            id="menuName"
                            name="menuName"
                            type="text"
                            value={menuName ?? ''}
                            onChange={(event) => setMenuName(event.target.value)}
                            placeholder={t('menu_name')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        {edit === true && (
                            <FormInput
                                size="small"
                                id="menuId"
                                name="menuId"
                                type="text"
                                value={menuId ?? ''}
                                onChange={(event) => setMenuId(event.target.value)}
                                placeholder={t('menu_id')}
                                disabled
                            />
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        <FormInput
                            size="small"
                            id="menuUrl"
                            name="menuUrl"
                            type="text"
                            value={menuType === 'MT_04' ? '/web/menucontents/' ?? '' : menuUrl}
                            onChange={handleChange}
                            placeholder={t('menu_url')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormInput
                            size="small"
                            id="headerText"
                            name="headerText"
                            type="text"
                            value={headerText ?? ''}
                            onChange={(event) => setHeaderText(event.target.value)}
                            placeholder={t('header_name')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <fieldset style={{ border: '1px solid #ccc', borderRadius: 12 }}>
                            <legend>{t('menu_location')}</legend>
                            <RadioButton
                                value={pos}
                                onChange={(event) => setPos(event.target.value)}
                                name={t('positionType')}
                                defaultValue={props?.edit === true && 'PS_01'}
                                data={props?.common[1] || []}
                                style={{ margin: 0 }}
                            />
                        </fieldset>
                    </Grid>
                    <Grid item xs={12}>
                        <fieldset style={{ border: '1px solid #ccc', borderRadius: 12 }}>
                            <legend>{t('menu_type')}</legend>
                            <RadioButton
                                value={menuType}
                                onChange={(event) => setMenuType(event.target.value)}
                                name={t('menuType')}
                                defaultValue={props?.edit === true && 'MT_04'}
                                data={props?.common[0] || []}
                                style={{ margin: 0 }}
                            />
                        </fieldset>
                    </Grid>
                    <Grid item xs={12}>
                        <fieldset style={{ border: '1px solid #ccc', borderRadius: 12 }}>
                            <legend>{t('label_use_yn')}</legend>
                            <RadioButton
                                value={useYn}
                                onChange={(event) => setUseYn(event.target.value)}
                                name={'useYn'}
                                defaultValue={props?.edit === true && 'Y'}
                                data={props?.common[2] || []}
                                style={{ margin: 0 }}
                            />
                        </fieldset>
                    </Grid>
                    <Grid item xs={12}>
                        <fieldset style={{ border: '1px solid #ccc', borderRadius: 12 }}>
                            <legend>{t('exposure_yn')}</legend>
                            <RadioButton
                                value={showYn}
                                onChange={(event) => setShowYn(event.target.value)}
                                name={'showYn'}
                                defaultValue={props?.edit === true && 'Y'}
                                data={props?.common[3] || []}
                                style={{ margin: 0 }}
                            />
                        </fieldset>
                    </Grid>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
                        {children}
                    </Grid>
                </Grid>
            </Form>
        </Grid>
    );
}
export default UserMenuEdit;
