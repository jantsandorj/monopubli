import React from 'react';
import PropTypes from 'prop-types';
import SortableTree from '@nosferatu500/react-sortable-tree';
import '@nosferatu500/react-sortable-tree/style.css';
import { Collapse, Typography, alpha } from '@mui/material';
import { TreeItem, treeItemClasses } from '@mui/lab';
import { useSpring, animated } from '@react-spring/web';
import { styled } from '@mui/material/styles';
import { ArrayToParentChildJson } from 'utils/functions/ArrayToParentChildJson';
import FileExplorerTheme from 'react-sortable-tree-theme-file-explorer';
import { useChangeMenuOrderMutation } from 'views/pages/MenuManagement/AdminMenu/AdminMenuApi';
import { useTranslation } from 'react-i18next';

function TransitionComponent(props) {
    const style = useSpring({
        from: {
            opacity: 0,
            transform: 'translate3d(20px,0,0)'
        },
        to: {
            opacity: props.in ? 1 : 0,
            transform: `translate3d(${props.in ? 0 : 20}px,0,0)`
        }
    });

    return (
        <animated.div style={style}>
            <Collapse {...props} />
        </animated.div>
    );
}

export const ParentChildJsonToArray = (data) => {
    const result = [];

    const traverse = (node) => {
        result.push(node);

        if (node.children && node.children.length > 0) {
            node.children.forEach((child) => {
                traverse(child);
            });
        }
    };

    data.forEach((node) => {
        traverse(node);
    });

    return result;
};

TransitionComponent.propTypes = {
    in: PropTypes.bool
};

const StyledTreeItem = styled((props) => <TreeItem {...props} TransitionComponent={TransitionComponent} />)(({ theme }) => ({
    background: 'white',
    [`& .${treeItemClasses.iconContainer}`]: {
        width: '0px !important',
        '& .close': {
            opacity: 0.3
        }
    },
    [`& .${treeItemClasses.group}`]: {
        borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`
    }
}));

const CustomizedTreeView = ({ departmentList, setCurrentMenu }) => {
    const [treeData, setTreeData] = React.useState([]);
    const [node, setNode] = React.useState({});
    const [newNode, setNewNode] = React.useState([]);
    const [menuChangeFc, { data: changedMenu, isLoading: changing, error: changeError }] = useChangeMenuOrderMutation();
    const { t, i18n } = useTranslation();

    React.useEffect(() => {
        const transformedData = ArrayToParentChildJson(departmentList);
        const root = {
            menuName: 'Root',
            menuNameKr: 'Root',
            menuId: null,
            useYn: 'Y',
            children: transformedData
        };

        setTreeData([root]);
    }, [departmentList]);

    const getNodeTitle = (nodes) => {
        const { useYn, menuName, menuNameKr, seq } = nodes;
        if (useYn === 'Y') {
            return (
                <StyledTreeItem
                    key={seq + ''}
                    nodeId={seq + ''}
                    label={
                        useYn === 'N' ? (
                            <Typography
                                onClick={() => {
                                    setCurrentMenu(nodes);
                                }}
                                variant="body1"
                                style={{ color: 'red' }}
                            >
                                {menuName}
                            </Typography>
                        ) : (
                            <Typography
                                onClick={() => {
                                    setCurrentMenu(nodes);
                                }}
                                variant="body1"
                            >
                                {i18n.language === 'kr' && menuNameKr !== null ? menuNameKr : menuName}
                            </Typography>
                        )
                    }
                    color="#1a73e8"
                ></StyledTreeItem>
            );
        }
        return [menuName, menuNameKr];
    };

    const handleDragStateChanged = (dragState) => {
        if (dragState?.isDragging) {
            setNode(dragState?.node);
        } else if (!dragState?.isDragging && treeData) {
            if (window.confirm('위치 설정 하시겠습니까?')) {
                menuChangeFc(treeData[0]?.children);
            }
        }
    };

    const handleChange = (data) => {
        if (data) {
            setNewNode(data);
        }
    };

    return (
        <div style={{ height: 1000, minWidth: 700 }}>
            <SortableTree
                treeData={treeData}
                onChange={(data) => {
                    setTreeData(data);
                    handleChange(data);
                }}
                onDragStateChanged={handleDragStateChanged}
                generateNodeProps={({ node }) => ({
                    title: getNodeTitle(node)
                })}
                canDrag
                theme={FileExplorerTheme}
            />
        </div>
    );
};
CustomizedTreeView.propTypes = {
    departmentList: PropTypes.arrayOf(PropTypes.object).isRequired,
    setCurrentMenu: PropTypes.func.isRequired
};

export default CustomizedTreeView;
