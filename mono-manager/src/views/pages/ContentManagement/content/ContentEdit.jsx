import React from 'react';
import { Divider, Grid, Tab, Tabs, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormInput, Form, Item, TextFieldCounter } from 'components';
import { ContentValidate } from './ContentValidate';
import URL from 'api/url';
import { AVAIL_LANG } from 'config';

function ContentEdit({ children, data, isLoading, ...props }) {
    const { t } = useTranslation();
    const [tabLang, setTabLang] = React.useState(AVAIL_LANG[0].code); //  tab changer, language tab
    const handleTabChange = (event, newValue) => {
        setTabLang(newValue);
    };

    return (
        <Form validateSchema={ContentValidate} mutation={props.mutation} list={URL.CONTENT} check="id">
            <Grid container spacing={2}>
                <input type="hidden" name="seq" value={data?.content.seq} />
                {/* User, Created/Modified Date, use or not */}
                <Grid item xs={4}>
                    <Item>
                        <Typography variant="subtitle1">
                            {t('label_created_by')} / {t('label_modified_by')}
                        </Typography>
                        {data?.content.createdBy} / {data?.content.modifiedBy}
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <Typography variant="subtitle1">
                            {t('label_created_date')} / {t('label_modified_date')}
                        </Typography>
                        {data?.content.formattedCreateDate} / {data?.content.formattedModifiedDate}
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <Typography variant="subtitle1">{t('label_status')}</Typography>
                        {data?.content.statusCd}
                    </Item>
                </Grid>
                {/* Row Language tab */}
                <Grid item xs={12}>
                    <Item>
                        <Tabs value={tabLang} onChange={handleTabChange} centered>
                            {AVAIL_LANG.map((lang, index) => (
                                <Tab key={index} value={lang.code} label={lang.name + ' /' + lang.code + '/'} />
                            ))}
                        </Tabs>
                    </Item>
                </Grid>
                {/* Row 1 title */}
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('label_title')} *</Typography>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    {AVAIL_LANG.map((lang) => (
                        <TextFieldCounter
                            id={'value_' + lang.code + '_title'}
                            name={'value_' + lang.code + '_title'}
                            defaultValue={data?.content.title?.[lang.code]}
                            maxLength="255"
                            style={{ display: tabLang !== lang.code ? 'none' : 'inherit' }}
                            required
                        />
                    ))}
                </Grid>
                <Grid item xs={1}>
                    <Item>
                        <Typography variant="subtitle1">{t('label_code')}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>{data?.content.csCode}</Item>
                </Grid>
                {/* Row 2 subject */}
                <Grid item xs={2}>
                    <Item>
                        <Typography variant="subtitle1">{t('label_subject')} *</Typography>
                    </Item>
                </Grid>
                <Grid item xs={10}>
                    {AVAIL_LANG.map((lang) => (
                        <FormInput
                            id={'value_' + lang.code + '_subject'}
                            name={'value_' + lang.code + '_subject'}
                            defaultValue={data?.content.link}
                            loading={isLoading}
                        />
                    ))}
                </Grid>
                <Grid item xs={12}>
                    <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                </Grid>
                {/* Custom fields */}

                {/* {customFields.map((field, index) => (
                    <>
                        <Grid item xs={2}>
                            <Item>
                                <Typography variant="subtitle1">
                                    {field.title[tabLang]} {field.required ? '*' : ''}
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            {AVAIL_LANG.map((lang) => (
                                <FormInput
                                    id={'value_' + lang.code + '_' + field.fieldId}
                                    name={'value_' + lang.code + '_' + field.fieldId}
                                    defaultValue={data?.content.link}
                                    loading={isLoading}
                                />
                            ))}
                        </Grid>
                    </>
                ))} */}
                <Grid item xs={12}>
                    <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                </Grid>

                {/* Buttons */}
                {children}
            </Grid>
        </Form>
    );
}

export default ContentEdit;
