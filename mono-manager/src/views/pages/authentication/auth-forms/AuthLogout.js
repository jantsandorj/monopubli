import URL from 'api/url';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// ============================|| FIREBASE - LOGOUT ||============================ //

const AuthLogout = ({ ...others }) => {
    const navigate = useNavigate();

    useEffect(function () {
        //  removing token from localStorage
        localStorage.removeItem('user');
        navigate(URL.LOGIN);
        return function () {};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div>Logging out...</div>;
};

export default AuthLogout;
