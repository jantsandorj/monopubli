import { useMemo } from 'react';

export const useUser = () => {
    function parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(
            window
                .atob(base64)
                .split('')
                .map(function (c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join('')
        );

        return JSON.parse(jsonPayload);
    }

    const getUser = () => {
        const user = localStorage.getItem('user');
        if (!user) return user;
        return parseJwt(JSON.parse(user).token);
    };

    const userData = useMemo(() => {
        const user = localStorage.getItem('user');
        if (!user) return user;
        return parseJwt(JSON.parse(user).token);
    }, []);

    return { userData, getUser };
};
