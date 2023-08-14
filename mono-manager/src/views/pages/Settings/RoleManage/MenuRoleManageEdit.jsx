import React, { useEffect } from 'react';
import { Typography, Paper, Grid } from '@mui/material';
import Snackbar from 'components/Snackbar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import TreeView from '@mui/lab/TreeView';
import { useTranslation } from 'react-i18next';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { LoadingButton } from '@mui/lab';
import { IconCheck } from '@tabler/icons';
import { useUpdateMenuManageMutation } from './RoleManageApi';
const { Button } = require('components');

function RoleManageEdit({ data, setOpen, rowData, isLoading }) {
    const menuData = { seq: 0, menuName: 'Parent', listSub: data?.content || [], setAt: '0' };
    const [selected, setSelected] = React.useState([]);
    const [onAction, resultAction] = useUpdateMenuManageMutation();
    const { t } = useTranslation();

    const selectedSet = React.useMemo(() => new Set(selected), [selected]);

    const parentMap = React.useMemo(() => {
        return goThroughAllMenu(menuData, {});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (resultAction.data) {
            if (resultAction.data.status === 'success' || resultAction.data.status === 200) {
                Snackbar.success(t(resultAction.data.message));
                setOpen(false);
            } else {
                if (resultAction.data.message?.includes('duplicate')) {
                    Snackbar.warning(t(resultAction.data.message));
                } else {
                    Snackbar.error(t(resultAction.data.message));
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resultAction.data]);

    useEffect(() => {
        const processListSub = (listSub) => {
            let result = [];

            listSub.forEach(({ seq, setAt, listSub }) => {
                if (setAt === '1') {
                    result.push(seq);
                }

                if (listSub && listSub.length > 0) {
                    const nestedResults = processListSub(listSub);
                    result = result.concat(nestedResults);
                }
            });

            return result;
        };

        if (data?.content?.length > 0) {
            let newArray = data?.content.reduce((acc, { seq, setAt, listSub }) => {
                if (setAt === '1') {
                    acc.push(seq);
                }

                if (listSub && listSub.length > 0) {
                    const nestedResults = processListSub(listSub);
                    acc = acc.concat(nestedResults);
                }

                return acc;
            }, []);

            // Use the newArray as desired
            setSelected(newArray);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data?.content]);

    function goThroughAllMenu(data, map) {
        if (!data.listSub) {
            return null;
        }

        map[data.seq] = getAllChild(data).splice(1);
        for (let childMenu of data.listSub) {
            goThroughAllMenu(childMenu, map);
        }

        return map;
    }

    function getAllChild(childMenu, coll) {
        let collectedMenu = [];
        if (coll) collectedMenu = coll;

        if (childMenu === null) return collectedMenu;

        collectedMenu.push(childMenu.seq);
        if (Array.isArray(childMenu.listSub)) {
            for (const node of childMenu.listSub) {
                getAllChild(node, collectedMenu);
            }
        }
        return collectedMenu;
    }

    const getChildById = (data, id) => {
        let array = [];
        let path = [];

        function getNodeById(data, id, parentsPath) {
            let result = null;
            if (data.seq === id) {
                return data;
            } else if (Array.isArray(data.listSub)) {
                for (let childMenu of data.listSub) {
                    result = getNodeById(childMenu, id, parentsPath);

                    if (!!result) {
                        parentsPath.push(data.seq);
                        return result;
                    }
                }

                return result;
            }

            return result;
        }

        const nodeToToggle = getNodeById(menuData, id, path);
        return { childNodesToToggle: getAllChild(nodeToToggle, array), path };
    };

    function getOnChange(checked, data) {
        const { childNodesToToggle, path } = getChildById(data, data.seq);
        let array = checked
            ? [...selected, ...childNodesToToggle]
            : selected.filter((value) => !childNodesToToggle.includes(value)).filter((value) => !path.includes(value));

        setSelected(array);
    }

    const RenderChild = (data) => {
        const indeterminate = parentMap[data?.seq]?.some((childNodeId) => selectedSet.has(childNodeId)) || false;
        return (
            <TreeItem
                key={`sub_menu_role_${data.seq}`}
                nodeId={data?.seq.toString()}
                label={
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={selectedSet.has(data?.seq)}
                                indeterminate={!selectedSet.has(data?.seq) && indeterminate}
                                onChange={(e) => getOnChange(e.currentTarget.checked, data)}
                                onClick={(e) => e.stopPropagation()}
                                sx={{ marginLeft: '3px' }}
                                size="small"
                            />
                        }
                        label={data?.menuName}
                    />
                }
            >
                {Array.isArray(data?.listSub) ? data?.listSub.map((list) => RenderChild(list)) : null}
            </TreeItem>
        );
    };

    return (
        <Typography variant="body2" component={Paper}>
            <Grid container spacing={2}>
                {isLoading ? (
                    'loading'
                ) : (
                    <TreeView
                        aria-label="file system navigator"
                        defaultExpanded={['0']}
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpandIcon={<ChevronRightIcon />}
                        sx={{
                            flexGrow: 1,
                            maxWidth: '700px',
                            marginTop: '20px',
                            maxHeight: '550px',
                            minHeight: '300px',
                            overflow: 'auto'
                        }}
                    >
                        {RenderChild(menuData)}
                    </TreeView>
                )}

                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
                    <LoadingButton
                        style={{ marginRight: 12 }}
                        startIcon={<IconCheck />}
                        loadingPosition="start"
                        variant="contained"
                        size="large"
                        onClick={() => onAction({ authorCd: rowData, seq: selected })}
                    >
                        {t('act_update')}
                    </LoadingButton>
                    <Button disableElevation size="large" variant="outlined" color="primary" onClick={() => setOpen(false)}>
                        {t('act_cancel')}
                    </Button>
                </Grid>
            </Grid>
        </Typography>
    );
}

export default RoleManageEdit;
