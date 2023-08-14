import { combineReducers } from 'redux';
import { useDispatch as useDispatchBase, useSelector as useSelectorBase } from 'react-redux';
import AuthenticationReducer from 'views/pages/authentication/auth-forms/AuthSlice';
import { configureStore } from '@reduxjs/toolkit';
import Reducer from './reducer';
import { Middlewares } from './middlewares';
import menuSlice from 'store/menuSlice';
import modalSlice from 'store/modalSlice';
import commonSlice from './commonSlice';

/**
 * Redux store
 */
const store = configureStore({
    reducer: combineReducers({
        menuSlice: menuSlice,
        modalSlice: modalSlice,
        commonSlice: commonSlice,
        authentication: AuthenticationReducer,
        ...Reducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Middlewares)
});

export default store;
export const useDispatch = () => useDispatchBase();
export const useSelector = (selector) => useSelectorBase(selector);
