import React from 'react';
import { Link } from 'react-router-dom';
import {Grid} from "@mui/material";

import Pages from 'store/pages';

const Main = () => {
    return (
        <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '90vh' }}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(90vh)' }}>
                    <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                        <Grid container spacing={2} alignItems="center" justifyContent="center">
                            <Grid item sx={{ mb: 3 }}>
                                <Link to={Pages.LOGIN}>
                                    Login
                                </Link>
                            </Grid>
                            <Grid item xs={12}>
                                <h1>Main page</h1>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Main;