import React from 'react';
import {Grid, Typography} from "@mui/material";

const SubTitle = ({ text , variant, mb, position}) => {
    return (
        <Grid item xs={12}>
            <Grid container justifyContent={position ? position : 'center'} alignItems={position ? position : 'center'} sx={{marginBottom: mb ? mb : '50px' }} >
                <Typography variant={variant ? variant : 'h2'} sx={{marginTop: "140px"}}>
                    {text}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default SubTitle;