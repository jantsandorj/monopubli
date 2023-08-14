import { setLoggedInUser } from 'utils/functions/common';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from './AuthApi';
import { storeUser } from './AuthSlice';
import { useTranslation } from 'react-i18next';
import { setModalOptionsOpen } from 'store/modalSlice';

export const useAuth = () => {
    const [Login, { data, isLoading }] = useLoginMutation();
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(storeUser(null));
    };

    useEffect(() => {
        if (data?.status === 'UNAUTHORIZED') {
            dispatch(
                setModalOptionsOpen({
                    type: 'error',
                    onOpen: true,
                    description: t(data?.message)
                })
            );
        } else if (data?.status === 'success') {
            dispatch(
                setModalOptionsOpen({
                    type: 'success',
                    onOpen: true,
                    description: t('successfully_login')
                })
            );
            dispatch(storeUser(data));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    const logIn = async (formData) => {
        await Login(formData);
        setLoggedInUser(data);
    };

    return { logIn, logOut, isLoading };
};
