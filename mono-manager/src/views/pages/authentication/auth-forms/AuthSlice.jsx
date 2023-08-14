import { createSlice } from '@reduxjs/toolkit';
import ObjectUtil from 'utils/ObjectUtil';

export const AuthenticationSlice = createSlice({
    name: 'authentication',
    initialState: {
        isOpenSignIn: false,
        isOpenSignUp: false,
        user: localStorage.getItem('user') === null ? null : ObjectUtil.safeJsonParse(localStorage.getItem('user'))
    },
    reducers: {
        openSignIn: (state) => {
            state.isOpenSignIn = true;
        },
        closeSignIn: (state) => {
            state.isOpenSignIn = false;
        },
        openSignUp: (state) => {
            state.isOpenSignUp = true;
        },
        closeSignUp: (state) => {
            state.isOpenSignUp = false;
        },
        storeUser: (state, action) => {
            if (action.payload !== undefined && action.payload !== null) {
                state.user = action.payload;
                localStorage.setItem('user', ObjectUtil.safeJsonStringify(action.payload));
            } else if (action.payload === null) {
                state.user = null;
                localStorage.removeItem('user');
            }
        }
    }
});

export const { openSignIn, closeSignIn, openSignUp, closeSignUp, storeUser } = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer;
