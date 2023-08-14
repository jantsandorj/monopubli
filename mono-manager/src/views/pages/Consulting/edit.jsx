// REACT
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

// FORM
import { useGetProjectQuery, useCreateProjectMutation } from 'api/project';

// MUI
import { Tab, Box, Grid, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

// COMPONENTS
import MainCard from 'components/cards/MainCard';
import { FormLabelStyle } from 'components/button/style';
import CustomTextForm from 'components/text/CustomTextForm';
import { BackButton } from 'components/button/BackButton';

// OTHER
import ConsultingBasicForm from './form';
import { useParams } from 'react-router';
import { useEffect } from 'react';

//PAGE
const ConsultingEditPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('1');
    const { code } = useParams();
    const { data, isLoading } = useGetProjectQuery(code);
    const [dataDetails, setDataDetails] = useState({});

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        !isLoading && setDataDetails(data?.content);

        return () => {};
    }, [data]);

    return (
        <MainCard title={<BackButton text={t('act_create')} />}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Basic info" value="1" />
                        <Tab label="Details about the cost and estimate" value="2" />
                    </TabList>
                </Box>
                <Grid container sx={FormLabelStyle?.grayCol}>
                    <CustomTextForm
                        full
                        type="typography"
                        label={t('Project name')}
                        name="name"
                        textValue={dataDetails?.name}
                        isLoading={isLoading}
                    />
                </Grid>
                <Grid container sx={FormLabelStyle?.grayCol}>
                    <CustomTextForm
                        type="typography"
                        label={t('Company name')}
                        name="companyName"
                        textValue={dataDetails?.companyName}
                        isLoading={isLoading}
                    />
                    <CustomTextForm type="typography" label={t('Person in charge')} name="" textValue={null} isLoading={isLoading} />
                </Grid>
                <Grid container sx={FormLabelStyle?.grayCol}>
                    <CustomTextForm
                        type="typography"
                        label={t('Number')}
                        name="phone"
                        textValue={dataDetails?.phone}
                        isLoading={isLoading}
                    />
                    <CustomTextForm
                        type="typography"
                        label={t('Email')}
                        name="email"
                        textValue={dataDetails?.email}
                        isLoading={isLoading}
                    />
                </Grid>
                <Grid container sx={FormLabelStyle?.grayCol}>
                    <CustomTextForm full type="typography" label={t('File')} name="" textValue={null} isLoading={isLoading} />
                </Grid>
                <Grid container sx={FormLabelStyle?.grayCol}>
                    <CustomTextForm
                        full
                        type="typography"
                        label={t('Figma address')}
                        name="figmaAddr"
                        textValue={dataDetails?.figmaAddr}
                        isLoading={isLoading}
                    />
                </Grid>
                <TabPanel value="1" sx={{ p: 0, mt: 4 }}>
                    <ConsultingBasicForm data={data?.content} mutation={useCreateProjectMutation} />
                </TabPanel>
                <TabPanel value="2" sx={{ p: 0, mt: 2 }}>
                    Details about the cost and estimate
                </TabPanel>
            </TabContext>
        </MainCard>
    );
};

export default ConsultingEditPage;
