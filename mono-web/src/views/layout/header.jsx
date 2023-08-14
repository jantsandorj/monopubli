import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, List, Button, ListItem, Container, Typography } from "@mui/material";
import { CommonStyle } from "themes/commonStyle";
import { useGetMenusQuery } from 'api/main/main';
import Pages from 'store/pages';
import { storeUser } from "store/authSlice";
import "../../assets/css/header.module.css"

function Header() {
    const [menus, setMenus] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data, isLoading } = useGetMenusQuery();
    const user = useSelector((state) => state.authentication.user);

    useEffect(() => {
        if (data) {
            let filteredMenus = data.data.filter(menu => {
                if (user) {
                    return menu.parentSeq === 0;
                }
                return menu.parentSeq === 0 && menu.authYn !== 'Y';
            });
            setMenus(filteredMenus);
        }
    }, [data, user]);

    const logout = () => {
        localStorage.removeItem('user');
        dispatch(storeUser(null));
        navigate(Pages.LOGIN);
    };

    const loginPage = () => {
        navigate(Pages.LOGIN);
    };

    return (
        <Grid container sx={CommonStyle.header}>
            <Container>
                <Grid container sx={CommonStyle.header_wrap}>
                    <Grid item xs={2.2}>
                        <Link to="/" style={CommonStyle.gnb_nav}>
                            <Typography variant="logo">TAGOPLUS</Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={9.8} sx={CommonStyle.header_inn}>
                        <List sx={CommonStyle.gnb}>
                            {menus.map((menu, index) => (
                                <ListItem key={index}>
                                    <Link to={menu.menuUrl} style={CommonStyle.gnb_nav}>
                                        {menu.menuName}
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                        {!user && (
                            <Button variant="contained" onClick={loginPage} sx={CommonStyle.login_btn}>로그인</Button>
                        )}
                        {!user && (
                            <Button variant="contained" sx={CommonStyle.reg_btn}>회원가입</Button>
                        )}
                        {user && (
                            <Button variant="contained" onClick={logout} sx={CommonStyle.logout_btn}>Logout</Button>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
}

export default Header;
