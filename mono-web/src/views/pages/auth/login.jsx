import React, {useState, useCallback} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router";
import { useLoginMutation } from 'api/auth/auth';
import { Container, Button, Grid, Typography, OutlinedInput, FormControl } from '@mui/material';
import SubTitle from 'components/subTitle';
import Loader from 'components/Loader';
import AnimateButton from 'components/extended/AnimateButton';
import { storeUser } from 'store/authSlice';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [onAction, resultAction] = useLoginMutation();

    const dispatch = useDispatch();

    const logIn = useCallback(
        () => {
            let formData = new FormData();

            formData.append('username', username);
            formData.append('password', password);

            onAction(formData)
                .then((res) => {
                    if(res?.data?.status == 'OK'){
                        dispatch(storeUser(res?.data?.token));
                        navigate("/");
                    }
                })
                .catch((err) => console.log('loginMutation ERROR => ', err));
        },
        [onAction,username, password]
    );

    return (
        <Container>
            {!resultAction && <Loader />}
            <Grid container direction="column" alignItems="center" sx={{minHeight: '85vh'}}>
                <SubTitle text={"로그인"}/>
                <Grid container direction="column">
                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                        <Grid item xs={5}>
                            <FormControl fullWidth>
                                <Typography variant="h4" display="block" gutterBottom>아이디</Typography>
                                <OutlinedInput
                                    type="email"
                                    name="email"
                                    defaultValue={""}
                                    onChange={(e) => setUsername(e.target.value)}
                                    sx={{marginBottom: "50px"}}
                                    inputProps={{}}
                                />
                            </FormControl>
                            <FormControl fullWidth>
                                <Typography variant="h4" display="block" gutterBottom>비밀번호</Typography>
                                <OutlinedInput
                                    type="password"
                                    defaultValue={""}
                                    name="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    sx={{marginBottom: "40px"}}
                                    inputProps={{}}
                                />
                            </FormControl>
                            <Grid container direction="row" sx={{marginBottom: "15px"}}>
                                <Grid container alignItems="center" justifyContent="flex-end">
                                    <Grid item xs={4} sx={{textAlign : "end"}}>
                                        <Link to={"/"}>회원가입</Link>
                                    </Grid>
                                    <Grid item xs={4} sx={{textAlign : "end"}}>
                                        <Link to={"/"}>아이디/비밀번호찾기</Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <AnimateButton>
                                <Button
                                    disableElevation
                                    disabled={!resultAction}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    onClick={() => {
                                        logIn();
                                    }}
                                    sx={{background : "#000", width : '100%', color : "#fff", borderRadius : "0", height: "47px",
                                        ':hover': {
                                            backgroundColor: "#212121"
                                        }
                                    }}
                                >
                                    로그인
                                </Button>
                            </AnimateButton>
                            <Grid container direction="row" sx={{marginTop: "25px"}}>
                                <Grid container alignItems="center" justifyContent="flex-end">
                                    <Grid item xs={12} sx={{textAlign : "center"}}>
                                        <Typography variant={"h4"}>SNS 계정으로 로그인하기</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" sx={{marginTop: "25px"}}>
                                <Grid container alignItems="center" justifyContent="flex-end">
                                    <Grid item xs={12} sx={{textAlign : "center"}}>
                                        <Typography variant={"h4"}>메인으로 돌아가기</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
