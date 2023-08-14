import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Box, Typography } from '@mui/material';

// project imports
import NavItem from '../NavItem';

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { IconChevronDown, IconChevronUp } from '@tabler/icons';
import { t } from 'i18next';
import i18next from 'i18next';
import { useLocation } from 'react-router';
import { MemberImageCard } from 'components/cards/MemberImageCard';

// ==============================|| SIDEBAR MENU LIST COLLAPSE ITEMS ||============================== //

const NavCollapse = ({ menu, level, index }) => {
    const theme = useTheme();
    const urls = useLocation();
    const customization = useSelector((state) => state.menuSlice);
    const menuOpenKey = 'menuOpenKey';
    const defaultOpen = localStorage.getItem(menuOpenKey) == index ? true : false;
    const [open, setOpen] = useState(defaultOpen);
    const [selected, setSelected] = useState(null);
    const currentLanguage = i18next.language;

    const handleClick = (event) => {
        setOpen(!open);
        localStorage.setItem(menuOpenKey, index);
        setSelected(menu.menuUrl);
    };

    useEffect(() => {}, [menu, level]);

    const menuIcon = !(level > 1) ? (
        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <MemberImageCard
                imgsrc={[menu?.attachment]}
                type="imageAtch"
                objectFit={false}
                style={{ width: 24, height: 24, mt: 0, mr: 2, borderRadius: 1, background: 'transparent', border: 'none' }}
            />
        </Box>
    ) : (
        <FiberManualRecordIcon
            sx={{
                width: selected === urls.pathname ? 8 : 6,
                height: selected === urls.pathname ? 8 : 6
            }}
            fontSize={level > 0 ? 'inherit' : 'medium'}
        />
    );
    return (
        <>
            <ListItemButton
                sx={{
                    borderRadius: `${customization.borderRadius}px`,
                    mb: 0.5,
                    alignItems: 'center',
                    backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
                    py: level > 1 ? 1 : 1.25
                }}

                selected={menu.children.filter((e) => e.menuUrl === urls.pathname).length > 0}
                onClick={handleClick}
            >
                <ListItemIcon sx={{ my: 'auto', minWidth: !menu.icon ? 18 : 36 }}>{menuIcon}</ListItemIcon>
                <ListItemText
                    primary={
                        <Typography
                            variant={menu.children.filter((e) => e.menuUrl === urls.pathname).length > 0 ? 'h5' : 'body1'}
                            color="inherit"
                            sx={{ my: 'auto' }}
                        >
                            {currentLanguage === 'kr' ? menu.menuNameKr : menu.menuName}
                        </Typography>
                    }
                    secondary={
                        menu.caption && (
                            <Typography variant="caption" sx={{ ...theme.typography.subMenuCaption }} display="block" gutterBottom>
                                {menu.caption}
                            </Typography>
                        )
                    }
                />
                {open ? (
                    <IconChevronUp stroke={1.5} size="1rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                ) : (
                    <IconChevronDown stroke={1.5} size="1rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                )}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List
                    component="div"
                    disablePadding
                    sx={{
                        position: 'relative',
                        '&:after': {
                            content: "''",
                            position: 'absolute',
                            left: '32px',
                            top: 0,
                            height: '100%',
                            width: '1px',
                            opacity: 1,
                            background: theme.palette.primary.light
                        }
                    }}
                >
                    {menu.children?.map((item, index) =>
                        item.children?.length > 0 ? (
                            <NavCollapse key={item.menuUrl + index} menu={item} level={level + 1} />
                        ) : (
                            <NavItem key={item.menuUrl + index} item={item} level={level + 1} />
                        )
                    )}
                </List>
            </Collapse>
        </>
    );
};

export default NavCollapse;
