import React from 'react';
import { Grid } from '@mui/material';
import { UpdateButton } from 'components';
import SystemSettingEdit from './SystemSettingEdit';
import { useGetSystemSettingQuery, useUpdateSystemSettingMutation } from './SystemSettingApi';

const SystemSetting = () => {
    const { data, isLoading } = useGetSystemSettingQuery();

    return (
        <SystemSettingEdit data={data?.content} mutation={useUpdateSystemSettingMutation} isLoading={isLoading}>
            <Grid item xs={6} textAlign="left"></Grid>
            <Grid item xs={6} textAlign="right">
                <UpdateButton />
            </Grid>
        </SystemSettingEdit>
    );
};

export default SystemSetting;
