import React from 'react';
import { Grid, Input } from '@mui/material';
import { Form, FormImgFileInputCircle } from 'components';
import URL from 'api/url';
import { AccountSettingsValidate } from './AccountSettingsValidate';

function AccountSettingsImg({ children, data, ...props }) {
    return (
        data && (
            <>
                <Form validateSchema={AccountSettingsValidate} mutation={props.mutation} list={URL.ACCOUNT_SETTINGS} check="id">
                    <Grid>
                        <Input type="hidden" name="seq" value={data?.seq} />
                        <Input type="hidden" name="fileGroupSeq" value={data?.fileGroupSeq} />
                        <Grid
                            sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}
                            gap={2}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <FormImgFileInputCircle defaultValue={data?.imageAtch} id="file" name="file" type="file" />
                        </Grid>
                    </Grid>
                    <Grid sx={{ mt: 10 }}>{children}</Grid>
                </Form>
            </>
        )
    );
}

export default AccountSettingsImg;
