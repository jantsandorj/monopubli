import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    type: '',
    onOpen: false,
    title: '',
    description: '',
    onBtn: false,
    onBtnAction: {},
    onBtnTxt: ''
};

export const ModalSlice = createSlice({
    name: 'modalSlice',
    initialState: initialState,
    reducers: {
        setModalOptionsCancel: (state) => {
            state.type = '';
            state.onOpen = false;
            state.title = '';
            state.description = '';
            state.onBtn = false;
            state.onBtnAction = {};
            state.onBtnTxt = '';
        },
        setModalOptionsOpen: (state, action) => {
            state.type = action.payload?.type;
            state.onOpen = action.payload?.onOpen;
            state.title = action.payload?.title;
            state.description = action.payload?.description;
            state.onBtn = action.payload?.onBtn;
            state.onBtnAction = action.payload?.onBtnAction;
            state.onBtnTxt = action.payload?.onBtnTxt;
        }
    }
});

export const { setModalOptionsOpen, setModalOptionsCancel } = ModalSlice.actions;
export default ModalSlice.reducer;
