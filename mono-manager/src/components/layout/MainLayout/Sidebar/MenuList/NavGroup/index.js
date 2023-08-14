import { List } from '@mui/material';
import { useMemo } from 'react';

// project imports
import NavItem from '../NavItem';
import NavCollapse from '../NavCollapse';

// ==============================|| SIDEBAR MENU LIST GROUP ||============================== //

const NavGroup = ({ item }) => {
    const renderedChildren = useMemo(() => {
        return item.children?.map((menu, index) => {
            if (menu.children?.length > 0) {
                return <NavCollapse key={`${item.seq}-${index}`} menu={menu} level={1} index={index} />;
            } else {
                return <NavItem key={`${item.seq}-${index}`} item={menu} level={1} />;
            }
        });
    }, [item?.children, item?.seq]);

    return <List>{renderedChildren}</List>;
};

export default NavGroup;
