import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { Button, Grid, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useMemo } from 'react';

const ListBoxStyle = {
    width: '100%',
    height: '400px',
    border: '1px solid #f0f0f0',
    borderRadius: '12px',
    marginTop: '5px',
    overflowX: 'hidden',
    overflowY: 'auto'
};

export function ReceiverList({ data, selectedUsers, setSelectedUsers }) {
    const handleToggle = (item) => () => {
        const isExistUser = selectedUsers?.find((a) => a.seq === item.seq);
        let newUsers = [...selectedUsers];
        if (!isExistUser) {
            newUsers.push({
                seq: item.seq,
                fullname: item.fullname,
                username: item.username
            });
        } else {
            newUsers = newUsers.filter((a) => a.seq !== item.seq);
        }
        setSelectedUsers(newUsers);
    };

    const handleCheckAll = (e) => {
        if (e.target.checked) {
            setSelectedUsers(data.map((a) => ({ seq: a.seq, fullname: a.fullname, username: a.username })));
        } else {
            setSelectedUsers([]);
        }
    };

    const checked = useMemo(() => {
        if (selectedUsers.length === data.length && selectedUsers?.[0]?.seq === data?.[0]?.seq) {
            return true;
        }
        return false;
    }, [selectedUsers, data]);

    return (
        <Grid container alignItems="center">
            <Grid item xs={6}>
                User
            </Grid>
            <Grid item xs={6} display="flex" alignItems="center" justifyContent="flex-end" gap="5px">
                <Typography>Check all</Typography>
                <Checkbox size="small" checked={checked} onChange={handleCheckAll} />
            </Grid>
            <List sx={ListBoxStyle}>
                {data?.map((item, index) => {
                    const labelId = `checkbox-list-label-${item.seq}`;
                    return (
                        <ListItem key={item.seq} disablePadding>
                            <ListItemButton
                                style={{ padding: '0 12px', height: '42px' }}
                                role={undefined}
                                onClick={handleToggle(item, index)}
                                dense
                            >
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={!!selectedUsers?.find((a) => a.seq === item.seq)}
                                        size="small"
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={`${item.fullname}(${item.username})`} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Grid>
    );
}

export function CancelList({ data, setSelectedUsers }) {
    const handleCancelAll = () => {
        setSelectedUsers([]);
    };
    const cancelItem = (seq) => {
        setSelectedUsers((prevState) => prevState.filter((a) => a.seq !== seq));
    };
    return (
        <Grid container alignItems="center">
            <Grid item xs={6}>
                Selected user
            </Grid>
            <Grid item xs={6} display="flex" alignItems="center" justifyContent="flex-end" gap="5px">
                <Button size="small" endIcon={<CloseIcon />} variant="outlined" onClick={handleCancelAll}>
                    Cancel all
                </Button>
            </Grid>
            <List sx={{ ...ListBoxStyle, marginTop: '12px' }}>
                {data?.map((item, index) => {
                    const labelId = `checkbox-list-label-${index}`;

                    return (
                        <ListItem
                            key={index}
                            disablePadding
                            secondaryAction={
                                <IconButton aria-label="comment" size="small" onClick={() => cancelItem(item.seq)}>
                                    <CloseIcon fontSize="12" />
                                </IconButton>
                            }
                        >
                            <ListItemButton style={{ padding: '0 12px', height: '42px' }} role={undefined} dense>
                                <ListItemText id={labelId} primary={`${item.fullname}(${item.username})`} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Grid>
    );
}
