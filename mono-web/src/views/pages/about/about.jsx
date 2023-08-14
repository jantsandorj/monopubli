import React from 'react';

import { Grid, Link} from '@mui/material';

const Login = () => {
    return (
        <Grid container direction="column" justifyContent="flex-end">
            <Grid item xs={12}>
                <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(85vh)' }}>
                    <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                        <Grid container spacing={2} alignItems="center" justifyContent="center">
                            <Grid item sx={{ mb: 3 }}>
                                <Link href={"/"}>
                                    Home
                                </Link>
                            </Grid>
                            <Grid item xs={12}>
                                <h1>About page</h1>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Login;
