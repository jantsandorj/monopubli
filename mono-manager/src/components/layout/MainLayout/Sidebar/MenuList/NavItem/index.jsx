import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography, Box } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { t } from 'i18next';
import i18next from 'i18next';
import { menuOpen, setMenu } from 'store/menuSlice';
import { MemberImageCard } from 'components/cards/MemberImageCard';
import { getCurrentUrl } from 'utils/functions/common';
import useMediaQuery from "@mui/material/useMediaQuery";

const NavItem = ({ item, level }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const customization = useSelector((state) => state.menuSlice);

    const currentLanguage = i18next.language;
    const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));

    const itemIcon = level > 1 ? (
        <FiberManualRecordIcon
            sx={{
                width: customization.isOpen.includes(item?.menuUrl) ? 8 : 6,
                height: customization.isOpen.includes(item?.menuUrl) ? 8 : 6
            }}
            fontSize={level > 0 ? 'inherit' : 'medium'}
        />
    ) : (
        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <MemberImageCard
                imgsrc={[item?.attachment]}
                type="imageAtch"
                objectFit={false}
                style={{ width: 24, height: 24, mt: 0, mr: 2, borderRadius: 1, background: 'transparent', border: 'none' }}
            />
        </Box>
    );

    const itemTarget = item.target ? '_blank' : '_self';
    const listItemProps = item.external ? { component: 'a', href: item.menuUrl, target: itemTarget } : { component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.menuUrl} target={itemTarget} />) };

    const itemHandler = (event) => {
        const el = event.target.closest('a');
        if (!el) {
            return;
        }

        const id = el.href;
        dispatch(menuOpen(id));
        if (matchesSM) {
            dispatch(setMenu(false));
        }
    };

    return (
        <ListItemButton
            {...listItemProps}
            disabled={item.disabled}
            sx={{
                borderRadius: `${customization.borderRadius}px`,
                mb: 0.5,
                alignItems: 'left',
                backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
                py: level > 1 ? 1 : 1.25,
                pl: `${level * 24}px`
            }}
            selected={customization.isOpen.includes(item.menuUrl)}
            onClick={itemHandler}
        >
            <ListItemIcon sx={{ my: 'auto', minWidth: !item?.icon ? 18 : 36 }}>{itemIcon}</ListItemIcon>
            <ListItemText
                primary={
                    <Typography variant={item.menuUrl === getCurrentUrl() ? 'h5' : 'body1'} color={item.menuUrl === getCurrentUrl() ? '#1e88e5' : 'inherit'}>
                        {currentLanguage === 'kr' ? item.menuNameKr : item.menuName}
                    </Typography>
                }
                secondary={item.caption && <Typography variant="caption" sx={{ ...theme.typography.subMenuCaption }} display="block" gutterBottom>{item.caption}</Typography>}
            />
            {item.chip && (
                <Chip
                    color={item.chip.color}
                    variant={item.chip.variant}
                    size={item.chip.size}
                    label={item.chip.label}
                    avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
                />
            )}
        </ListItemButton>
    );
};

NavItem.propTypes = {
    item: PropTypes.object,
    level: PropTypes.number
};

export default NavItem;
