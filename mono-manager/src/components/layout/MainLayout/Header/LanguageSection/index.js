import { useState } from 'react';
import { AVAIL_LANG } from 'config';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';

// assets
import { IconWorld } from '@tabler/icons';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

// ==============================|| NOTIFICATION ||============================== //

const LanguageSection = () => {
    const theme = useTheme();
    const { t } = useTranslation();

    function changeLocale(l) {
        i18next.changeLanguage(l);
        handleClose();
    }

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box
                sx={{
                    ml: 2,
                    mr: 3,
                    [theme.breakpoints.down('md')]: {
                        mr: 2
                    }
                }}
            >
                <Typography sx={{ borderRadius: '12px' }}>
                    <Button
                        variant="rounded"
                        sx={{
                            borderRadius: '3px',
                            transition: 'all .2s ease-in-out',
                            background: theme.palette.primary.light,
                            color: theme.palette.primary.dark,
                            '&[aria-controls="menu-list-grow"],&:hover': {
                                background: theme.palette.primary.dark,
                                color: theme.palette.primary.light
                            }
                        }}
                        onClick={handleClick}
                        color="inherit"
                    >
                        <IconWorld stroke={1.5} size="1.3rem" /> &nbsp; {t('curlang')}
                    </Button>
                </Typography>
            </Box>
            <Menu
                id="menu-language"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                variant="selectedMenu"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                {AVAIL_LANG.map((lang, index) => (
                    <MenuItem
                        key={index}
                        onClick={() => {
                            changeLocale(lang.code);
                        }}
                    >
                        {lang.name}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

export default LanguageSection;
