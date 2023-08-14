import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const RecursiveList = ({ items }) => {
    const renderList = (items) => (
        <List>
            {items.map((item) => (
                <ListItem key={item.id}>
                    <ListItemText primary={item.label} />
                    {item.childs && renderList(item.childs)}
                </ListItem>
            ))}
        </List>
    );

    return renderList(items);
};

export default RecursiveList;
