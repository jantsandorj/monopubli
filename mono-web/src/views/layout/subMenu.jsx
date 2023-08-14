import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Grid, List, ListItem} from '@mui/material';
import SubTitle from 'components/subTitle';
import {useGetMenusQuery} from "api/main/main";
import {CommonStyle} from "themes/commonStyle";
const SubMenu = () => {
    const [menus, setMenus] = useState([]);
    const location = useLocation();
    const { data } = useGetMenusQuery();
    let locationPath = location.pathname;
    useEffect(() => {
        let activeMenu = data?.data.find(menu => menu.menuUrl ==  '/'+ locationPath.split("/")[1]);
        if (data) {
            let newMenus = [];
            data.data.filter(menu => {
                if(menu.parentSeq === activeMenu.seq){
                    if(menu.menuUrl == locationPath){
                        menu = {...menu, active : true};
                    }
                    newMenus.push(menu);
                }
            });
            setMenus(newMenus);
        }
    }, [data]);

    return (
        <Grid container direction={'row'} justifyContent='flex-start' alignContent="flex-start" sx={{ minHeight: 'calc(85vh)' }}>
            <SubTitle text={"고객센터"} variant={'h3'} mb={'15px'} position={'start'}/>
            <Grid item xs={12} justifyContent='flex-start'>
                <hr style={{borderTop : "1px solid #000", maxWidth: "144px", marginLeft: "0"}}/>
            </Grid>
            <Grid item xs={12}>
                <List sx={CommonStyle.sub_gnb}>
                    {menus.map((menu, index) => (
                        <ListItem key={index}>
                            <Link to={menu.menuUrl} style={menu.active == true ? CommonStyle.sub_gnb_nav_active : CommonStyle.sub_gnb_nav }>
                                {menu.menuName}
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Grid>
        </Grid>
    );
};

export default SubMenu;
