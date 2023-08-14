import React, {lazy} from 'react';

import { Container, Grid, Link} from '@mui/material';

import SubTitle from 'components/subTitle';
import Loadable from "components/Loadable";
const SubMenu = Loadable(lazy(() => import('views/layout/subMenu')));

const Login = () => {
    return (
        <Container>
            <Grid container direction="row" justifyContent="flex-end">
                <Grid item xs={2}>
                    <SubMenu />
                </Grid>
                <Grid item xs={10}>
                    <Grid container sx={{ minHeight: 'calc(85vh)' }}>
                        <SubTitle text={"마이페이지"}/>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
