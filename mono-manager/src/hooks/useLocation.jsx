import { useLocation as loc } from 'react-router-dom';

export const useLocation = () => {
    const getCode = () => {
        const location = loc();
        const code = location.search?.toString().split('code=')[1]?.toString().split('&')[0];
        return code;
    };

    return { getCode };
};
