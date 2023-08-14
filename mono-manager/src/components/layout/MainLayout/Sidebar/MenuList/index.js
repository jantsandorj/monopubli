import { useState, useEffect } from 'react';
import NavGroup from './NavGroup';
import { useGetNavMenusQuery } from 'views/pages/MenuManagement/AdminMenu/AdminMenuApi';
import { ArrayToParentChildJson } from 'utils/functions/ArrayToParentChildJson';

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { t } from 'i18next';
import i18next from 'i18next';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
    const [menuNodes, setMenuNodes] = useState([]);
    const [user, setUser] = useState({});
    const tabsRef = React.useRef(null);
    const { data, isLoading } = useGetNavMenusQuery();
    const currentLanguage = i18next.language;

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('user'))) {
            setUser(JSON.parse(localStorage.getItem('user')));
        }
    }, []);

    useEffect(() => {
        setMenuNodes([]);

        if (!isLoading && data?.content?.length > 0) {
            setMenuNodes([]);
            setMenuNodes((prevNodes) => Object.assign([], prevNodes, ArrayToParentChildJson(JSON.parse(JSON.stringify(data?.content)))));
        } else {
            setMenuNodes([]);
        }
    }, [data, isLoading]);

    function TabPanel(props) {
        const { children, value, index } = props;

        return (
            <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`}>
                {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`
        };
    }

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        // Scroll to the current tab when it changes
        if (tabsRef.current) {
            const tabElement = tabsRef.current.querySelector(`[id="simple-tab-${value}"]`);
            if (tabElement) {
                tabElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    }, [value]);

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', overflow: 'auto' }}>
                    <Tabs
                        ref={tabsRef}
                        value={value}
                        sx={{ overflow: 'auto', marginLeft: 'auto', marginRight: 'auto' }}
                        onChange={handleChange}
                        variant="scrollable"
                        aria-label="basic tabs example"
                    >
                        {menuNodes.map((item, index) => (
                            <Tab
                                key={index}
                                label={currentLanguage === 'kr' && item.menuNameKr ? item.menuNameKr : item.menuName}
                                {...a11yProps(index)}
                            />
                        ))}
                    </Tabs>
                </Box>
                {menuNodes.map((item, index) => (
                    <TabPanel key={index} value={value} index={index}>
                        <NavGroup item={item} />
                    </TabPanel>
                ))}
            </Box>
        </>
    );
};

export default MenuList;
