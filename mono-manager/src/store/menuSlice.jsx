import { createSlice } from '@reduxjs/toolkit';
import { config } from 'config';

export const MenuSlice = createSlice({
    name: 'menuSlice',
    initialState: {
        isOpen: [], // for active default menu
        fontFamily: config.fontFamily,
        borderRadius: '3px',
        opened: true
    },
    reducers: {
        menuOpen: (state, action) => {
            let id = action.payload;
            state.isOpen = [id];
        },
        setMenu: (state, action) => {
            state.opened = action.payload;
        },
        setFontFamily: (state, action) => {
            state.fontFamily = action.payload;
        },
        setBorderRadius: (state, action) => {
            state.borderRadius = action.payload;
        }
    }
});

export const { menuOpen, setMenu, setBorderRadius, setFontFamily } = MenuSlice.actions;
export default MenuSlice.reducer;
