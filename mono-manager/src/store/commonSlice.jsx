import { createSlice } from '@reduxjs/toolkit';

const commonSlice = createSlice({
    name: 'common',
    initialState: {
        value: []
    },
    reducers: {
        setValue(state, action) {
            state.value = action.payload;
        }
    }
});

export const { setValue } = commonSlice.actions;

export default commonSlice.reducer;
