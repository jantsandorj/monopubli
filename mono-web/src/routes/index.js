import { useLocation, useRoutes, Navigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from "react-router";

// routes
import MainRoutes from "./mainRoutes";
import AuthRoutes from "./authRoutes";
import {storeUser} from "store/authSlice";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    const location = useLocation();
    const navigate = useNavigate();
    const user = useSelector((state) => state.authentication.user);
    const routes = useRoutes([...MainRoutes, ...AuthRoutes]);
    const dispatch = useDispatch();

    const parseJwt = (token) => {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(
            window
                .atob(base64)
                .split('')
                .map(function (c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join('')
        );

        return JSON.parse(jsonPayload);
    };

    if(AuthRoutes.find(a => a.path === location.pathname)){
        if(!user){
            navigate('/login');
        }

        if (user) {
            let expDate = parseJwt(user)?.exp;
            if (expDate * 1000 < Date.now()) {
                alert('token_expired');
                dispatch(storeUser(null));
                localStorage.removeItem('user');
                navigate('/login');
            }
        }
    }

    return (
        <>
            {routes}
        </>
    );
}
